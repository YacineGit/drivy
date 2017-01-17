'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

function priceCarsDay(rental) //Get price of cars 
{
    var carId = rental.carId;
    for (var i = 0 ; i <  cars.length; i++) {
      if(cars[i].id == carId){
          return cars[i].pricePerDay;
      }
    }
}
function priceCarsKm(rental)
{
    var carId = rental.carId;
    for (var i = 0 ; i <  cars.length; i++) {
      if(cars[i].id == carId){
          return cars[i].pricePerKm;
      }
    }
}

function dateRental(rental){
    var date1 = new Date(rental.returnDate);
    var date2 = new Date(rental.pickupDate);
    return dateDiff(date2, date1);
}
function rentalPrice(rental){
    var timeComponent = dateRental(rental) * (priceCarsDay(rental));
    var distanceComponent = rental.distance *(priceCarsKm(rental));
    return timeComponent + distanceComponent;
}
function dateDiff(date1, date2){
    var diff = {}                           
    var tmp = date2 - date1;
 
    tmp = Math.floor(tmp/1000);             
    diff.sec = tmp % 60;                    
 
    tmp = Math.floor((tmp-diff.sec)/60);    
    diff.min = tmp % 60;                    
 
    tmp = Math.floor((tmp-diff.min)/60);    
    diff.hour = tmp % 24;                   
     
    tmp = Math.floor((tmp-diff.hour)/24);   
    diff.day = tmp;
     
    return diff.day + 1;
}
function RentalPrice(rental){

    if(dateRental(rental) > 1){

      if(dateRental(rental) > 4){

        if (dateRental(rental) > 10) {

            rental.price = (dateRental(rental)*priceCarsDay(rental))*0.5;

        }
        rental.price = (dateRental(rental)*priceCarsDay(rental))*0.7;
      }
      rental.price = (dateRental(rental)*priceCarsDay(rental))*0.9;
    }
    rental.price = dateRental(rental)*priceCarsDay(rental);
} 
console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);