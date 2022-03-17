import Toast from "react-native-root-toast"
import { loadLocale } from "../i18n"
import { load, save } from "./storage"

const LanguageKey = "language"
/**
 * @description Save the language on local storage and cause the restart of the app
 */
export const changeLanguage = (language) => {
  // Check if language is changed then restart the app
  save(LanguageKey, language)
  loadLocale(language, true)
}

/**
 * @description Get language on local storage
 */
export const getLanguage = () => {
  load(LanguageKey).then((value) => {
    return value
  })
}

export const toastWrapper = (message) => {
  Toast.show(message, {
    position: Toast.positions.TOP,
    duration: Toast.durations.LONG,
  })
}
