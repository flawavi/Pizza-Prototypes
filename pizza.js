alert("hello pizza")

var Order = function() {
  this.pizza = null
  this.beverage = null
}

//Root function in a prototype chain
//curstThickness = 1, assume unit inches
var Pizza = function() {
    this.toppings = []
    this.crustThickness = 1
    // this.description = function(){}

}

//all pizzas will have a description, so set a function as a property
Pizza.prototype.description = function(){}
//prototype is a property on an object that is mysterious and weird
//thickness parameter is a multiplier of 1 inch (from above)
Pizza.prototype.setCrustThickness = function(thickness) {
  this.crustThickness = thickness * this.crustThickness
}

///////////////////////
///////DEEP DISH///////
///////////////////////

var DeepDish = function() {
  this.description = "Chewy, greasy and so very filling."
}

DeepDish.prototype = new Pizza()

var myDeepDish = new DeepDish()
myDeepDish.setCrustThickness(3)

////////////////////////
///////THIN CRUST///////
////////////////////////

var ThinCrust = function() {
  this.description = "Crispy, foldable and topping heavy."
}

ThinCrust.prototype = new Pizza()

//////////////////////////////
///////TRAD HAND TOSSED///////
//////////////////////////////

var TraditionalHandTossed = function() {
  this.description = "When there are too many people to chews, choose trad-hand-toss."
}

TraditionalHandTossed.prototype = new Pizza()

//////////////////////////////
///////TOPPINGSSSSSSSSS///////
//////////////////////////////
//Root function in a prototype chain
var Topping = function() {
  this.price = 0
}

//////////////////////////////
///////PEPPERONIIIIIIII///////
//////////////////////////////
var Pepperoni = function() {
  this.isSpicy = false
}

Pepperoni.prototype = new Topping()

Pepperoni.prototype.setSpicy = function() {
  this.isSpicy = true
}

//////////////////////////////
///////MUSHROOOOOOOMMMM///////
//////////////////////////////
var Mushroom = function() {
  this.name = "mushroom"
  this.extra = false
}

Mushroom.prototype = new Topping()

Mushroom.prototype.extra = function() {
  this.extra = true
}

//////////////////////////////
///////BEVERAGESSSSSSSS///////
//////////////////////////////
var Beverage = function() {
  this.sizeDefault = "small"
}

var Soda = function() {

}

var FruitPunch = function() {
  //kids mostly order FP, so...
  this.size = "kids"
}
With
