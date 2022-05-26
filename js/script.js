const listToDo = new Vue({
    el : '#app',
    data : {
        newTask : "",
        toDo : [
            {
                text : 'fare il bucato',
                done : false
            },
            {
                text : 'pulire il pavimento',
                done : true
            },
            {
                text : 'Cucinare',
                done : false
            },
            {
                text : 'studiare',
                done : true
            },
            {
                text : 'andare a fare la spesa',
                done : false
            },
        ]
    },
    methods : {
        addTask(){
            // creazine del nuovo oggetto
            const task = new Object();
            task.text = this.newTask;
            task.done = true;
            // stampa solo se l'input non è vuoto
            if(this.newTask !== ""){
                this.toDo.push(task);
                this.newTask = "";
            }
        },
        removeTask(task){
            this.toDo.splice(task, 1);
        },  
        changeState(index){
            if(index.done === false){
                index.done = true;
            } else {
                index.done = false;
            }
        },
    }
    
});

