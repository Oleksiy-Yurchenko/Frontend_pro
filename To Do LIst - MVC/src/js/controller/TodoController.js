class TodoController{
    constructor(){
        this.$container = $('.container');
        this.listview = new TodoListView({
            onToggle: (id) => this.onToggle(id),
            onDelete: (id) => this.onDelete(id),
        });
        this.$container.append(this.listview.$el)

        this.formView = new TodoFormView({
             onAddTask: (task) => this.onAddTask(task),
        });
        this.$container.append(this.formView.$el);

        this.collection = new TodoCollection();

        this.collection.getList()
            .then(() => {
                this.listview.render(this.collection.list)
            });
    }

    onToggle(id){
        this.collection.toggle(id);
        this.listview.render(this.collection.list);
    }

    onDelete(id){
        this.collection.delete(id);
        this.listview.render(this.collection.list);
    }
    
    onAddTask(task){
        this.collection.addTask(task).then(() => {
            this.listview.render(this.collection.list);
            this.formView.clearInput();
        })
    } 
}