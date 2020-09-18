class Accordeon {
    static CONTENT_CLASS = 'accordeon-content';
    static TITLE_CLASS = 'accordeon-title';
    static VISIBLE_CLASS = 'accordeon-visible';

    constructor(container) {
        this._container = container;
        console.log('Accordeon started');

        this.bindClasses();
        this.bindEventListener();
    }

    bindClasses() {
        const contentElements = this._container.querySelectorAll('.content');

        for (let i = 0; i < contentElements.length; i++) {
            contentElements[i].classList.add(Accordeon.CONTENT_CLASS);
        }

        const titleElements = this._container.querySelectorAll('.title');

        for (let i = 0; i < titleElements.length; i++) {
            titleElements[i].classList.add(Accordeon.TITLE_CLASS);
        }
    }

    bindEventListener() {
        let clickedItem = '';
        this._container.addEventListener('click', (event) => {
            if ((clickedItem) && 
                (clickedItem != event.target) && 
                (clickedItem.parentNode.classList.contains(Accordeon.VISIBLE_CLASS))) {           
                this.toggleItem(clickedItem.parentNode);
                clickedItem = event.target;
            }
            if (event.target.classList.contains(Accordeon.TITLE_CLASS)) { 
                this.toggleItem(event.target.parentNode);
                clickedItem = event.target;
            }               
        });
    }

    toggleItem(el) {
        el.classList.toggle(Accordeon.VISIBLE_CLASS);
    }
}
