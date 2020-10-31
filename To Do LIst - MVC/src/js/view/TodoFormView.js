class TodoFormView{

    constructor(config){
        console.log('TodoFormView created');

        this.config = config;
        this.$el = this.initView()
    }

    initView() {
        return $(
            `<form id="addTaskForm">
                <div class="row">
                    <div class="ten columns">
                        <input
                            type="text"
                            id="taskNameInput"
                            class="u-full-width"
                        />
                    </div>
                    <div class="two columns">
                        <button id="addButton">Add Task</button>
                    </div>
                </div>
            </form>`
        ).on('click', '#addButton', (e) => this.onAddButtonClick(e));
    }    

    onAddButtonClick(e){
        e.preventDefault();
        const task = {
            title: $('#taskNameInput').val(),
            isDone: false,
        }
        this.config.onAddTask(task);
    }

    clearInput(){
        $('#taskNameInput').val('');
    }
}
