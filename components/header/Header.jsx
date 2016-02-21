import React, { Component } from 'react';
import i18n from './i18n.js';

export default class extends Component {
    render() {
        let lang = i18n `русского`;

        return <div className='header'>
            <h1 className='header__title'>{i18n `Протестируй свой словарный запас`}</h1>
            <h2 className='header__sub-title'>{i18n `Сколько слов ${lang} языка ты знаешь?`}</h2>
        </div>;
    }
}
