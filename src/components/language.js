import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const languageName = {
  en: 'en',
  ru: 'ru',
  by: 'by',
};

const Language = () => (
  <div>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => languages.map(language => (
        <button
          type="button"
          onKeyDown={() => undefined}
          onClick={() => changeLocale(language)}
          style={{
            color: currentLocale === language ? 'yellow' : 'white',
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
