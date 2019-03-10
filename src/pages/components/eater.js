import React from 'react';


class Eater extends React.Component {
  state = {
    height: 100,
    width: 100,
  };
  

  render() {
    let height = (this.props.windowHeight * 0.5) - (this.state.height * 0.5);
    let width = (this.props.windowWidth * 0.5) - (this.state.width * 0.5);
    
    let eaterStyle = {
      height: this.props.eaterHeight,
      width: this.props.eaterWidth,
      top: this.props.eaterY,
      left: this.props.eaterX,
      position: 'absolute'
    }
    return (
        <div className='eater' style={eaterStyle}>
        </div>
    );
  }
}

export default Eater;