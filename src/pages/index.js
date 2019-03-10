import React from 'react';
import PropTypes from 'prop-types';
import throttle from '../utilities/throttle'
import Eater from './components/eater'
import Food from './components/eaterObj'
import FoodObj from './objects/eaterObj'
import Map from './objects/map'
import { random } from 'node-forge';



class Index extends React.Component {
  state = {
    windowHeight: 0,
    windowWidth: 0,
    eaterHeight: 0,
    eaterWidth: 0,
    eaterX: 0,
    eaterY: 0,
    foodMap: {}
  };

  componentDidMount = () => {
    this.setupEater();
    this.generateMap(30);
  }

  // setup items ------------------------------------

  setupEater = () => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let eaterX = (width * 0.5) - 25;
    let eaterY = (height * 0.5) - 25;
    
    this.setState({
      windowWidth: width,
      windowHeight: height,
      eaterHeight: 50,
      eaterWidth: 50,
      eaterX,
      eaterY
    })

    window.addEventListener('keydown', (e) => {
      switch(e.code){
        case 'ArrowLeft':
          this.goLeft() // left
          break
        case 'ArrowUp':
          this.goUp() //up
          break
        case 'ArrowRight':
          this.goRight() //right
          break
        case 'ArrowDown':
          this.goDown() //down
          break
        default:
          this.goUp();
      }
    })
  }

  generateMap = (amountOfFood = 30) => {
    let foodItems = new Map();
    let height = window.innerHeight;
    let width = window.innerWidth;
    for (let i = 0; i < amountOfFood; i++){
      foodItems.addFoodObj(20, 20, Math.round(Math.random() * width), Math.round(Math.random () * height), i)
    }
    this.setState({foodMap: foodItems})
  }

  // controls --------------------------------------------------

  goUp = () => {
    if(this.state.eaterY > 0){
      let newY = this.state.eaterY - 4;
      this.setState({eaterY: newY})
      this.checkStatus()
    }
  }

  goDown = () => {
    if(this.state.eaterY < this.state.windowHeight){
      let newY = this.state.eaterY + 4;
      this.setState({eaterY: newY})
    }
    this.checkStatus()
  }

  goLeft = () => {
    if(this.state.eaterX > 0){
      let newX = this.state.eaterX - 4;
      this.setState({eaterX: newX})
    }
    this.checkStatus()
  }

  goRight = () => {
    if(this.state.eaterX < this.state.windowWidth){
      let newX = this.state.eaterX + 4;
      this.setState({eaterX: newX})
    }
    this.checkStatus()
  }

  checkStatus = () => {
    let currEater = {
      left: this.state.eaterX,
      top: this.state.eaterY,
      right: this.state.eaterX + this.state.eaterWidth,
      bottom: this.state.eaterY + this.state.eaterHeight
    }
    this.state.foodMap.checkForCollisions(currEater)
  }

  

  render() {
    const { classes } = this.props;
    //console.log('foodobs', this.state.foodMap.foodObjs)
    return (
      <div className='root'>
        {this.state.foodMap.foodObjs && this.state.foodMap.foodObjs.map(eaterObj => {
          return (
            <Food
              height={eaterObj.height}
              width={eaterObj.width}
              X={eaterObj.X}
              Y={eaterObj.Y}
              isEaten={eaterObj.eaten}
            />
          )
        })
        }
        <Eater
          eaterHeight={this.state.eaterHeight}
          eaterWidth={this.state.eaterWidth}
          eaterX={this.state.eaterX}
          eaterY={this.state.eaterY}
        />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Index;
