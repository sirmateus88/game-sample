function FoodObj (height, width, x = 0, y = 0, id = 0){
    this.id = id;
    this.height = height;
    this.width  = width;
    this.X = x
    this.Y = y
    this.rightEdge = width + x
    this.bottomEdge = height + y
    this.eaten = false
}

FoodObj.prototype.leftOverlap = function(eaterLeft){
    return (this.X < eaterLeft && this.rightEdge > eaterLeft) ? true : false;
}

FoodObj.prototype.rightOverlap = function(eaterRight){
    return (this.X < eaterRight && this.rightEdge > eaterRight) ? true : false;
}

FoodObj.prototype.bottomOverlap = function(eaterBottom){
    return (this.Y > eaterBottom && this.bottomEdge < eaterBottom) ? true : false;
}

FoodObj.prototype.topOverlap = function(eaterTop){
    return (this.Y > eaterTop && this.bottomEdge < eaterTop) ? true : false;
}


FoodObj.prototype.checkIfCollided = function (currentEater){
    let overlaps = {
        left: this.leftOverlap(currentEater.left),
        right: this.rightOverlap(currentEater.right),
        top: this.topOverlap(currentEater.top),
        bottom: this.bottomOverlap(currentEater.bottom),
    }
    console.log('checking if collided,', overlaps)

    if ((overlaps.left || overlaps.right) && (overlaps.top || overlaps.bottom)){
        this.eat()
    }

}

FoodObj.prototype.eat = function(){
    this.eaten = true;
}

export default FoodObj;