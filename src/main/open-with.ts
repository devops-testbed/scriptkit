// Description: Open with...

let filePath = await path()

setName(``)
let findApps = async () => {
  let apps = await fileSearch("", {
    onlyin: "/",
    kind: "application",
  })

  return {
    apps,
  }
}

let createChoices = async () => {
  let { apps } = await findApps()
  let group = path => apps =>
    apps
      .filter(app => app.match(path))
      .sort((a, b) => {
        let aName = a.replace(/.*\//, "")
        let bName = b.replace(/.*\//, "")
        return aName > bName ? 1 : aName < bName ? -1 : 0
      })
  return await Promise.all(
    [
      ...group(/^\/Applications\/(?!Utilities)/)(apps),
      ...group(/^\/System\/Applications/)(apps),
      ...group(/^\/Applications\/Utilities/)(apps),
      ...group(
        /^\/System\/Library\/CoreServices\/Applications/
      )(apps),
      ...group(/^\/System\/Library\/CoreServices/)(apps),
      // ...group(/System/)(apps),
      ...group(/Users/)(apps),
    ].map(async appPath => {
      let appName = appPath.split("/").pop()
      let appPlist = path.resolve(
        appPath,
        "Contents",
        "Info.plist"
      )
      let icon = ``

      if (await isFile(appPlist)) {
        console.warn = () => {}
        let { default: plist } = await import("plist")
        let plistContents = await readFile(
          appPlist,
          "utf-8"
        )
        try {
          let appInfo = plist.parse(plistContents)
          icon = appInfo.CFBundleIconFile
          if (!icon.endsWith(".icns")) icon = icon + ".icns"
        } catch (error) {
          //   console.log(`Error parsing ${appPlist}`)
        }
      }

      let appResourceDir = path.resolve(
        appPath,
        "Contents",
        "Resources"
      )
      let img = ``
      if (await isDir(appResourceDir)) {
        if (!icon) {
          let resourceFiles = await readdir(appResourceDir)
          icon = resourceFiles.find(file =>
            file.match(/\.icns$/)
          )
        }
        if (icon) {
          let iconPath = path.resolve(appResourceDir, icon)
          let assetsPath = kitPath(
            "assets",
            "app-launcher",
            "icons"
          )
          await ensureDir(assetsPath)
          let iconName = `${appName}.png`
          img = path.resolve(assetsPath, iconName)
          try {
            await exec(
              `sips -z 320 320 -s format png '${iconPath}' --out '${img}'`
            )
          } catch {
            log(`Failed to convert ${iconPath} to ${img}`)
          }
        }
      }
      return {
        name: appName.replace(".app", ""),
        value: appPath,
        description: appPath,
        img,
      }
    })
  )
}
let appsDb = await db("apps", async () => {
  setChoices([])
  setPrompt({
    tabs: [],
  })
  console.log(
    `First run: Indexing apps and converting icons...`
  )
  let choices = await createChoices()
  console.clear()
  return {
    choices,
  }
})
let input = ""
let app = await arg(
  {
    input: (flag?.input as string) || "",
    placeholder: "Open with...",
    footer: "cmd+enter to refresh list",
    onInput: i => {
      input = i
    },
  },
  appsDb.choices
)
if (flag?.cmd) {
  await remove(kitPath("db", "apps.json"))
  await run(
    kitPath("main", "app-launcher.js"),
    "--input",
    input
  )
} else {
  let command = `open -a "${app}" "${filePath}"`
  await exec(command)
  hide()
}
export {}
