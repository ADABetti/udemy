class Todo {

    constructor() {
        this.totalTasks = document.querySelectorAll('.task').length // total de tarefas na lista.
    }

    addTask(taskText) {

        //clona template
        let template = document.querySelector('.task').cloneNode(true);
        //remove classe hide
        template.classList.remove('hide');
        //manipular texto
        let templateText = template.querySelector('.task-tittle');
        templateText.textContent = taskText;

        let list = document.querySelector('#tasks-container');

        //inserir na lista
        list.appendChild(template);

        //adiciona evento às tasks
        this.addEvents();
        this.checkTasks('add');

    }

    removeTask(task) {
        //achar o elemento
        let parentEl = task.parentElement;

        //remover da lista
        parentEl.remove();

        this.checkTasks('remove');
    }

    completeTask(task) {

        //adiciona a classe de done
        task.classList.add('done');

    }

    addEvents() {

        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1];

        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length - 1];


        //add evento de remover
        removeBtn.addEventListener('click', function () {
            todo.removeTask(this);
        });

        //add evento de completar tarefa
        doneBtn.addEventListener('click', function () {
            todo.completeTask(this);
        });
    }
    checkTasks(command) {
        let msg = document.querySelector('#empty-tasks');

        // adicionar ou remover tasks

        if (command === 'add') {
            this.totalTasks += 1;
        } else if (command === 'remove') {
            this.totalTasks -= 1;
        }

        //checa se tem mais de uma task e adiciona ou remove uma classe
        if (this.totalTasks == 1) {
            msg.classList.remove('hide');
        } else {
            msg.classList.add('hide');
        }
    }
}


let todo = new Todo();

//events
let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function (e) {

    e.preventDefault();

    let taskText = document.querySelector('#task');

    if (taskText.value != "") {
        todo.addTask(taskText.value);
    }



    //limpa campo de texto
    taskText.value = '';
});