'use strict';

// first - declare meaningful variables
var form = document.getElementById('sample-form');
var table = document.getElementById('student_table');

// array of objects that contain your data - means you need to fill it with info
var data = [];

// second - write Student constructor
function Student(first, last, status, plans) {
  this.first = first;
  this.last = last;
  this.enrolled = status;
  this.future_classes = plans;
  //future_classes is a property name
}

// third - build out function to prevent default, capture data from the form & reset form
function formData(event) {
  event.preventDefault(); // prevents the default action of that element, default here is to reload the page

  var first = event.target.first.value;
  var last = event.target.last.value;
  var enrolled = event.target.enrolled;
  var futureClasses = event.target.future_classes.value;
  // event is event that happens (submit), find a target element that has a name property of "first", give me its "name" value

  // next - put this data in our data array
  // these variables are coming from the variables above - NOT the constructor
  data.push(new Student(first,last,enrolled,futureClasses));
  createTable();
  form.reset();
}

// Create table - each function should do only one thing well to be MODULAR
function createTable() {
  var row;
  for(var i = 0; i < data.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + data[i].first + '</td>' +
      '<td>' + data[i].last + '</td>' +
      '<td>' + data[i].enrolled + '</td>' +
      '<td>' + data[i].future_classes + '</td>';
  }
  table.appendChild(row);
};

// event listener, grab form data
form.addEventListener('submit', formData);
