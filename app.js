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
    alert('Please enter NUMBERS ONLY in fields other than "Store Name" - asshole');
  } else {
    console.log(store, minimum, maximum, average);
    addedStore = new Store(store, minimum, maximum, average);
    console.log(addedStore);
    addedStore.display();
    storeArray.push(addedStore)
  }
}




var storeArray = [pike, airport, center, capitol, alki];
var cookiesPerStore = [];


/*hourly totals atempt below here*/
var sum = 0;

var hourTotals = function() {

  for (var j = 0; j < pike.cookiesSold.length; j++) {
    for (var i = 0; i < storeArray.length; i++) {
      sum += storeArray[i].cookiesSold[j];
    }
    cookiesPerStore.push(sum);
  }
  console.log(cookiesPerStore);
  var footer = document.createElement('tfoot')
  headRow.appendChild(footer);
  var footTh = document.createElement('th')
  footTh.textContent = "total";
  footer.appendChild(footTh);
  for(var k = 0; k < pike.cookiesSold.length; k++) {
    var footTd = document.createElement('td');
    footTd.textContent = cookiesPerStore[k];
    footer.appendChild(footTd);
  }
  var finalTotal = 0;
  for (var l = 0, )
};
hourTotals();
