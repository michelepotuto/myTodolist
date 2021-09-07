function Todolist() {
    const todos = [
        {
            id: 0,
            text: 'Go shopping',
            completed: false
        },

        {
            id: 0,
            text: 'Go to school',
            completed: false
        },

        {
            id: 0,
            text: 'Do homework',
            completed: false
        },

      
    ];

    return {
        getTodos: function(){
            alert('called')
        }
    }
}

const myTodo = Todolist();
console.log(myTodo);