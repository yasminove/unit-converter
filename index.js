/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById('convert');
const conversionInput = document.getElementById('conversion-input');
const lengthResult = document.getElementById('length-result')
const volumeResult = document.getElementById('volume-result')
const massResult = document.getElementById('mass-result');
const mainContent = document.querySelector('main')


function calculateLength(val) {
    let meters = (val * 3.281).toFixed(3);
    let feet = (val / 3.281).toFixed(3);
    return `${val} meters = ${meters} feet | ${val} feet = ${feet} meters`;
}

function calculateVolume(val) {
    let liters = (val * 0.264).toFixed(3);
    let gallons = (val / 0.264).toFixed(3);
    return `${val} liters = ${liters} gallons | ${val} gallons = ${gallons} liters`;
}

function calculateMass(val) {
    let kilograms =  (val * 2.204).toFixed(3);
    let pounds = (val / 2.204).toFixed(3);
    return `${val} kilos = ${kilograms} | ${val} pounds = ${pounds} kilos`;
}

convertBtn.addEventListener('click', function () {

    let inputValue = Number(conversionInput.value)

    if (isNaN(inputValue)) {
        alert('Please enter a numerical value')
    } else {
        lengthResult.innerHTML = calculateLength(inputValue)
        volumeResult.innerHTML = calculateVolume(inputValue)
        massResult.innerHTML = calculateMass(inputValue)
        mainContent.scrollIntoView({behavior: 'smooth', block: "start"})
    }

})