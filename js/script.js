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
function makeCar(make, country, img='img/car-default.jpeg', special=true,model='new model', price=10000, type='sedan',trans='automatic', gas='50') {
    const car = new Car(make,country,img,special,model,price,type,trans,gas);
    cars.push(car)
}
// produce cars 

function produceCars() {
    makeCar('chevy','american');
    makeCar('mercedes', 'german', 'img/car-german-1.jpeg', true);
    makeCar('bmw', 'german', 'img/car-german-2.jpeg');
    makeCar('bmw', 'german', 'img/car-german-3.jpeg',false,'some model');
    makeCar('bmw', 'german', 'img/car-german-4.jpeg', undefined,'other model');
    makeCar('mercedes', 'german', 'img/car-german-5.jpeg', false);
    makeCar('chevy', 'american','img/car-american-1.jpeg');
    makeCar('chevy', 'american','img/car-american-2.jpeg',false);
    makeCar('chevy', 'american','img/car-american-3.jpeg',false);
    makeCar('chevy', 'american','img/car-american-4.jpeg',false);
    makeCar('chevy', 'american','img/car-american-5.jpeg',false);
}
produceCars()
console.log(cars)

const specialCars = cars.filter(car => car.special === true)
console.log(specialCars)
return {

    cars,
    specialCars
}

})();


const FeaturedCars = ((CreateCars)=>{
const specialCars = CreateCars.specialCars
console.log(specialCars)
const info = document.querySelector('.featured-info');
document.addEventListener('DOMContentLoaded', ()=> {
    info.innerHTML='';

    let data ='';
    specialCars.forEach(item => {data += `
<div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
    <span data-img='${item.img}' class="featured-icon mr-2">
        <i class="fas fa-car"></i>
    </span>
    <h5 class="font-weight-bold mx-1">${item.make}</h5>
    <h5 class="mx-1">${item.model}</h5>

</div>
`
    })
    info.innerHTML = data
})
// Changing the image dynamically

info.addEventListener('click', (event) => {
    if(event.target.parentElement.classList.contains('featured-icon')){
        const img = event.target.parentElement.dataset.img;
        document.querySelector('.featured-photo').src = img
    }
    
})
})(CreateCars)

const DisplayCars = ((CreateCars) => {
    const cars = CreateCars.cars;
    const inventory = document.querySelector('.inventory-container')
    document.addEventListener('DOMContentLoaded', ()=> {
        inventory.innerHTML =''

        let output= '';
        cars.forEach((car) => {
            output += `
            <div class="col-10 mx-auto my-3 col-md-6 col-lg-4  single-car ${car.country}">
            <div class="card car-card">
                <img src="${car.img}" class ="card-img-top car-img"alt="german car">
                <!-- card body  -->
                <div class="card-body">
                    <div class="car-info d-flex justify-content-between">
                        <!-- first flex child  -->
                        <div class="car-test text-uppercase">
                            <h6 class="font-weight-bold">${car.make}</h6>
                            <h6>${car.model}</h6>
                        </div>
                        <!-- second flex child  -->
                        <h5 class="car-value align-self-center py-2 px-3">€
                            <span class="car-price">${car.price}</span>
                        </h5>
                    </div>
                </div>
                <!-- end of card body  -->
                <!-- card footer  -->
                <div class="card-footer text-capitalize d-flex justify-content-between">
                    <p><span><i class="fas fa-car"></i></span> ${car.type}</p>
                    <p> <span> <i class="fas fa-cogs"></i></span> ${car.trans}</p>
                    <p><span><i class="fas fa-gas-pump"></i></span> ${car.gas}</p>
                </div>
                <!-- end of card footer  -->
            </div>
        </div>
            
            `
        })
        inventory.innerHTML = output
    })
})(CreateCars)

// filter cars 

const FilterCar = (() => {
const filterButtons = document.querySelectorAll('.filter-btn')
filterButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const value = event.target.dataset.filter;
        const singleCar = document.querySelectorAll('.single-car')
        console.log(singleCar)
       singleCar.forEach((car) => {
           if(value === 'all') {
             car.style.display = 'block'  
           }
           else {
               (!car.classList.contains(value))?
               car.style.display = 'none': car.style.display = 'block'
           }
       }) 
    })
})
})()