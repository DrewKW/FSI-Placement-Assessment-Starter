// First, tell us your name
// Scripting
let yourName = "Andrew Wokabi" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let TotalQuantity = gb + cc + sugar;

function updateOrderSummary(displayGb) {
    let  totalGb = document.querySelector('#qty-gb');
    totalGb.textContent = displayGb;
}

function updateOrderSummary2(displaycc) {
    let  totalcc = document.querySelector('#qty-cc');
    totalcc.textContent = displaycc;
}

function updateOrderSummary3(displaysugar) {
    let  totalsugar = document.querySelector('#qty-sugar');
    totalsugar.textContent = displaysugar;
}

function updateOrderSummary4(displayTotalQuantity) {
    let TotalQuantity = document.querySelector('#qty-total');
    TotalQuantity.textContent = displayTotalQuantity;
}

// selecting the element with an id of credit
const credit = document.querySelector('#credit');

// Code to update name display
credit.textContent = `Created by ${yourName}`

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb');
const gbMinusBtn = document.querySelector('#minus-gb');
const ccPlusBtn = document.querySelector('#add-cc');
const ccMinusBtn = document.querySelector('#minus-cc');
const sugarPlusBtn = document.querySelector('#add-sugar');
const sugarMinusBtn = document.querySelector('#minus-sugar');
const TotalQtyBtn = document.querySelector('#qty-total');

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function (_e) {
    if (gb > 0) {
        gb--;
        TotalQuantity--;
        updateOrderSummary(`${gb}`);
        updateOrderSummary4(`${TotalQuantity}`);
    }
    });
gbPlusBtn.addEventListener('click', function (e) {
        gb++;
        TotalQuantity++; 
        updateOrderSummary(`${gb}`); 
        updateOrderSummary4(`${TotalQuantity}`); 
});

// Event listener for clicks on the "-" and "+" buttons for Chocolate Chip cookies
ccMinusBtn.addEventListener('click', function (_e) {
    if (cc > 0) {
        cc--;
        TotalQuantity--;
        updateOrderSummary2(`${cc}`);
        updateOrderSummary4(`${TotalQuantity}`);
    }
});
ccPlusBtn.addEventListener('click', function (e) {
        cc++;
        TotalQuantity++;
        updateOrderSummary2(`${cc}`);
        updateOrderSummary4(`${TotalQuantity}`);
});

// Event listener for clicks on the "-" and "+" buttons for Sugar Sprinkle cookies
sugarMinusBtn.addEventListener('click', function (_e) {
    if (sugar > 0) {
        sugar--;
        TotalQuantity--;
        updateOrderSummary3(`${sugar}`);
        updateOrderSummary4(`${TotalQuantity}`);
    }
});
sugarPlusBtn.addEventListener('click', function (_e) {
        sugar++;
        TotalQuantity++;
        updateOrderSummary3(`${sugar}`);
        updateOrderSummary4(`${TotalQuantity}`);
});
