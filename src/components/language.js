import React, { useState } from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import Select from '@material-ui/core/Select';

const Language = () => {
  const [selectValue, setSelectValue] = useState(window.location.pathname.split('/')[1]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectValue(value);
    changeLocale(value);
  };

  return (
    <div>
      <IntlContextConsumer>
        {
          ({ languages }) => (
            <Select value={selectValue} onChange={handleChange} native>
              {
                languages.map(language => (
                  <option key={language} value={language}>{ language }</option>
                ))
              }
            </Select>
          )
        }
      </IntlContextConsumer>
    </div>
  );
};

export default Language;
