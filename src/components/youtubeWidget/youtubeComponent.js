import React from 'react';
import ModalVideo from 'react-modal-video';
import propTypes from 'prop-types';
import 'react-modal-video/css/modal-video.min.css';
import { FormattedMessage } from 'gatsby-plugin-intl';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import styles from './youtubeComponent.module.css';

const ColorButton = withStyles(theme => ({
  root: {
    width: '30%',
    minWidth: 300,
    maxWidth: 600,
    color: theme.palette.getContrastText(lightBlue[600]),
    backgroundColor: lightBlue[600],
    '&:hover': {
      backgroundColor: lightBlue[800],
    },
  },
}))(Button);

class VideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { isOpen } = this.state;
    const { id } = this.props;
    return (
      <div className={styles.parent}>
        <ModalVideo channel="youtube" className="modalVideoIframeWrap" isOpen={isOpen} videoId={id} onClose={() => this.setState({ isOpen: false })} />
        <ColorButton color="primary" variant="contained" onClick={this.openModal}>
          <FormattedMessage id="videoBtn" />
        </ColorButton>
      </div>
    );
  }
}

export default VideoComponent;

VideoComponent.propTypes = {
  id: propTypes.string.isRequired,
};
