let button = document.getElementById('add')
let todolist = document.getElementById('todolist')
let input = document.getElementById('input')

let todos = [] // initializing an array to store the list.Also we can easily delete the list if not needed
window.onload = () =>{ // getting previously added todo list and adding the list in nexttime if we load the window again
     todos = JSON.parse (localStorage.getItem('todos')) || [] // parsing or retreiving the data into string.if it is not present, it should return empty array
    //  console.log(todos) //return empty array bcoz there is no data in localstorage
     todos.forEach(todo=> {
        addtodo(todo) // to retain the listitems in the webpage even after the webpage refreshed again
     });
    }
button.addEventListener('click', () => {
    if(input.value === ''){
        alert('enter valid todo list')
    }
     todos.push(input.value) // adding or pushing the list in this empty array
     localStorage.setItem('todos',JSON.stringify(todos))// storing the todolist in localstorage
   
    addtodo(input.value) //calling the function to add list in webpage (to show in a webpage)
    input.value = ''  // Initalizing the input as empty to delete the previously given list
    console.log(todos)// this creates an array while we creating a array list..dynamically pushing the listitems to the array
})

function addtodo(todo){  // this function gives the list items to the input box
   let para = document.createElement('p')// creating a element in div so that listitems are stored in p tag
   para.innerHTML = todo // to show the todolist in webpage
   todolist.appendChild(para)
  
   console.log(todo)// input.value = todo
   console.log(para) // output: <p> input.value </p> (eg) <p> grocery </p>
   
   para.addEventListener('click',()=>{
      para.style.textDecoration = 'line-through'
      remove(todo) 
      /* calling the remove function to delete the array listitems after strike through..that is it'll remove 
      the listitems after it is done */
    })
    para.addEventListener('dblclick',()=>{ // while double clicking the strike throughed text, itll be removed from list
        todolist.removeChild(para)
        remove(todo)
    })
}

/* todo-represent each todo elements  
todos - represent array of todo list */

function remove(todo){
    let index = todos.indexOf(todo) // getting the index of todo list 
    if(index >= 0) // checking whether the list is present in array or not
    todos.splice(todo)
    // localStorage.setItem('todos',JSON.stringify(todos))
    localStorage.clear() // if we double click the list items in the webpage,itll gone.at the same time, itll gone from local storage also
}
