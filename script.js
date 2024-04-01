let cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Sheikhupura', 'Kashmir'];

for (let i = 0; i < cities.length; i++) {
    let num = i + 1;
    document.getElementById('originalTextBox').innerHTML += num + ' ) ' + cities [i] +  '&emsp;'
}
function showOutput(output) {
    document.getElementById("output").innerHTML = output;
}
function clearOutput() {
    document.getElementById("output").innerHTML = "";
}
const clearInput = () => {
    document.getElementById("inputText").value = "";
}
const inputValue = () => {
    return document.getElementById("inputText").value;
}

// Simple Alert 
function simpleAlert() {
    alert("I'm an alert");
}
document.getElementById('clearOutputButton').addEventListener('click', function() {
    document.getElementById('output').innerText = '';
});


// Print My Name 
function printMyName () {
    let myName = document.getElementById("inputText").value;

    // if (myName ----"") {
        if (!myName) {
            alert("Pleace type your name")
            return;
        }

        document.getElementById("output").innerHTML = myName
    }

    // Print All Cities 
    function printAllCities () {
        document.getElementById('output').innerHTML = "";

        for (let i = 0; i < 7; i++) {
            console.log(i + 1, cities[i])
        }

        for (let i = 0; i < cities.length; i++) {
            let num = i + 1;
            document.getElementById('output').innerHTML += num + ' ) ' + cities[i] + '<br>'
        }

    }
//    Add City 
function addCity () {
    let city = document.getElementById("inputText").value;

    if (!city) {
    alert("Pleace type your city name")
     return;
    }
    cities.push(city);
    document.getElementById('output').innerHTML = '<span style="color: green; font-size: 20px;">"' + city + '"</span> Has been successfully added into list.';
}




// table genrate 
function generateTable(){
    let tableNumber = prompt('Enter the table number:')
    let lengthOfTable = prompt('Enter the length of table:')

    let table = "<table>"
    for(let i = 1; i <= lengthOfTable; i++){
        table += "<tr><td>" + tableNumber + " * " + i + "</td><td>=</td><td>" + tableNumber*i + "</td></tr>"
    }
    table += "</table>"

    document.getElementById("output").innerHTML = table
}
