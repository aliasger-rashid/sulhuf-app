import i18n from "i18n-js"
import { I18nManager } from "react-native"
import RNRestart from "react-native-restart"
import { load } from "../utils/storage"

import en from "./en.json"
import ar from "./ar.json"

i18n.fallbacks = true
i18n.translations = { en, ar }

load("language").then((value) => {
  i18n.locale = value || "en"
  I18nManager.allowRTL(value === "ar")
  I18nManager.forceRTL(value === "ar")
})

export const loadLocale = async (language, restart = false) => {
  i18n.locale = language
  I18nManager.forceRTL(language === "ar")
  I18nManager.allowRTL(language === "ar")
  if (restart) RNRestart.Restart()
}
/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof en
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`
}[keyof TObj & string]
