// https://www.omnicalculator.com/health/sodium-correction

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const correctedsodiumRadio = document.getElementById('correctedsodiumRadio');
const patientssodiumRadio = document.getElementById('patientssodiumRadio');
const serumglucoseRadio = document.getElementById('serumglucoseRadio');

let correctedsodium;
let patientssodium = v1;
let serumglucose = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

correctedsodiumRadio.addEventListener('click', function() {
  variable1.textContent = 'Patient\'s sodium';
  variable2.textContent = 'Serum glucose';
  patientssodium = v1;
  serumglucose = v2;
  result.textContent = '';
});

patientssodiumRadio.addEventListener('click', function() {
  variable1.textContent = 'Corrected sodium';
  variable2.textContent = 'Serum glucose';
  correctedsodium = v1;
  serumglucose = v2;
  result.textContent = '';
});

serumglucoseRadio.addEventListener('click', function() {
  variable1.textContent = 'Corrected sodium';
  variable2.textContent = 'Patient\'s sodium';
  correctedsodium = v1;
  patientssodium = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(correctedsodiumRadio.checked)
    result.textContent = `Corrected sodium = ${computecorrectedsodium().toFixed(2)}`;

  else if(patientssodiumRadio.checked)
    result.textContent = `Patient's sodium = ${computepatientssodium().toFixed(2)}`;

  else if(serumglucoseRadio.checked)
    result.textContent = `Serum glucose = ${computeserumglucose().toFixed(2)}`;
})

// calculation

// correctedsodium = patientssodium + 0.024 × (serumglucose - 100)

function computecorrectedsodium() {
  return Number(patientssodium.value) + 0.024 * (Number(serumglucose.value) - 100);
}

function computepatientssodium() {
  return Number(correctedsodium.value) - 0.024 * (Number(serumglucose.value) - 100);
}

function computeserumglucose() {
  return ((Number(correctedsodium.value) - Number(patientssodium.value)) / 0.024) + 100;
}