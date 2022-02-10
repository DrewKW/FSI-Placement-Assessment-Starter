// First, tell us your name
let yourName = "Andrew Wokabi" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


function updateTotal (displayTotal) {
    let total = document.querySelector("#qty-total");
    total.textContent = displayTotal;
}

// selecting the element with an id of credit
const credit = document.querySelector('#credit');

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb');
const gbMinusBtn = document.querySelector('#minus-gb');

// selecting the element with an id of add-cc
const ccPlusBtn = document.querySelector('#add-cc');
const ccMinusBtn = document.querySelector('#minus-cc');

// selecting the element with an id of add-sugar
const sugarPlusBtn = document.querySelector('#add-sugar');
const sugarMinusBtn = document.querySelector('#minus-sugar');

// Code to update name display
credit.textContent = `Created by ${yourName}`


// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function (e) {
    if (gb > 0) {
        gb--;
        // updateTotal = document.querySelector(".qty-gb");
    // total.textContent = display
    }
    });
gbPlusBtn.addEventListener('click', function (e) {
        gb++;
        console.log(gb);
    //     updateTotal = document.querySelector(".qty-total");
    // total.textContent = displayTotal;
});

// Event listener for clicks on the "-" and "+" buttons for Chocolate Chip cookies
ccMinusBtn.addEventListener('click', function (e) {
    if (cc > 0) {
        cc--;
        updateTotal = document.querySelector(".qty-total");
    total.textContent = displayTotal;
    }
});
ccPlusBtn.addEventListener('click', function (e) {
        cc++;
        updateTotal = document.querySelector(".qty-total");
    total.textContent = displayTotal;
});

// Event listener for clicks on the "-" and "+" buttons for Sugar Sprinkle cookies
sugarMinusBtn.addEventListener('click', function (e) {
    if (sugar > 0) {
        sugar--;
        updateTotal = document.querySelector(".qty-total");
    total.textContent = displayTotal;
    }
});
sugarPlusBtn.addEventListener('click', function (e) {
        sugar++;
        updateTotal = document.querySelector(".qty-total");
    total.textContent = displayTotal;
});
