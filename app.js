// В начале программы выводим переменные
const ADD_BTN = document.getElementById('addBtn'); // эта кнопка должна добавлять задачу в список задач
const INPUT = document.getElementById('input'); // получаем поле input (прямоугольник)
const TODOS_WRAP = document.querySelector('.todos-wrap'); // блок, в котором будет отрисовываться список TODO
const CLEAR_BTN = document.querySelector('.clear');
let date = ''; // создаем переменную с пустой датой, чтобы потом перезаписать в фукции ADD_BTN.addEventListener

// state - обьект, типа базы данных приложения
let state =
{
	todos: []
}
// при добавлении элемента сразу вешать на него слушатель.
// По клику на элемент To - Do меняется его состояние на черно - белое + записываем isComplete: true


let makeDone = (event) => {
	event.target.classList.add('isDone'); // при событии клика мыши в HTML прописывается класс ISDONE
	let myId = event.target.dataset.dateid;
	for (let i = 0; i < state.todos.length; i++) {
		if (myId == state.todos[i].id) {
			state.todos[i].isComplete = true;
		}
	}
	console.log(event);
	console.log(state.todos);
}
// функция, которая отрисовывает список TODO
let renderTodos = () => {
	TODOS_WRAP.innerHTML = ''; // очищает все TODO из блока, в котором они хранятся
	state.todos.forEach((item) => { // перебор элементов, цикл по массиву - для каждого TODO
		let todo = document.createElement('p'); // рисует тег p
		todo.classList.add('todo'); // тегу p добавляет класс "todo"
		if (item.isComplete) {
			todo.classList.add('isDone')
		}
		todo.innerText = item.description;
		todo.dataset.dateid = item.id
		TODOS_WRAP.append(todo);
		todo.addEventListener('click', makeDone)
		todo.addEventListener('dblclick', deleteElement)
	})

}

// функция добавления новых дел, принимающее 2 параметра - само дело + дату
let addItem = (descr, date) => {
	state.todos.push(
		{
			id: Date.now(),
			description: descr,
			date: date,
			isComplete: false
		}
	)
}

// получает строку с введенным текстом из поля ввода
let getInputValue = () => {
	let value = INPUT.value
	return value
}
//очистка введенного текста в инпут
let clearInput = () => {
	INPUT.value = '';
}





let deleteElement = (event) => {


	// найти кликнутый элемент
	let elem = event.target
	console.log(elem);
	let myId = event.target.dataset.dateid;
	for (let i = 0; i < state.todos.length; i++) {
		if (myId == state.todos[i].id) {
			state.todos.splice(i, 1)

		}
	}
	renderTodos();
}











renderTodos();
// переменная ADD_BTN с методом addEventListener ждем события click, и когда оно происходит, запускает функцию, которая идет вторым параметром
ADD_BTN.addEventListener('click', () => { //
	let value = getInputValue()
	if (value !== '') {
		date = new Date().getSeconds();// получение текущей даты, когда пользователь нажимает на кнопку "добавить"
		addItem(value, date)
		clearInput();
		console.dir(state.todos);
		renderTodos();
	}

})

CLEAR_BTN.addEventListener('click', () => {
	state.todos = [];
	renderTodos();
	console.dir(state.todos);
})



	// TODO
	//  4) внести все на ГИТ, ссылку Лехе
	//<select>
	< option > Вначале выполненные</option >
		<option>Вначале НЕ выполненые</option>
			</select >
	<button>Сброс фильтра</button>
