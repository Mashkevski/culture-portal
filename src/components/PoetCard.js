import React from 'react';
import propTypes from 'prop-types';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#ebe9e9',
  },
});

const PoetCard = ({ data }) => {
  const matches = useMediaQuery('(min-width: 600px)');
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.card}>
        <Typography variant="h5" component="h2">
          {data.poet.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {matches ? data.poet.date : ''}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {matches ? data.poet.birthPlace : ''}
        </Typography>
        <Typography variant="body1" component="p">
          {matches ? data.poet.vita : ''}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/${data.title}`} style={{ textDecoration: 'none' }}>
          <Button size="small" color="primary">
            <FormattedMessage id="button" />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

PoetCard.propTypes = {
  data: propTypes.shape({
    poet: propTypes.shape({
      name: propTypes.string.isRequired,
      date: propTypes.string.isRequired,
      birthPlace: propTypes.string.isRequired,
      vita: propTypes.string.isRequired,
    }).isRequired,
    title: propTypes.string.isRequired,
  }).isRequired,
};

export default PoetCard;
