document.querySelectorAll('.stepper').forEach(stepper => {

const down = stepper.querySelector('.down');
const up = stepper.querySelector('.up');
const input = stepper.querySelector('.qty');

down.addEventListener('click', () => {
  let value = parseInt(input.value) || 0;
  if (value > 0) {
    input.value = value - 1;
  }
});

up.addEventListener('click', () => {
  let value = parseInt(input.value) || 0;
  input.value = value + 1;
});

});