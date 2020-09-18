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
        this._container.addEventListener('click', (event) => {
            let parentEl = event.target.parentNode;
            if (event.target.classList.contains(Accordeon.TITLE_CLASS)) {
               this.toggleItem(parentEl);
            }
        });
    }           

    toggleItem(el) {
        if (el.classList.contains(Accordeon.VISIBLE_CLASS)){
             this.toggleClass(el);
        } else {
             this.classReset();
             this.toggleClass(el);                                            
        }
                   
    }

    classReset() {
        const itemClassElements = this._container.querySelectorAll('.item');
        for (let i = 0; i < itemClassElements.length; i++) {
            itemClassElements[i].classList.remove(Accordeon.VISIBLE_CLASS);            
        }
    }

    toggleClass(el) {
        el.classList.toggle(Accordeon.VISIBLE_CLASS);
    }
}
