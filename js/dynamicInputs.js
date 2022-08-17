class DInput {
  constructor({ type = 'text', placeholder, name, required = false, value }) {
    this.type = type;
    if (placeholder) this.placeholder = placeholder;
    if (name) this.name = name;
    if (required) this.required = required;
    if (value) this.value = value;
  }
}

const dFormInputs = [
  new DInput({ placeholder: 'Enter your name', name: 'username' }),
  new DInput({ type: 'number', placeholder: 'Enter your age', name: 'age' }),
  new DInput({ type: 'date', placeholder: 'Enter this age', name: 'thisAge' }),
  new DInput({
    type: 'password',
    placeholder: 'Enter your password',
    name: 'password',
    required: true,
  }),
  new DInput({ type: 'textarea', placeholder: 'Enter your message', name: 'body' }),
  new DInput({ type: 'submit', value: 'Login' }),
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
  const inputShortcuts = {};
  arr.forEach((iObj) => {
    const inputEl = makeSingleInputElement(iObj);
    formEl.append(inputEl);
    if (iObj.name) inputShortcuts[iObj.name] = inputEl;
  });
  return inputShortcuts;
}

// { type: 'text', placeholder: 'Enter your name', name: 'username' },

function makeSingleInputElement(inputObj) {
  const inputEl = document.createElement(inputObj.type === 'textarea' ? 'textarea' : 'input');
  for (let key in inputObj) {
    // inputEl.type = 'text'
    inputEl[key] = inputObj[key];
  }
  return inputEl;
}

const myFormEl = document.forms[0];
const inputShortcuts = makeAllInputElements(myFormEl, dFormInputs);
console.log('inputShortcuts ===', inputShortcuts);
// inputShortcuts.age.value = 45;
