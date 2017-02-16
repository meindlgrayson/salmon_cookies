'use strict';

var headRow = document.getElementById('table');
var times = document.createElement('thead');
headRow.appendChild(times);
var hours = [
  '', '6am', '7am', '8am',
  '9am', '10am', '11am',
  '12pm', '1pm', '2pm',
  '3pm', '4pm', '5pm',
  '6pm', '7pm', '8pm', 'total'];

for(var i = 0; i < hours.length; i++) {
  var hour = document.createElement('th');
  hour.textContent = hours[i];
  times.appendChild(hour);
}

function Store(name, min, max, avg) {
  this.location = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.cookiesPer = avg;
  this.hoursOpen = [
    '6am', '7am', '8am',
    '9am', '10am', '11am',
    '12pm', '1pm', '2pm',
    '3pm', '4pm', '5pm',
    '6pm', '7pm', '8pm'];
  this.cookiesSold = [];
  this.total = 0;
}

Store.prototype.customersPerHour = function () {
  for (var i = 0; i < this.hoursOpen.length; i++) {
    var numCookiesSold = (Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    numCookiesSold = Math.floor(numCookiesSold * this.cookiesPer);
    this.cookiesSold[i] = numCookiesSold;
  }
  console.log(this.cookiesSold);
};

Store.prototype.display = function() {
  this.customersPerHour();
  var locationsCol = document.getElementById('table');
  var newRow = document.createElement('tr');
  locationsCol.appendChild(newRow);
  var newTh = document.createElement('th');
  newTh.id = 'tH';
  newTh.textContent = this.location;
  newRow.appendChild(newTh);
  for(var i = 0; i < this.hoursOpen.length; i++) {
    var sold = document.createElement('td');
    sold.textContent = (this.cookiesSold[i]);
    newRow.appendChild(sold);
  }
  for (var j = 0; j < this.cookiesSold.length; j++) {
    this.total += this.cookiesSold[j];
  }
  var storeTotal = document.createElement('td');
  storeTotal.textContent = (this.total);
  newRow.appendChild(storeTotal);
};

var pike = new Store('1st and Pike', 23, 65, 6.3);
pike.display();

var airport = new Store('SeaTac Airport', 3, 24, 1.2);
airport.display();

var center = new Store('Seattle Center', 11, 38, 3.7);
center.display();

var capitol = new Store('Capitol Hill', 20, 38, 2.3);
capitol.display();

var alki = new Store('Alki', 2, 16, 4.6);
alki.display();


var newStore = document.getElementById('form');

newStore.addEventListener('submit', submitHandler);

var addedStore = '';

function submitHandler(event) {
  event.preventDefault();
  var store = event.target.store_name.value;
  var minimum = parseInt(event.target.min_customers.value);
  var maximum = parseInt(event.target.max_customers.value);
  var average = parseInt(event.target.avg_cookies.value);
  if (isNaN(minimum) || isNaN(maximum) || isNaN(average)) {
    alert('Please enter NUMBERS ONLY in fields other than "Store Name"');
  } else {
    console.log(store, minimum, maximum, average);
    addedStore = new Store(store, minimum, maximum, average);
    console.log(addedStore);
    addedStore.display();
  }
}




// var storeArray = [pike, airport, center, capitol, alki];
// var cookiesPerStore = [];


/*hourly totals atempt below here*/

// var hourTotals = function (num) {
//   for (var i = 0; i < storeArray.length; i++) {
//     var currentStore = storeArray[i];
//     var sum = 0;
//     for (var j = num; j < currentStore.cookiesSold.length; j = j + currentStore.hoursOpen.length) {
//       sum += (currentStore.cookiesSold[j]);
//     }
//   }
//   cookiesPerStore.push(sum);
//   console.log(cookiesPerStore);
// };
// hourTotals(0);
// hourTotals(1);







/*Think I'll be deleting below here*/




// Store.prototype.display = function () {
//   this.customersPerHour();
//   var firstLocation = document.getElementById('first_location');
//   firstLocation.textContent = this.location;
//   var firstStoreList = document.getElementById('first_list');
//   for (var i = 0; i < this.hoursOpen.length; i++) {
//     var newLi = document.createElement('li');
//     newLi.textContent = (this.hoursOpen[i] + ': ' + this.cookiesSold[i] + ' cookies sold');
//     firstStoreList.appendChild(newLi);
//   }
//   for (var j in this.cookiesSold) {
//     this.total += this.cookiesSold[j];
//   }
//   var totalLi = document.createElement('li');
//   totalLi.textContent = ('Total: ' + this.total + ' cookies sold');
//   firstStoreList.appendChild(totalLi);
// };



// pike.customersPerHour();
// pike.display();
// console.log(Store.pike);

// var pike = {
//   location: '1st and Pike',
//   minCustomers: 23,
//   maxCustomers: 65,
//   cookiesPer: 6.3,
//   hoursOpen: [
//     '6am',
//     '7am',
//     '8am',
//     '9am',
//     '10am',
//     '11am',
//     '12pm',
//     '1pm',
//     '2pm',
//     '3pm',
//     '4pm',
//     '5pm',
//     '6pm',
//     '7pm',
//     '8pm'],
//   cookiesSold: [],
//   total: 0,
//   customersPerHour: function () { //generates and stores random numbers for cookiesSold
//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var numCookiesSold = (Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//       numCookiesSold = Math.floor(numCookiesSold * this.cookiesPer);
//       this.cookiesSold[i] = numCookiesSold;
//     }
//     console.log(this.cookiesSold);
//   },
//   display: function() {
//     this.customersPerHour();
//     var firstLocation = document.getElementById('first_location');
//     firstLocation.textContent = this.location;
//     var firstStoreList = document.getElementById('first_list');
//     for(var i = 0; i < this.hoursOpen.length; i++) {
//       var newLi = document.createElement('li');
//       newLi.textContent = (this.hoursOpen[i] + ': ' + this.cookiesSold[i] + ' cookies sold');
//       firstStoreList.appendChild(newLi);
//     }
//     for(var j in this.cookiesSold) {
//       this.total += this.cookiesSold[j];
//     }
//     var totalLi = document.createElement('li');
//     totalLi.textContent = ('Total: ' + this.total + ' cookies sold');
//     firstStoreList.appendChild(totalLi);
//   }
// };

// pike.display();

// var airport = {
//   location: 'SeaTac Airport',
//   minCustomers: 3,
//   maxCustomers: 24,
//   cookiesPer: 1.2,
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   cookiesSold: [],
//   total: 0,
//   customersPerHour: function () { //generates and stores random numbers for cookiesSold
//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var numCookiesSold = (Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//       numCookiesSold = Math.floor(numCookiesSold * this.cookiesPer);
//       this.cookiesSold[i] = numCookiesSold;
//     }
//     console.log(this.cookiesSold);
//   },
//   display: function() {
//     this.customersPerHour();
//     var secondLocation = document.getElementById('second_location');
//     secondLocation.textContent = this.location;
//     var secondStoreList = document.getElementById('second_list');
//     for(var i = 0; i < this.hoursOpen.length; i++) {
//       var newLi = document.createElement('li');
//       newLi.textContent = (this.hoursOpen[i] + ': ' + this.cookiesSold[i] + ' cookies sold');
//       secondStoreList.appendChild(newLi);
//     }
//     for(var j in this.cookiesSold) {
//       this.total += this.cookiesSold[j];
//     }
//     console.log(this.total);
//     var totalLi = document.createElement('li');
//     totalLi.textContent = ('Total: ' + this.total + ' cookies sold');
//     secondStoreList.appendChild(totalLi);
//   }
// };

// airport.display();

// var center = {
//   location: 'Seattle Center',
//   minCustomers: 11,
//   maxCustomers: 20,
//   cookiesPer: 3.7,
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   cookiesSold: [],
//   total: 0,
//   customersPerHour: function () { //generates and stores random numbers for cookiesSold
//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var numCookiesSold = (Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//       numCookiesSold = Math.floor(numCookiesSold * this.cookiesPer);
//       this.cookiesSold[i] = numCookiesSold;
//     }
//     console.log(this.cookiesSold);
//   },
//   display: function() {
//     this.customersPerHour();
//     var thirdLocation = document.getElementById('third_location');
//     thirdLocation.textContent = this.location;
//     var thirdStoreList = document.getElementById('third_list');
//     for(var i = 0; i < this.hoursOpen.length; i++) {
//       var newLi = document.createElement('li');
//       newLi.textContent = (this.hoursOpen[i] + ': ' + this.cookiesSold[i] + ' cookies sold');
//       thirdStoreList.appendChild(newLi);
//     }
//     for(var j in this.cookiesSold) {
//       this.total += this.cookiesSold[j];
//     }
//     console.log(this.total);
//     var totalLi = document.createElement('li');
//     totalLi.textContent = ('Total: ' + this.total + ' cookies sold');
//     thirdStoreList.appendChild(totalLi);
//   }
// };

// center.display();

// var capitol = {
//   location: 'Capitol Hill',
//   minCustomers: 20,
//   maxCustomers: 38,
//   cookiesPer: 2.3,
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   cookiesSold: [],
//   total: 0,
//   customersPerHour: function () { //generates and stores random numbers for cookiesSold
//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var numCookiesSold = (Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//       numCookiesSold = Math.floor(numCookiesSold * this.cookiesPer);
//       this.cookiesSold[i] = numCookiesSold;
//     }
//     console.log(this.cookiesSold);
//   },
//   display: function() {
//     this.customersPerHour();
//     var fourthLocation = document.getElementById('fourth_location');
//     fourthLocation.textContent = this.location;
//     var fourthStoreList = document.getElementById('fourth_list');
//     for(var i = 0; i < this.hoursOpen.length; i++) {
//       var newLi = document.createElement('li');
//       newLi.textContent = (this.hoursOpen[i] + ': ' + this.cookiesSold[i] + ' cookies sold');
//       fourthStoreList.appendChild(newLi);
//     }
//     for(var j in this.cookiesSold) {
//       this.total += this.cookiesSold[j];
//     }
//     console.log(this.total);
//     var totalLi = document.createElement('li');
//     totalLi.textContent = ('Total: ' + this.total + ' cookies sold');
//     fourthStoreList.appendChild(totalLi);
//   }
// };

// capitol.display();

// var alki = {
//   location: 'Alki',
//   minCustomers: 2,
//   maxCustomers: 16,
//   cookiesPer: 4.6,
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   cookiesSold: [],
//   total: 0,
//   customersPerHour: function () { //generates and stores random numbers for cookiesSold
//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var numCookiesSold = (Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//       numCookiesSold = Math.floor(numCookiesSold * this.cookiesPer);
//       this.cookiesSold[i] = numCookiesSold;
//     }
//     console.log(this.cookiesSold);
//   },
//   display: function() {
//     this.customersPerHour();
//     var fifthLocation = document.getElementById('fifth_location');
//     fifthLocation.textContent = this.location;
//     var fifthStoreList = document.getElementById('fifth_list');
//     for(var i = 0; i < this.hoursOpen.length; i++) {
//       var newLi = document.createElement('li');
//       newLi.textContent = (this.hoursOpen[i] + ': ' + this.cookiesSold[i] + ' cookies sold');
//       fifthStoreList.appendChild(newLi);
//     }
//     for(var j in this.cookiesSold) {
//       this.total += this.cookiesSold[j];
//     }
//     console.log(this.total);
//     var totalLi = document.createElement('li');
//     totalLi.textContent = ('Total: ' + this.total + ' cookies sold');
//     fifthStoreList.appendChild(totalLi);
//   }
// };

// alki.display();