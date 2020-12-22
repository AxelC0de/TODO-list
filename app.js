let state = {
    users: {

    },
    todos: [
        {
            description: 'купить молоко',
            user: 'Aleksey',
            date: 'дата',
            isComplite: false
        },
        {
            description: 'купить колбасу',
            user: 'Aleksey',
            date: 'дата',
            isComplite: false
        }
    ]
}

let addItem = (descr) => {
    state.todos.push(
        {
            description: descr,
            user: 'Aleksey1',
            date: 'дата1',
            isComplite: false
        }
    )
}

// TODO
//  1) при добавлении addItem в поле  date добавляется текущая дата и время
//  2) функция, которая возвращает значение из поля input
//  3) сделать users

let getInputValue = ()=>{
    return 'value'
}

addItem(getInputValue())

console.log(state.todos)






