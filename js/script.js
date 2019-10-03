window.addEventListener('load', () => 
    
    document.querySelector('.preloader').classList.add('hidePreloader'))
//  car data 

const CreateCars = (() => {
    const cars = [];

    class Car {
        constructor(make,country,img,special,model,price,type,trans,gas) {
            this.make = make ;
            this.country = country ;
            this.img = img ;
            this.special = special ;
            this.model = model ;
            this.price = price ;
            this.type = type ;
            this.trans = trans ;
            this.gas = gas ;
        }
    }
const makeCar =(make, country, img='img/car-default.jpeg', special=true,model='new model', price=10000, type='sedan',trans='automatic', gas='50')=> {
    const car = new Car(make,country,img,special,model,price,type,trans,gas);
    cars.push(car)
}
// produce cars 

const produceCars = () => {
    makeCar('chevy','american');
    makeCar('mercedes', 'german', 'img/car-german-1.jpeg', true);
    makeCar('mercedes', 'german', 'img/car-german-2.jpeg');
    makeCar('mercedes', 'german', 'img/car-german-3.jpeg',false,'some model');
    makeCar('mercedes', 'german', 'img/car-german-4.jpeg', undefined,'other model');
    makeCar('mercedes', 'german', 'img/car-german-5.jpeg', true);
    makeCar('chevy', 'amercian','img/car-american-1.jpeg');
    makeCar('chevy', 'amercian','img/car-american-2.jpeg',false);
    makeCar('chevy', 'amercian','img/car-american-3.jpeg');
    makeCar('chevy', 'amercian','img/car-american-4.jpeg');
    makeCar('chevy', 'amercian','img/car-american-5.jpeg');
}





})();