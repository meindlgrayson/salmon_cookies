'use strict';

var pike = {
  location: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  cookiesPer: 6.3,
  hoursOpen: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm'],
  cookiesSold: [],
  total: 0,
  customersPerHour: function () { //generates and stores random numbers for cookiesSold
    for (var i = 0; i < (this.hoursOpen.length); i++) {
      var numCookiesSold = (Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
      numCookiesSold = Math.floor(numCookiesSold * this.cookiesPer);
      this.cookiesSold[i] = numCookiesSold;
    }
    console.log(this.cookiesSold);
  },
  display: function() {
    this.customersPerHour();
    var firstLocation = document.getElementById('first_location');
    firstLocation.textContent = this.location;
    var firstStoreList = document.getElementById('first_list');
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var newLi = document.createElement('li');
      newLi.textContent = (this.hoursOpen[i] + ': ' + this.cookiesSold[i] + ' cookies sold');
      firstStoreList.appendChild(newLi);
    }
    for(var j in this.cookiesSold) {
      this.total += this.cookiesSold[j];
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = ('Total: ' + this.total + ' cookies sold');
    firstStoreList.appendChild(totalLi);
  }
};

pike.display();

var airport = {
  location: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  cookiesPer: 1.2,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesSold: [],
  total: 0,
  customersPerHour: function () { //generates and stores random numbers for cookiesSold
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var numCookiesSold = (Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
      numCookiesSold = Math.floor(numCookiesSold * this.cookiesPer);
      this.cookiesSold[i] = numCookiesSold;
    }
    console.log(this.cookiesSold);
  },
  display: function() {
    this.customersPerHour();
    var secondLocation = document.getElementById('second_location');
    secondLocation.textContent = this.location;
    var secondStoreList = document.getElementById('second_list');
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var newLi = document.createElement('li');
      newLi.textContent = (this.hoursOpen[i] + ': ' + this.cookiesSold[i] + ' cookies sold');
      secondStoreList.appendChild(newLi);
    }
    for(var j in this.cookiesSold) {
      this.total += this.cookiesSold[j];
    }
    console.log(this.total);
    var totalLi = document.createElement('li');
    totalLi.textContent = ('Total: ' + this.total + ' cookies sold');
    secondStoreList.appendChild(totalLi);
  }
};

airport.display();

var center = {
  location: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 20,
  cookiesPer: 3.7,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesSold: [],
  total: 0,
  customersPerHour: function () { //generates and stores random numbers for cookiesSold
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var numCookiesSold = (Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
      numCookiesSold = Math.floor(numCookiesSold * this.cookiesPer);
      this.cookiesSold[i] = numCookiesSold;
    }
    console.log(this.cookiesSold);
  },
  display: function() {
    this.customersPerHour();
    var thirdLocation = document.getElementById('third_location');
    thirdLocation.textContent = this.location;
    var thirdStoreList = document.getElementById('third_list');
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var newLi = document.createElement('li');
      newLi.textContent = (this.hoursOpen[i] + ': ' + this.cookiesSold[i] + ' cookies sold');
      thirdStoreList.appendChild(newLi);
    }
    for(var j in this.cookiesSold) {
      this.total += this.cookiesSold[j];
    }
    console.log(this.total);
    var totalLi = document.createElement('li');
    totalLi.textContent = ('Total: ' + this.total + ' cookies sold');
    thirdStoreList.appendChild(totalLi);
  }
};

center.display();

var capitol = {
  location: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  cookiesPer: 2.3,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesSold: [],
  total: 0,
  customersPerHour: function () { //generates and stores random numbers for cookiesSold
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var numCookiesSold = (Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
      numCookiesSold = Math.floor(numCookiesSold * this.cookiesPer);
      this.cookiesSold[i] = numCookiesSold;
    }
    console.log(this.cookiesSold);
  },
  display: function() {
    this.customersPerHour();
    var fourthLocation = document.getElementById('fourth_location');
    fourthLocation.textContent = this.location;
    var fourthStoreList = document.getElementById('fourth_list');
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var newLi = document.createElement('li');
      newLi.textContent = (this.hoursOpen[i] + ': ' + this.cookiesSold[i] + ' cookies sold');
      fourthStoreList.appendChild(newLi);
    }
    for(var j in this.cookiesSold) {
      this.total += this.cookiesSold[j];
    }
    console.log(this.total);
    var totalLi = document.createElement('li');
    totalLi.textContent = ('Total: ' + this.total + ' cookies sold');
    fourthStoreList.appendChild(totalLi);
  }
};

capitol.display();

var alki = {
  location: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  cookiesPer: 4.6,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesSold: [],
  total: 0,
  customersPerHour: function () { //generates and stores random numbers for cookiesSold
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var numCookiesSold = (Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
      numCookiesSold = Math.floor(numCookiesSold * this.cookiesPer);
      this.cookiesSold[i] = numCookiesSold;
    }
    console.log(this.cookiesSold);
  },
  display: function() {
    this.customersPerHour();
    var fifthLocation = document.getElementById('fifth_location');
    fifthLocation.textContent = this.location;
    var fifthStoreList = document.getElementById('fifth_list');
    for(var i = 0; i < this.hoursOpen.length; i++) {
      var newLi = document.createElement('li');
      newLi.textContent = (this.hoursOpen[i] + ': ' + this.cookiesSold[i] + ' cookies sold');
      fifthStoreList.appendChild(newLi);
    }
    for(var j in this.cookiesSold) {
      this.total += this.cookiesSold[j];
    }
    console.log(this.total);
    var totalLi = document.createElement('li');
    totalLi.textContent = ('Total: ' + this.total + ' cookies sold');
    fifthStoreList.appendChild(totalLi);
  }
};

alki.display();