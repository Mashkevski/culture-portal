import React from 'react';
import propTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';

const PoetCard = ({ data }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h2">
        {data.poet.name}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {data.poet.date}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {data.poet.birthPlace}
      </Typography>
      <Typography variant="body1" component="p">
        {data.poet.vita}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={`/${data.title}`} style={{ textDecoration: 'none' }}>
        <Button size="small" color="primary">
          Learn more
        </Button>
      </Link>
    </CardActions>
  </Card>
);

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
