import React from 'react';
import propTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { makeStyles } from '@material-ui/styles';
import './timelineStyle.css';

const useStyles = makeStyles({
  timelineDates: {
    color: '#03a9f4',
  },
  timelineText: {
    background: '#E7E7E7',
    display: 'grid',
    gridAutoRows: 'minmax(100px, auto)',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    padding: '20px',
    borderRadius: '5px',
  },
});

const TimelineComponent = ({ poet }) => {
  const { timelineData } = poet;
  const classes = useStyles();
  return (
    <Timeline lineColor="#ddd">
      {timelineData.map(({ date, text }, i) => (
        <TimelineItem
            // eslint-disable-next-line react/no-array-index-key
          key={i}
          dateText={date}
          className={classes.timelineDates}
        >
          <p className={classes.timelineText}>
            {text}
          </p>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineComponent;

TimelineComponent.propTypes = {
  data: propTypes.shape({
    allContentfulPoets: propTypes.shape({
      edges: propTypes.array,
    }),
  }),
  poet: propTypes.shape({
    timelineData: propTypes.array.isRequired,
  }),
};

TimelineComponent.defaultProps = {
  data: null,
  poet: null,
};
