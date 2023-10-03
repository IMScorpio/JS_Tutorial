//classes in javascript

class Pizza{
    constructor(pizzaSize, pizzaCrust, pizzaTopping){ //A constructor is a special function that creates and initializes an   
        this.size = pizzaSize;                        //object instance of a class.
        this.crust = pizzaCrust;
        this.topping = pizzaTopping;
    }
    bake(){
        console.log(`Baking a ${this.size} ${this.crust} ${this.topping} pizza!`);
    }
    get pizzaCrust(){
        return this.crust;
    }
    set pizzaCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
}
//object creation
const myPizza = new Pizza('small', 'original', 'pepporoni');
myPizza.pizzaCrust = "tomato";
console.log(myPizza.pizzaCrust);