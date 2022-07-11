import React, { Component } from 'react';
import Notification from '../Notification';
import FeedbackOption from '../FeedbackOptions';
import Statistics from '../Statistics';

class Section extends Component {
  render() {
    const { title, onClick, state } = this.props;
    const total = this.props.total;
    const positiveFeed = Number.parseInt(this.props.posFeed);

    return (
      <div>
        <h2>{title}</h2>
        <FeedbackOption onClick={onClick} state={state} />
        <h3>Statistics</h3>
        {total ? (
          <Statistics state={state} total={total} posFeed={positiveFeed} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default Section;
