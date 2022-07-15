class KioskCalc{
    constructor(quantity,fruit){
        this.quantity=quantity
        this.fruit=fruit
        this.fruitpricelist={
            "orange":50,
            "banana":80,
            "Mango":40,
}
this.getTotalCost=function(){
            return `${quantity},${fruit} for KES${quantity*this.price}`
        }
    }
}
KioskCalc.prototype.price=80
var KioskCal= new kioskcalc("mango",2)
console.log(KioskCal.getTotalCost());