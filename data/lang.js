var langs = {
    'ar'     : 'Arabic',
    'ar-ma'  : 'Arabic (Morocco)',
    'ar-sa'  : 'Arabic (Saudi Arabia)',
    'az'     : 'Azerbaijani',
    'bg'     : 'Bulgarian',
    'bn'     : 'Bengali',
    'br'     : 'Breton',
    'bs'     : 'Bosnian',
    'ca'     : 'Catalan',
    'cs'     : 'Czech',
    'cv'     : 'Chuvash',
    'cy'     : 'Welsh',
    'da'     : 'Danish',
    'de'     : 'German',
    'de-at'  : 'German (Austria)',
    'el'     : 'Greek',
    'en'     : 'English',
    'en-au'  : 'English (Australia)',
    'en-ca'  : 'English (Canada)',
    'en-gb'  : 'English (England)',
    'eo'     : 'Esperanto',
    'es'     : 'Spanish',
    'et'     : 'Estonian',
    'eu'     : 'Basque',
    'fa'     : 'Persian',
    'fi'     : 'Finnish',
    'fo'     : 'Farose',
    'fr'     : 'French',
    'fr-ca'  : 'French (Canada)',
    'gl'     : 'Galician',
    'he'     : 'Hebrew',
    'hi'     : 'Hindi',
    'hr'     : 'Croatian',
    'hu'     : 'Hungarian',
    'hy-am'  : 'Armenian',
    'id'     : 'Bahasa Indonesia',
    'is'     : 'Icelandic',
    'it'     : 'Italian',
    'ja'     : 'Japanese',
    'ka'     : 'Georgian',
    'km'     : 'Khmer (Cambodia)',
    'ko'     : 'Korean',
    'lt'     : 'Lithuanian',
    'lv'     : 'Latvian',
    'ml'     : 'Malayalam',
    'mr'     : 'Marathi',
    'ms-my'  : 'Bahasa Malayu',
    'nb'     : 'Norwegian',
    'ne'     : 'Nepalese',
    'nl'     : 'Dutch',
    'nn'     : 'Norwegian Nynorsk',
    'pl'     : 'Polish',
    'pt'     : 'Portuguese',
    'pt-br'  : 'Portuguese (Brazil)',
    'ro'     : 'Romanian',
    'ru'     : 'Russian',
    'sk'     : 'Slovak',
    'sl'     : 'Slovenian',
    'sq'     : 'Albanian',
    'sr'     : 'Serbian',
    'sr-cyr' : 'Serbian Cyrillic',
    'sv'     : 'Swedish',
    'ta'     : 'Tamil',
    'th'     : 'Thai',
    'tl-ph'  : 'Tagalog (Filipino)',
    'tr'     : 'Turkish',
    'tzm-la' : 'Tamaziɣt',
    'uk'     : 'Ukrainian',
    'uz'     : 'Uzbek',
    'zh-cn'  : 'Chinese',
    'zh-tw'  : 'Chinese (Traditional)'
};

module.exports = Object.keys(langs).map(function(key){
    return {
        abbr : key,
        name : langs[key]
    };
}).sort(function (a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
});
