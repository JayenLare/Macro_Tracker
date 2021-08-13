// Macro Tracker JavaScript File

//Set variables for total macros and calories
var totalProtein = Number(0);
var totalCarbs = Number(0);
var totalFats = Number(0);
var totalCalories = Number(0);

//Inserts new meal into table after clicking the "Add" button
function newFood() {
  //Sets variables to input values
  var meal = document.getElementById("meal").value;
  var protein = Number(document.getElementById("protein").value);
  var carbs = Number(document.getElementById("carbs").value);
  var fats = Number(document.getElementById("fats").value);
  var calories = Number(document.getElementById("calories").value);

  //Checks that user enters a meal before adding to table
  if(meal == ""){
    alert("You must enter a meal");
  }
  else{
    //Creates new row in display table
    var displayTable = document.getElementById("display");
    var displayRow = displayTable.insertRow(1);
    var displayCell1 = displayRow.insertCell(0);
    var displayCell2 = displayRow.insertCell(1);
    var displayCell3 = displayRow.insertCell(2);
    var displayCell4 = displayRow.insertCell(3);
    var displayCell5 = displayRow.insertCell(4);

    //Inserts new meal info into new row
    displayCell1.innerHTML = meal;
    displayCell2.innerHTML = protein;
    displayCell3.innerHTML = carbs;
    displayCell4.innerHTML = fats;
    displayCell5.innerHTML = calories;

    //Calculate total values
    totalProtein = totalProtein + protein;
    totalCarbs = totalCarbs + carbs;
    totalFats = totalFats + fats;
    totalCalories = totalCalories + calories

    //Updates total macro breakdown table
    var totalTable = document.getElementById("total");
    totalTable.rows[1].cells[0].innerHTML = totalProtein;
    totalTable.rows[1].cells[1].innerHTML = totalCarbs;
    totalTable.rows[1].cells[2].innerHTML = totalFats;
    totalTable.rows[1].cells[3].innerHTML = totalCalories;

    //Empty values inside input fields
    document.getElementById("meal").value = "";
    document.getElementById("protein").value = "";
    document.getElementById("carbs").value = "";
    document.getElementById("fats").value = "";
    document.getElementById("calories").value = "";

    //Goes to tables at bottom of page
    window.scrollTo(0,document.body.scrollHeight);
  }
}

function resetButton(){
  //Reset "display" table
  var i = Number(document.getElementById("display").rows.length) - 1;
  while(i > 0){
    document.getElementById("display").deleteRow(i);
    i--;
  }

  //Reset "total" table
  totalProtein = Number(0);
  totalCarbs = Number(0);
  totalFats = Number(0);
  totalCalories = Number(0);
  var totalTable = document.getElementById("total");
  totalTable.rows[1].cells[0].innerHTML = "0";
  totalTable.rows[1].cells[1].innerHTML = "0";
  totalTable.rows[1].cells[2].innerHTML = "0";
  totalTable.rows[1].cells[3].innerHTML = "0";
}