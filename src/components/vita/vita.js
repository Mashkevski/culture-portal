import React from 'react';
import propTypes from 'prop-types';
import { Container } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './vitaStyles';

const TimelineComponent = ({
  img, vita, liveDates, birthPlace, name, lng, id,
}) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width: 850px)');
  // it needs to change styles for size of image/block for vita
  let widthForImage;
  let heightForImage;
  let gridTemplatesRowsForVita;
  if (id === 'los') {
    widthForImage = 300;
    heightForImage = 240;
    gridTemplatesRowsForVita = '35% 65%';
  } else if (id === 'brovka') {
    widthForImage = 220;
    heightForImage = 280;
    gridTemplatesRowsForVita = '30% 70%';
  } else if (id === 'volosevich') {
    widthForImage = 220;
    heightForImage = 260;
    gridTemplatesRowsForVita = '38% 50%';
  } else if (id === 'verba') {
    widthForImage = 240;
    heightForImage = 300;
    gridTemplatesRowsForVita = '60% 40%';
  } else if (id === 'krapiva') {
    widthForImage = 240;
    heightForImage = 300;
    gridTemplatesRowsForVita = '20% 80%';
  } else {
    widthForImage = 250;
    heightForImage = 340;
    gridTemplatesRowsForVita = '35% 65%';
  }
  let placeOfBirth;
  if (lng === 'by') placeOfBirth = 'Месца нараджэння:';
  else if (lng === 'en') placeOfBirth = 'Place of birth:';
  else if (lng === 'ru') placeOfBirth = 'Место рождения:';
  return (
    <Container className={classes.mainContainer}>
      <Container className={matches ? classes.containerWithImageAndInfo : ''}>
        <div className={matches ? classes.containerImg : ''}>
          <img
            src={img}
            alt="Sorry"
            width={widthForImage}
            height={heightForImage}
            className={classes.Img}
          />
        </div>
        <h3
          style={{
            color: '#039be5',
            marginBottom: '5px',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
          }}
        >
          {name}
        </h3>
        <h5 className={classes.containerSecondHeader}>
          {liveDates}
        </h5>
        <Container
          className={classes.containerWithInfo}
          style={{ gridTemplateRows: gridTemplatesRowsForVita }}
        >
          <p className={classes.containerplaceBirth}>
            <span className={classes.containerVitaFirstCh}>
              {placeOfBirth}
            </span>
            <span>
              &nbsp;
              {birthPlace}
            </span>
          </p>
          <p className={classes.containerVita}>
            <span>
              {vita}
            </span>
          </p>
        </Container>
      </Container>
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
  lng: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};
