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
    this.authorsNameRu = ['петрусь устинович бровка', 'вера верба', 'эдуард станиславович волосевич',
      'пётр фёдорович глебка', 'кондрат крапива', 'евдокия яковлевна лось'];
    this.authorsBirthPlaceRu = ['Минская область', 'Витебская область', 'Могилёвская область',
      'Минская область', 'Минская область', 'Витебская область'];
    this.baseRegion = 'Выберите область';
    this.state = {
      authors: this.authorsNameRu,
      selectCurrent: 'Выберите область',
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
    const authorsNormalCase = ['Петрусь Устинович Бровка', 'Вера Верба', 'Эдуард Станиславович Волосевич',
      'Пётр Фёдорович Глебка', 'Кондрат Крапива', 'Евдокия Яковлевна Лось'];
    return (
      <Grid
        justify="center"
        alignItems="center"
        className="parent-of-search-input"
      >
        {/* <Search /> */}
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
            placeholder="искать автора"
            id="search-widget--input"
            onChange={this.handleChange}
          />
          <Select
            style={{ color: 'red' }}
            onChange={this.selectChange}
            value={selectCurrent}
          >
            <MenuItem value="Выберите область" style={{ color: 'red' }}>
              Выберите область
            </MenuItem>
            <MenuItem value="Минская область" style={{ color: 'red' }}>
              Минская область
            </MenuItem>
            <MenuItem value="Витебская область" style={{ color: 'red' }}>
              Витебская область
            </MenuItem>
            <MenuItem value="Могилёвская область" style={{ color: 'red' }}>
              Могилёвская область
            </MenuItem>
          </Select>
        </Grid>
        <List className="search-widget--list-with-authors">
          {(authors.indexOf(this.authorsNameRu[0]) !== -1
          && (selectCurrent === this.authorsBirthPlaceRu[0]
          || selectCurrent === this.baseRegion))
          && (
            <ListItem>
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
