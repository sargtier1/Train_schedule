// Firebase Config
var config = {
    apiKey: "AIzaSyDHyzxtQaqMgUgBbCKFtEMEhTNlZ-e5A4g",
    authDomain: "train-schedule-1509c.firebaseapp.com",
    databaseURL: "https://train-schedule-1509c.firebaseio.com",
    projectId: "train-schedule-1509c",
    storageBucket: "train-schedule-1509c.appspot.com",
    messagingSenderId: "1040847280004"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // Button to add train information
  $("#submit-btn").on("click", function(event){
    //variables for HTML Destinations
    var trainName = $("data-name").val().trim();
    var destination = $("data-destination").val().trim();
    var start = $("data-start").val().trim();
    var frequency = $("data-freq").val().trim();
    debugger;
  //local object to hold data before database  
  var newTrain = {
    name: trainName,
    destination: destination,
    start: start,
    frequency: frequency
  };

  // pushes to database
  database.ref().push(newTrain);

  // test
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.start);
  console.log(newTrain.frequency);

  alert("New train has been added");

  //clears the text boxes
  trainName.val("");
  destination.val("");
  start.val("");
  frequency.val("");
});
