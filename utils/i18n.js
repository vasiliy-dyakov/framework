import { reduce } from 'lodash';

const
    RU = 'ru',
    EN = 'en',
    LANGS = {
        RU,
        EN
    };

let translates = {
        [RU]: {},
        [EN]: {}
    },
    currentLang = RU;

function setLang(lang) {
    currentLang = lang;
}

function use(newTranslates, lang = EN) {
    Object.assign(translates[lang], newTranslates);
}

function i18n(parts, ...values) {
    let template = reduce(parts, (memo, value, index) => {
            return index === 0
                ? value
                : `${memo}{${index - 1}}${value}`;
        }, ''),
        result = translates[currentLang][template] || template;

    values.forEach((value, index) => {
        result = result.replace(`{${index}}`, value);
    });

    return result;
}

export { i18n, use, setLang, LANGS };
