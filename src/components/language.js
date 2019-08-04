import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const languageName = {
  en: 'en',
  ru: 'ru',
  by: 'by',
};

const Language = () => (
  <div
    style={{
      marginLeft: 'auto',
    }}
  >
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => languages.map(language => (
        <button
          type="button"
          onKeyDown={() => undefined}
          onClick={() => changeLocale(language)}
          style={{
            color: currentLocale === language ? '#039be5' : '#eeeeee',
            margin: 10,
            cursor: 'pointer',
            backgroundColor: 'inherit',
            border: 'none',
          }}
        >
          {languageName[language]}
        </button>
      ))
      }
    </IntlContextConsumer>
  </div>
);

export default Language;
