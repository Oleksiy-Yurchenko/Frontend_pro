class TodoController{
    constructor(){
        this.$container = $('.container');
        this.listView = new TodoListView({
            onToggle: (id) => this.onToggle(id),
            onDelete: (id) => this.onDelete(id),
        });
        this.$container.append(this.listView.$el)

        this.formView = new TodoFormView({
             onAddTask: (task) => this.onAddTask(task),
        });
        this.$container.append(this.formView.$el);

        this.collection = new TodoCollection();

        this.collection.getList()
            .then(() => {
                this.listView.render(this.collection.list)
            });
    }

    onToggle(id){
        this.collection.toggle(id);
        this.listView.render(this.collection.list);
    }

    onDelete(id){
        this.collection.delete(id);
        this.listView.render(this.collection.list);
    }
    
    onAddTask(task){
        this.collection.addTask(task).then(() => {
            this.listView.render(this.collection.list);
            this.formView.clearInput();
        })
    } 
}