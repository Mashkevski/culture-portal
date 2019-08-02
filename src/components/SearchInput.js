import React, { useState } from 'react';
import propTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

function filterPoets(inputValue, selectValue, poets) {
  return selectValue === 'name'
    ? poets.filter(poet => poet.node.poet.name.toLowerCase().includes(inputValue))
    : poets.filter(poet => poet.node.poet.birthPlace.toLowerCase().includes(inputValue));
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  select: {
    marginLeft: 10,
  },
});

const SearchInput = ({ poets, setPoets, intl }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('name');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    setPoets(filterPoets(value.toLowerCase(), selectValue, poets));
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelectValue(value);
    setPoets(filterPoets(inputValue.toLowerCase(), value, poets));
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        className={classes.input}
        id="searchForPoets"
        label={intl.messages['search.value']}
        value={inputValue}
        onChange={handleInputChange}
        variant="outlined"
      />
      <Select
        className={classes.select}
        value={selectValue}
        onChange={handleSelectChange}
        native
      >
        <option value="name">{ intl.messages['search.params.name'] }</option>
        <option value="birthPlace">{ intl.messages['search.params.birthPlace'] }</option>
      </Select>
    </div>
  );
};

SearchInput.propTypes = {
  poets: propTypes.arrayOf(
    propTypes.shape({
      node: propTypes.shape({
        poet: propTypes.shape({
          name: propTypes.string.isRequired,
          birthPlace: propTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  setPoets: propTypes.func.isRequired,
  intl: propTypes.shape({
    messages: propTypes.shape({
      'search.value': propTypes.string.isRequired,
      'search.params.name': propTypes.string.isRequired,
      'search.params.birthPlace': propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default injectIntl(SearchInput);
