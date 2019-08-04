import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    maxWidth: 800,
    padding: 0,
    textAlign: 'center',
  },
  imageContainer: {
    width: 320,
    maxHeight: 400,
    padding: 0,
    borderRadius: 6,
    overflow: 'hidden',
  },
  name: {
    color: '#039be5',
    margin: '5px 0',
  },
  vita: {
    marginTop: 5,
    fontSize: 18,
  },
});

const TimelineComponent = ({
  img, vita, liveDates, birthPlace, name,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.mainContainer}>
      <Container className={classes.imageContainer}>
        <img
          src={img}
          alt={name}
          width={320}
          className={classes.img}
        />
      </Container>
      <h2 className={classes.name}>{name}</h2>
      <h4>{liveDates}</h4>
      <h4>{birthPlace}</h4>
      <p className={classes.vita}>{vita}</p>
    </Container>
  );
};

export default TimelineComponent;

TimelineComponent.propTypes = {
  img: propTypes.string.isRequired,
  vita: propTypes.string.isRequired,
  liveDates: propTypes.string.isRequired,
  birthPlace: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};
