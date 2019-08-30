'use strict';

// an array to hold the hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// variable to hold the ul in the DOM
var salesEl = document.getElementById('sales');

  // method: calculates the cookies sold each hour
  // method: rending it to the DOM
function generateRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// we want to render the same table in the HTML but in JS

// An array that will store all the store objects
var listOfLocationObjects = [];

// constructor for locations
function Location(name, minCustomers, maxCustomers, avgCookiesPerCustomer){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customerPerHourArr = [];
  this.randomCustomers = function() {
    for (var i = 0; i < hours.length; i++) {
      this.customerPerHourArr[i] = generateRandom(this.minCustomers, this.maxCustomers);
    }
  }
  this.cookiesSold = function() {
    this.randomCustomers();
    var cookiesSoldPerHour = [];
    for (var i = 0; i < hours.length; i++) {
      cookiesSoldPerHour[i] = Math.floor(this.customerPerHourArr[i] * this.avgCookiesPerCustomer);
    }
    return(cookiesSoldPerHour);
  }
  listOfLocationObjects.push(this);
}

new Location('1st and Pike', 23, 65, 6.3);
new Location('Sea-Tac Airport', 3, 24, 1.2);
new Location('Seattle Center', 11, 38, 3.7);
new Location('Capital Hill', 20, 38, 2.3);
new Location('Alki', 2, 16, 4.6);

// Gets the <table> from the HTML and stores it in a variable called tableEl
var tableEl = document.getElementById('table');

Location.prototype.putOnTheScreen = function(){
  // Creates a <tr> element - the element is 'floating in space'
  var trEl = document.createElement('tr');
  // Putting the <tr> element into the <table> element
  tableEl.appendChild(trEl);

  // creates a <td> element - it is 'floating in space'
  var tdEl = document.createElement('td');
  // Give the <td> content - cookies per hour
  tdEl.textContent = this.name;
  // Put the <td> into the <tr>
  trEl.appendChild(tdEl);

  // listOfLocationObjects();
  for (var i = 0; i < listOfLocationObjects.length; i++) { 
    tdEl = document.createElement('td');
    tdEl.textContent = listOfLocationObjects[0].cookiesSold()[i];
    trEl.appendChild(tdEl);
    console.log(tdEl);
  }
}

listOfLocationObjects[0].putOnTheScreen();

// // 1. create the element
// // 2. give it content
// // 3. append to the parent in the DOM

// function renderHeader(){
  // // make a tr and stick it to the DOM
  // var trEl = document.createElement('tr');
  // tableEl.appendChild(trEl);
  
  // // put the NAME in the DOM
  // var tdEl = document.createElement('td');
  // tdEl.textContent = 'NAME';
  // trEl.appendChild(tdEl);
  
  // // put the TYPE in the DOM
  // tdEl = document.createElement('td');
  // tdEl.textContent = 'TYPE';
  // trEl.appendChild(tdEl);
  
  // // put the COLOR in the DOM
  // tdEl = document.createElement('td');
  // tdEl.textContent = 'COLOR';
  // trEl.appendChild(tdEl);
  
  // // put AGE in the DOM
  // tdEl = document.createElement('td');
  // tdEl.textContent = 'AGE';
  // trEl.appendChild(tdEl);
  // }
  
  // renderHeader();
  // for(var i = 0; i < allPets.length; i++){
    //   allStores[i].render();
    // }
    
    // renderHeader();
    // for(var i = 0; i < allPets.length; i++){
    //   allStores[i].render();
    // }
    
    
// object literal for each location
// var pike = {
//   name: 'First and Pike',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookiesPerCustomer: 6.3,

//   cookiesSoldEachHourArr: [],
//   customersPerHourArr: [],
//   totalPerDay: 0,

//   calcCustomersEachHour: function(){
//     for(var i = 0; i < hours.length; i++){
//       var customersEachHour = generateRandom(this.minCustomers, this.maxCustomers);

//       this.customersPerHourArr.push(customersEachHour);

//     }
//   },

//   calcCookiesSoldEachHour: function(){

//     for(var i = 0; i < hours.length; i++){
//       var oneHourOfSales = Math.floor(this.customersPerHourArr[i] * this.avgCookiesPerCustomer);

//       console.log('this is One Hour Of Sales', oneHourOfSales);

//       this.cookiesSoldEachHourArr.push(oneHourOfSales);
//       this.totalPerDay += oneHourOfSales;
//     }
//   },

//   render: function(){
//     this.calcCustomersEachHour();
//     this.calcCookiesSoldEachHour();

//     var liEl = document.createElement('li');
//     liEl.textContent = this.name;
//     salesEl.appendChild(liEl);

//     for(var i = 0; i<hours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArr[i]} cookies`;
//       salesEl.appendChild(liEl);
//     }

//     liEl = document.createElement('li');
//     liEl.textContent = this.totalPerDay;
//     salesEl.appendChild(liEl);
//   }
// }

// pike.render();

// var seatac = {
//   name: 'Sea-Tac Airport',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiesPerCustomer: 1.2,

//   cookiesSoldEachHourArr: [],
//   customersPerHourArr: [],
//   totalPerDay: 0,

//   calcCustomersEachHour: function(){
//     for(var i = 0; i < hours.length; i++){
//       var customersEachHour = generateRandom(this.minCustomers, this.maxCustomers);

//       this.customersPerHourArr.push(customersEachHour);

//     }
//   },

//   calcCookiesSoldEachHour: function(){

//     for(var i = 0; i < hours.length; i++){
//       var oneHourOfSales = Math.floor(this.customersPerHourArr[i] * this.avgCookiesPerCustomer);

//       console.log('this is One Hour Of Sales', oneHourOfSales);

//       this.cookiesSoldEachHourArr.push(oneHourOfSales);
//       this.totalPerDay += oneHourOfSales;
//     }
//   },

//   render: function(){
//     this.calcCustomersEachHour();
//     this.calcCookiesSoldEachHour();

//     var liEl = document.createElement('li');
//     liEl.textContent = this.name;
//     salesEl.appendChild(liEl);

//     for(var i = 0; i<hours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArr[i]} cookies`;
//       salesEl.appendChild(liEl);
//     }

//     liEl = document.createElement('li');
//     liEl.textContent = this.totalPerDay;
//     salesEl.appendChild(liEl);
//   }
// }

// seatac.render();