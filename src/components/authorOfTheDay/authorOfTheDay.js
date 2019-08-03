import React from 'react';
import { Link, injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import styles from './authorOfTheDay.module.css';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(lightBlue[600]),
    backgroundColor: lightBlue[600],
    '&:hover': {
      backgroundColor: lightBlue[800],
    },
  },
}))(Button);

const AuthorOfTheDay = ({ poets }) => {
  const date = new Date();
  const day = date.getDate();
  const index = day % poets.length;
  const poetsUnique = poets.filter(
    (currentPoet, poetIndex, poetsArray) => poetIndex === poetsArray.findIndex(
      testedPoet => (
        testedPoet.node.title === currentPoet.node.title),
    ),
  );

  poetsUnique.sort((a, b) => (a.node.title > b.node.title ? 1 : -1));
  const poetOfTheDay = poetsUnique[index].node;

  return (
    <section className={styles.author}>
      <h2 className={styles.author_title}>
        <FormattedMessage id="author_of_the_day_title" />
      </h2>
      <h3 className={styles.author_name}>
        {poetOfTheDay.poet.name}
      </h3>
      <p className={styles.author_date}>
        {poetOfTheDay.poet.date}
      </p>
      <img className={styles.author_photo} src={poetOfTheDay.image.file.url} alt="Author" />
      <p className={styles.author_vita}>
        {poetOfTheDay.poet.vita}
      </p>
      <Link to={`/${poetOfTheDay.title}`} className={styles.author_btn}>
        <ColorButton variant="contained">
          <FormattedMessage id="button" />
        </ColorButton>
      </Link>
    </section>
  );
};

export default injectIntl(AuthorOfTheDay);

AuthorOfTheDay.propTypes = {
  poets: PropTypes.arrayOf({
    poet: PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      vita: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
    }).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
