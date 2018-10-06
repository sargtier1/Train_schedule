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
    event.preventDefault();
    //variables for HTML Destinations
    var trainName = $("#data-name").val().trim();
    var destination = $("#data-destination").val().trim();
    var start = $("#data-start").val().trim();
    var frequency = $("#data-freq").val().trim();

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

  // clears the text boxes
  $("#data-name").val("");
  $("#data-destination").val("");
  $("#data-start").val("");
  $("#data-freq").val("");
});

// data from database to current train schedule (top card)
database.ref().on("child_added", function (childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());

  // store info from database into a new variable
  var tName =  childSnapshot.val().name;
  var dest = childSnapshot.val().destination;
  var tStart = childSnapshot.val().start;
  var hz = childSnapshot.val().frequency;

  console.log(tName);
  console.log(dest);
  console.log(tStart);
  console.log(hz);

  // Makeas the train time start pretty
  // var trainStartPretty = moment.unix(tStart).format(HH:MM);

  // Add each train's data into the top card

  $("#train-name").append("<div>" + tName + "</div>");
  $("#destination").append("<div>" + dest + "</div>")
  // $("#").append(tStart)
  $("#frequency").append("<div>" + hz + "</div>")

});
