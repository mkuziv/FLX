let rootNode = document.getElementById('root');
let elementsAmount = 0;
let inputText = document.querySelector('.input-text');
let addBtn = document.querySelector('.add-btn');
let todoList = document.querySelector('.todo-list');
let message = document.querySelector('.message')
let wrapper = document.querySelector('.wrapper')
let numbers = {
  zero: 0,
  maxListAmount: 10
}

inputText.addEventListener('input', () => {
  if (inputText.value.length !== numbers.zero) {
    addBtn.removeAttribute('disabled');
  } else {
    addBtn.setAttribute('disabled', 'true')
  }
})

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let li = document.createElement('li');
  li.textContent = inputText.value;

  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.addEventListener('change', function () {
    this.setAttribute('disabled', true);
    let i = document.createElement('i');
    i.classList.add('material-icons');
    this.nextElementSibling.appendChild(i);
  })
  let label = document.createElement('label');

  let deleteBtn = document.createElement('i');
  deleteBtn.classList.add('material-icons');
  deleteBtn.textContent = 'delete';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    elementsAmount--;
    if (elementsAmount <= numbers.maxListAmount) {
      inputText.removeAttribute('disabled');
      message.style.display = 'none'
    } 
  })
  li.insertBefore(label, li.firstChild);
  li.insertBefore(checkbox, li.firstChild);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  wrapper.appendChild(todoList);
  elementsAmount++;
  inputText.value = '';

  if (elementsAmount >= numbers.maxListAmount) {
    message.style.display = 'block';
    inputText.setAttribute('disabled', 'disabled');
    addBtn.setAttribute('disabled', 'disabled');
  } 
})