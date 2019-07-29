import React from 'react';
import {
  List, ListItem, Select, Button, Grid, MenuItem, Input,
} from '@material-ui/core';
import { Link } from 'gatsby';
import './style.css';

// search info by value in input 'search author'

class SearchWidget extends React.Component {
  constructor(props) {
    super(props);
    this.authorsNameRu = ['petr ustinovich brovka', 'vera verba', 'edward stanislavovich volosevich',
      'pyotr fedorovich glebka', 'kondrat krapiva', 'evdokia yakovlevna los'];
    this.authorsBirthPlaceRu = ['Minsk Region', 'Vitebsk region', 'Mogilyov region',
      'Minsk Region', 'Minsk Region', 'Vitebsk region'];
    this.baseRegion = 'Choose region';
    this.state = {
      authors: this.authorsNameRu,
      selectCurrent: 'Choose region',
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
  }

  handleChange(event) {
    const textFromInput = event.target.value.toLowerCase();
    const authorsAfterSearch = this.authorsNameRu.filter(el => el.indexOf(textFromInput) !== -1);
    this.setState({ authors: authorsAfterSearch });
  }

  selectChange(event) {
    const text = event.target.value;
    this.setState({ selectCurrent: text });
  }

  render() {
    const { authors, selectCurrent } = this.state;
    const authorsNormalCase = ['Petr Ustinovich Brovka', 'Vera Verba', 'Edward Stanislavovich Volosevich',
      'Pyotr Fedorovich Glebka', 'Kondrat Krapiva', 'Evdokia Yakovlevna Los'];
    return (
      <Grid
        justify="center"
        alignItems="center"
        className="parent-of-search-input"
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Input
            className="search-input"
            type="text"
            placeholder="search author"
            id="search-widget--input"
            onChange={this.handleChange}
          />
          <Select
            onChange={this.selectChange}
            value={selectCurrent}
          >
            <MenuItem value="Choose region">
              Choose region
            </MenuItem>
            <MenuItem value="Minsk Region">
              Minsk Region
            </MenuItem>
            <MenuItem value="Vitebsk region">
              Vitebsk region
            </MenuItem>
            <MenuItem value="Mogilyov region">
              Mogilyov region
            </MenuItem>
          </Select>
        </Grid>
        <List className="search-widget--list-with-authors">
          {(authors.indexOf(this.authorsNameRu[0]) !== -1
          && (selectCurrent === this.authorsBirthPlaceRu[0]
          || selectCurrent === this.baseRegion))
          && (
          <ListItem className="no-indent">
            <Link to="/author" className="search-widget--authors-links">
              <Button className="search-widget-authors-links--button">
                {authorsNormalCase[0]}
              </Button>
            </Link>
          </ListItem>
          )}
          {(authors.indexOf(this.authorsNameRu[1]) !== -1
          && (selectCurrent === this.authorsBirthPlaceRu[1]
          || selectCurrent === this.baseRegion))
          && (
          <ListItem>
            <Link to="/author" className="search-widget--authors-links">
              <Button className="search-widget-authors-links--button">
                {authorsNormalCase[1]}
              </Button>
            </Link>
          </ListItem>
          )}
          {(authors.indexOf(this.authorsNameRu[2]) !== -1
          && (selectCurrent === this.authorsBirthPlaceRu[2]
          || selectCurrent === this.baseRegion))
          && (
          <ListItem>
            <Link to="/author" className="search-widget--authors-links">
              <Button className="search-widget-authors-links--button">
                {authorsNormalCase[2]}
              </Button>
            </Link>
          </ListItem>
          )}
          {(authors.indexOf(this.authorsNameRu[3]) !== -1
          && (selectCurrent === this.authorsBirthPlaceRu[3]
          || selectCurrent === this.baseRegion))
          && (
          <ListItem>
            <Link to="/author" className="search-widget--authors-links">
              <Button className="search-widget-authors-links--button">
                {authorsNormalCase[3]}
              </Button>
            </Link>
          </ListItem>
          )}
          {(authors.indexOf(this.authorsNameRu[4]) !== -1
          && (selectCurrent === this.authorsBirthPlaceRu[4]
          || selectCurrent === this.baseRegion))
          && (
          <ListItem>
            <Link to="/author" className="search-widget--authors-links">
              <Button className="search-widget-authors-links--button">
                {authorsNormalCase[4]}
              </Button>
            </Link>
          </ListItem>
          )}
          {(authors.indexOf(this.authorsNameRu[5]) !== -1
          && (selectCurrent === this.authorsBirthPlaceRu[5]
          || selectCurrent === this.baseRegion))
          && (
          <ListItem>
            <Link to="/author" className="search-widget--authors-links">
              <Button className="search-widget-authors-links--button">
                {authorsNormalCase[5]}
              </Button>
            </Link>
          </ListItem>
          )}
        </List>
      </Grid>
    );
  }
}

export default SearchWidget;
