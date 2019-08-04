import React from 'react';
import ModalVideo from 'react-modal-video';
import propTypes from 'prop-types';
import 'react-modal-video/css/modal-video.min.css';
import styles from './youtubeComponent.module.css';

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
        <button type="button" onClick={this.openModal} className={styles.button}>Watch the video about poet</button>
      </div>
    );
  }
}

export default VideoComponent;

VideoComponent.propTypes = {
  id: propTypes.string.isRequired,
};
