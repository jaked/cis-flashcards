import React from 'react'
import Sound from 'react-sound'
import { PlayButton } from 'react-player-controls'

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: Sound.status.STOPPED }
  }

  render() {
    return (
      <div>
        <Sound url={this.props.url} playStatus={ this.state.status } />
        <PlayButton
          isEnabled = { true }
          onClick={() => this.setState({ status: Sound.status.PLAYING }) }
        />
      </div>
    );
  }
}

module.exports = Play
