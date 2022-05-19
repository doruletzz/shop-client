import React, { PureComponent } from 'react';

import styles from './MiniGallery.module.scss';

export class MiniGallery extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      imgIdx: 0
    };

    console.log(this.props.gallery);

    this.increaseImageIndex = this.increaseImageIndex.bind(this);
    this.decreaseImageIndex = this.decreaseImageIndex.bind(this);
  }

  increaseImageIndex(e) {
    this.setState({
      imgIdx: (this.state.imgIdx + 1) % this.props.gallery.length
    });

    console.log(this.state.imgIdx);
  }

  decreaseImageIndex(e) {
    this.setState({
      imgIdx: this.state.imgIdx - 1 > 0 ? this.state.imgIdx - 1 : this.props.gallery.length - 1
    });

    console.log(this.state.imgIdx);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.button_wrapper}>
          <button onClick={this.decreaseImageIndex} className={styles.button}>
            {'<'}
          </button>
          <button onClick={this.increaseImageIndex} className={styles.button}>
            {'>'}
          </button>
        </div>
        <img className={styles.image} src={this.props.gallery[this.state.imgIdx]} alt="gallery" />
      </div>
    );
  }
}

export default MiniGallery;
