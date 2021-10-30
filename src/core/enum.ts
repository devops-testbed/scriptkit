export enum Mode {
  FILTER = "FILTER",
  GENERATE = "GENERATE",
  HOTKEY = "HOTKEY",
  MANUAL = "MANUAL",
}

export enum Channel {
  CHOICE_FOCUSED = "CHOICE_FOCUSED",
  CLEAR_CACHE = "CLEAR_CACHE",
  CLEAR_PROMPT_CACHE = "CLEAR_PROMPT_CACHE",
  CONSOLE_CLEAR = "CONSOLE_CLEAR",
  CONSOLE_LOG = "CONSOLE_LOG",
  CONSOLE_WARN = "CONSOLE_WARN",
  CONTENT_HEIGHT_UPDATED = "CONTENT_HEIGHT_UPDATED",
  CONTENT_SIZE_UPDATED = "CONTENT_SIZE_UPDATED",
  COPY_PATH_AS_PICTURE = "COPY_PATH_AS_PICTURE",
  CREATE_KENV = "CREATE_KENV",
  EDIT_SCRIPT = "EDIT_SCRIPT",
  ESCAPE_PRESSED = "ESCAPE_PRESSED",
  EXIT = "EXIT",
  FLAG_SUBMITTED = "FLAG_SUBMITTED",
  GENERATE_CHOICES = "GENERATE_CHOICES",
  GET_BACKGROUND = "GET_BACKGROUND",
  GET_MOUSE = "GET_MOUSE",
  GET_SCHEDULE = "GET_SCHEDULE",
  GET_SCREEN_INFO = "GET_SCREEN_INFO",
  GET_SCRIPTS_STATE = "GET_SCRIPTS_STATE",
  GET_SERVER_STATE = "GET_SERVER_STATE",
  GROW_PROMPT = "GROW_PROMPT",
  HIDE_APP = "HIDE_APP",
  NEEDS_RESTART = "NEEDS_RESTART",
  OPEN_KIT_LOG = "OPEN_KIT_LOG",
  OPEN_FILE = "OPEN_FILE",
  OPEN_SCRIPT = "OPEN_SCRIPT",
  OPEN_SCRIPT_LOG = "OPEN_SCRIPT_LOG",
  PROMPT_BLURRED = "PROMPT_BLURRED",
  PROMPT_BOUNDS_UPDATED = "PROMPT_BOUNDS_UPDATED",
  PROMPT_ERROR = "PROMPT_ERROR",
  QUIT_APP = "QUIT_APP",
  RESET_PROMPT = "RESET_PROMPT",
  RUN_SCRIPT = "RUN_SCRIPT",
  SEND_RESPONSE = "SEND_RESPONSE",
  SET_CHOICES = "SET_CHOICES",
  SET_EDITOR_CONFIG = "SET_EDITOR_CONFIG",
  SET_FLAGS = "SET_FLAGS",
  SET_DIV_HTML = "SET_DIV_HTML",
  SET_FORM_HTML = "SET_FORM_HTML",
  SET_HINT = "SET_HINT",
  SET_IGNORE_BLUR = "SET_IGNORE_BLUR",
  SET_INPUT = "SET_INPUT",
  SET_LOG = "SET_LOG",
  SET_LOGIN = "SET_LOGIN",
  SET_MAIN_HEIGHT = "SET_MAIN_HEIGHT",
  SET_MAX_HEIGHT = "SET_MAX_HEIGHT",
  SET_MODE = "SET_MODE",
  SET_PANEL = "SET_PANEL",
  SET_PID = "SET_PID",
  SET_PLACEHOLDER = "SET_PLACEHOLDER",
  SET_PREVIEW = "SET_PREVIEW",
  SET_PROMPT_BOUNDS = "SET_PROMPT_BOUNDS",
  SET_PROMPT_DATA = "SET_PROMPT_DATA",
  SET_PROMPT_PROP = "SET_PROMPT_PROP",
  SET_SCRIPT = "SET_SCRIPT",
  SET_TAB_INDEX = "SET_TAB_INDEX",
  SET_TEXTAREA_CONFIG = "SET_TEXTAREA_CONFIG",
  SET_THEME = "SET_THEME",
  SET_TOP_HEIGHT = "SET_TOP_HEIGHT",
  SHOW = "SHOW",
  SHOW_IMAGE = "SHOW_IMAGE",
  SHOW_NOTIFICATION = "SHOW_NOTIFICATION",
  SHOW_TEXT = "SHOW_TEXT",
  SHRINK_PROMPT = "SHRINK_PROMPT",
  SWITCH_KENV = "SWITCH_KENV",
  TAB_CHANGED = "TAB_CHANGED",
  TOGGLE_BACKGROUND = "TOGGLE_BACKGROUND",
  TOGGLE_TRAY = "TOGGLE_TRAY",
  UPDATE_APP = "UPDATE_APP",
  UPDATE_PROMPT_WARN = "UPDATE_PROMPT_WARN",
  USER_RESIZED = "USER_RESIZED",
  VALUE_SUBMITTED = "VALUE_SUBMITTED",
}

export enum ProcessType {
  App = "App",
  Background = "Background",
  KIT_PROCESS = "KIT_PROCESS",
  Prompt = "Prompt",
  Schedule = "Schedule",
  System = "System",
  Watch = "Watch",
}

export enum ErrorAction {
  Ask = "Ask",
  KitLog = "KitLog",
  Log = "Log",
  Open = "Open",
  CopySyncPath = "CopySyncPath",
}

export enum ProcessState {
  Active = "Active",
  Idle = "Idle",
}

export enum UI {
  none = 0,
  arg = 1 << 0,
  textarea = 1 << 1,
  hotkey = 1 << 2,
  drop = 1 << 3,
  editor = 1 << 4,
  form = 1 << 5,
  div = 1 << 6,
  log = 1 << 7,
}

export enum Bin {
  cli = "cli",
  scripts = "scripts",
}

export enum Secret {
  password = "password",
  text = "text",
}
