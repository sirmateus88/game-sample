import FoodObj from './eaterObj'

function Map (height, width, x = 0, y = 0, id = 0){
    this.foodObjs = []
}

Map.prototype.addFoodObj = function (height = 20, width = 20, x = 0, y = 0, id = 0){
    this.foodObjs.push(new FoodObj(height, width, x, y, id))
}

Map.prototype.hideFoodObj = function (objId){
    this.foodObjs[objId].isEaten = true;
}

// Map.prototype.getUpdatedMap = function (){
//     return this;
// }

Map.prototype.checkForCollisions = function (currentEater){
    this.foodObjs.forEach(obj => {
        obj.checkIfCollided(currentEater);
    })
}

export default Map;