"use strict"


// display the individual coffees
// displays 1 coffee

function renderCoffee(coffee) {

    // currently creating a table --> divs/p's
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}
// <tr class="coffee">
//     <td>1</td>
//     <td>American</td>
//     <td>Light</td>
// </tr>
// <tr class="coffee">
//     <td>1</td>
//     <td>American</td>
//     <td>Light</td>
// </tr>
// <tr class="coffee">
//     <td>1</td>
//     <td>American</td>
//     <td>Light</td>
// </tr>


// accepts an array of coffees and loops through them and then passes each individual coffee into `renderCoffee`
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        console.log(coffees[i]);
        html += renderCoffee(coffees[i]);
    }
    return html;
}


//
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    console.log(selectedRoast);
    var filteredCoffees = [];

    // loop through each of the coffee objects and we are adding the coffee's who's roast match the selected roast and adding it to the filteredCoffees array
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });

    //
    console.log(tbody);
    tbody.innerHTML = renderCoffees(filteredCoffees);
}



// ----- HANDLE INPUT FIELD -----


// ----- HANDLE ADD A COFFEE -----



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
