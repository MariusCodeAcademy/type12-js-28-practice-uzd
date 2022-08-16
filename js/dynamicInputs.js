const formInputs = [
  { type: 'text', placeholder: 'Enter your name', name: 'username' },
  { type: 'number', placeholder: 'Enter your age', name: 'age' },
  { type: 'password', placeholder: 'Enter your password', name: 'password', required: true },
  { type: 'submit', value: 'Login' },
];

// 1
// parasyti funkcija kuri priima argumentu nuoroda i htmle esancia forma ir objektu masyva toki kaip formInputs
// ir is jo pagamina input elementus su visomis objektuose aprasytomis savybemis ir sudeda i forma.
// forma turi buti aprasyta htmle.
// createFormInputs(form, inputsArray)

// 1.1 - funkcija grazina objekta kurio savybes yra nuorodos i sukurtus elementus
// {
//   username: usernameHtmlEl,
//   age: ageHtmlEl
//   ...
// }

/**
 * This fucntion takes inputs array and creates corresponding html elements
 *
 * @param {HTMLFormElement} formEl
 * @param {Object[]} arr
 */

function makeAllInputElements(formEl, arr) {
  arr.forEach((iObj) => {
    const inputEl = makeSingleInputElement(iObj);
    formEl.append(inputEl);
  });
}

// { type: 'text', placeholder: 'Enter your name', name: 'username' },

function makeSingleInputElement(inputObj) {
  const inputEl = document.createElement('input');
  for (let key in inputObj) {
    // inputEl.type = 'text'
    inputEl[key] = inputObj[key];
  }
  return inputEl;
}

const myFormEl = document.forms[0];
makeAllInputElements(myFormEl, formInputs);
