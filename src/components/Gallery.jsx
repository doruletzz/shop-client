import React, { PureComponent } from 'react';

import styles from './Gallery.module.scss';

export class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      highlightedIdx: 0
    };

    this.setHighlightedIdx = this.setHighlightedIdx.bind(this);
  }

  setHighlightedIdx(idx) {
    this.setState({ highlightedIdx: idx });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.side}>
          {this.props.gallery.map((imgSrc, idx) => (
            <div
              key={idx}
              id={idx}
              className={idx === this.state.highlightedIdx ? styles.grayed : ''}>
              <img
                className={styles.image}
                src={imgSrc}
                alt={imgSrc}
                onMouseEnter={() => this.setHighlightedIdx(idx)}
              />
            </div>
          ))}
        </div>
        <div className={styles.main}>
          {<img className={styles.image} src={this.props.gallery[this.state.highlightedIdx]} />}
        </div>
      </div>
    );
  }
}

export default Gallery;
