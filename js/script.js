let buttonAdd = document.getElementById('button-add')
let inputTask = document.getElementById('input-task')
let tasks = document.getElementById('tasks')

buttonAdd.addEventListener('click', function(){
    if (inputTask.value != ''){
        tasks.style.display = 'flex'
        
        let task = document.createElement('p')
        let buttonDelete = document.createElement('button')
        let marker = false

        task.style.display = 'flex'
        task.style.alignItems = 'center'
        task.style.justifyContent = 'space-between'

        tasks.appendChild(task)
        task.textContent = '- ' + inputTask.value
        task.appendChild(buttonDelete)
        buttonDelete.innerHTML = '<i class="bi bi-trash-fill"></i>'

        buttonDelete.style.background = 'transparent'
        buttonDelete.style.color = '#bcbcbc'
        buttonDelete.style.cursor = 'pointer'
        buttonDelete.style.fontSize = '15px'

        inputTask.value = ''
        task.addEventListener('click', function(){

            if (marker == false) {
                task.style.textDecoration = 'line-through'
                task.style.color = '#bcbcbc'
                marker = true
            }
            else {
                task.style.textDecoration = ''
                task.style.color = '#fff'
                marker = false
            }
        })
        buttonDelete.addEventListener('click', function(){
            tasks.removeChild(task)
        })
    }
})