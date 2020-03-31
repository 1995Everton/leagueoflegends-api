export function getLocale(locale:string): number{
    const all_locale = {
        "en_US": 1,
        "cs_CZ": 2,
        "de_DE": 3,
        "el_GR": 4,
        "en_AU": 5,
        "en_GB": 6,
        "en_PH": 7,
        "en_SG": 8,
        "es_AR": 9,
        "es_ES": 10,
        "es_MX": 11,
        "fr_FR": 12,
        "hu_HU": 13,
        "it_IT": 14,
        "ja_JP": 15,
        "ko_KR": 16,
        "pl_PL": 17,
        "pt_BR": 18,
        "ro_RO": 19,
        "ru_RU": 20,
        "th_TH": 21,
        "tr_TR": 22,
        "vn_VN": 23,
        "zh_CN": 24,
        "zh_MY": 25,
        "zh_TW": 26
    }
    return all_locale[locale] || all_locale["en_US"];
}