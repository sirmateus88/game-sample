import React from 'react';

class EaterObj extends React.Component { 
  
    render() {
      let display = this.props.isEaten ? 'none' : 'block';
      let eaterStyle = {
        height: this.props.height,
        width: this.props.width,
        top: this.props.Y,
        left: this.props.X,
        position: 'absolute',
        display: display
      }
      return (
          <div className='food' style={eaterStyle}>
          </div>
      );
    }
  }
  
  export default EaterObj;