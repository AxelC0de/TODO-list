let todos = [
	{
		id: 123123,
		description: 'asdfasdfsadfasdf'
	},

	{
		id: 123123,
		description: 'asdfasdfsadfasdf'
	},

	{
		id: 123123,
		description: 'asdfasdfsadfasdf'
	},

	{
		id: 123123,
		description: 'asdfasdfsadfasdf'
	}
]

let objTodos = {
	start: {
		linkToPrewElem: null,
		description: 'start',
		linkToNextElement: 2

	},

	2: {
		linkToPrewElem: 'start',
		description: 'second elem',
		linkToNextElement: 'finish'
	},

	finish: {
		description: 'another second elem',
		linkToNextElement: null
	},

}

objTodos.newFinish = {
	description: 'asdfasdfs',
	linkToNextElement: null
}
objTodos.finish.linkToNextElement = 'newFinish'

console.log(objTodos);