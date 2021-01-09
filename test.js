let select = document.querySelector('select');
console.log(select);
select.addEventListener('change', (e) => {

	let todos = document.querySelectorAll('.todo');
	console.log(e);
	console.log('ok');
	console.log(select.value);
	if (select.value==='Все') {
		//код который покажет все элементы
		//у всего массива todos удаляем класс hide
	}


	// for (let i = 0; i < todos.length; i++) {
	// 	if (todos[i].classList.contains('isDone')) {
	// 		todos[i].classList.add('hide');
	// 	}

	// }


})


