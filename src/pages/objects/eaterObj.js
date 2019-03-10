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

foodObj.prototype.leftOverlap = function(eaterLeft){
    return (this.X < eaterLeft && this.rightEdge > eaterLeft) ? true : false;
}

foodObj.prototype.rightOverlap = function(eaterRight){
    return (foodLeft < eaterRight && foodRight > eaterRight) ? true : false;
}

function bottomOverlap(foodTop, eaterBottom){
    return (foodTop > eaterBottom && foodBottom < eaterBottom) ? true : false;
}

function topOverlap(foodBottom, eaterTop){
    return (foodTop > eaterTop && foodBottom < eaterTop) ? true : false;
}


FoodObj.prototype.checkIfCollided = function (currentEater){
    console.log('checking if collided,', currentEater)
    let overlaps = {
        left: leftOverlap(this.rightEdge, currentEater.left),
        right: leftOverlap(this.rightEdge, currentEater.left),
        top: leftOverlap(this.rightEdge, currentEater.left),
        bottom: leftOverlap(this.rightEdge, currentEater.left),
    }

}

FoodObj.prototype.eat = function(){
    this.eaten = true;
}

export default FoodObj;