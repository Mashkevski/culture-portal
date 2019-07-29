import React from 'react';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import styles from './authorOfTheDay.module.css';
import los from './los.jpg';


const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(lightBlue[600]),
    backgroundColor: lightBlue[600],
    '&:hover': {
      backgroundColor: lightBlue[800],
    },
  },
}))(Button);


const AuthorOfTheDay = ({ data }) => (
  <div
    className={styles.author}
  >
    <h2
      className={styles.author_title}
    >
      Author of the day
    </h2>
    <h3
      className={styles.author_name}
    >
      Евдокия Яковлевна Лось
    </h3>
    <p
      className={styles.author_date}
    >
      1 марта 1929 - 3 июля 1977
    </p>
    <img
      className={styles.author_photo}
      src={los}
      alt="Author"
    />
    <p
      className={styles.author_vita}
    >
      Белорусский советский писатель, поэт, переводчик, журналист.
      Член Союза писателей СССР (1957). Eе творчество по праву считается
      одной из лучших страниц белорусской женской поэзии ХХ века.

    </p>
    <Link to="/author" className={styles.author_btn}><ColorButton variant="contained">Read more</ColorButton></Link>
  </div>
);

export default AuthorOfTheDay;
