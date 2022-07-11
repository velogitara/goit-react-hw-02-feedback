import React, { Component } from 'react';
import { BtnContainer, Button } from './FeedbackOption.styled';

class FeedbackOption extends Component {
  render() {
    const { onClick, state } = this.props;

    return (
      <BtnContainer>
        {Object.keys(state).map(key => (
          <Button key={key} onClick={() => onClick(key)}>
            {key}
          </Button>
        ))}
      </BtnContainer>
    );
  }
}

export default FeedbackOption;
