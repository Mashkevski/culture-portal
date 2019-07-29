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
    this.authorsNameRu = ['пятрусь усцінавіч броўка', 'вера вярба', 'эдуард станіслававіч валасевіч',
      'пятро фёдаравіч глебка', 'кандрат крапіва', 'еўдакія якаўлеўна лось'];
    this.authorsBirthPlaceRu = ['Мінская вобласць', 'Віцебская вобласць', 'Магілёўская вобласць',
      'Мінская вобласць', 'Мінская вобласць', 'Віцебская вобласць'];
    this.baseRegion = 'Выберыце вобласць';
    this.state = {
      authors: this.authorsNameRu,
      selectCurrent: 'Выберыце вобласць',
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
    const authorsNormalCase = ['Пятрусь Усцінавіч Броўка', 'Вера Вярба', 'Эдуард Станіслававіч Валасевіч',
      'Пятро Фёдаравіч Глебка', 'Кандрат Крапіва', 'Еўдакія Якаўлеўна Лось'];
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
            placeholder="шукаць аўтара"
            id="search-widget--input"
            onChange={this.handleChange}
          />
          <Select
            style={{ color: 'red' }}
            onChange={this.selectChange}
            value={selectCurrent}
          >
            <MenuItem value="Выберыце вобласць" style={{ color: 'red' }}>
              Выберыце вобласць
            </MenuItem>
            <MenuItem value="Мінская вобласць" style={{ color: 'red' }}>
              Мінская вобласць
            </MenuItem>
            <MenuItem value="Віцебская вобласць" style={{ color: 'red' }}>
              Віцебская вобласць
            </MenuItem>
            <MenuItem value="Магілёўская вобласць" style={{ color: 'red' }}>
              Магілёўская вобласць
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
