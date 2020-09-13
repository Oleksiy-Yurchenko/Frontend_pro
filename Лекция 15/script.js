Hamburger.SIZE_SMALL = 'small';
Hamburger.SIZE_MEDIUM = 'medium';
Hamburger.SIZE_LARGE = 'large';
Hamburger.TOPPING_CHEESE = 'cheese';
Hamburger.TOPPING_MAYO = 'mayonnaise';
Hamburger.TOPPING_SALAD = 'salad';
Hamburger.TOPPING_SEASONING = 'seasoning';
Hamburger.TOPPING_POTATO = 'potato';

function Hamburger(hamburgerSize) {
    switch (hamburgerSize) {
        case Hamburger.SIZE_SMALL:
            this.price = 50;
            this.calories = 20;
            break;
        case Hamburger.SIZE_MEDIUM:
            this.price = 75;
            this.calories = 30;
            break;
        case Hamburger.SIZE_LARGE:
            this.price = 100;
            this.calories = 40;
            break;            
    }   
}

Hamburger.prototype.addTopping = function(topping) {
    switch (topping) {
        case Hamburger.TOPPING_CHEESE:
            this.price += 10;
            this.calories += 20;
            break;
        case Hamburger.TOPPING_MAYO:
            this.price += 20;
            this.calories += 5;
            break;
        case Hamburger.TOPPING_SALAD:
            this.price += 20;
            this.calories += 5;
            break;
        case Hamburger.TOPPING_SEASONING:
            this.price += 15;
            break;
        case Hamburger.TOPPING_POTATO:
            this.price += 15;
            this.calories += 10;
            break;               
    }   
}

Hamburger.prototype.getPrice = function () {
    return this.price;
}

Hamburger.prototype.getCalories = function () {
    return this.calories;
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_SALAD);

alert(hamburger.getPrice());
alert(hamburger.getCalories());



/*
Сеть фастфудов предлагает несколько видов гамбургеров:



маленький (50 тугриков, 20 калорий)
средний (75 тугриковб 30 каллорий)
большой (100 тугриков, 40 калорий)


Гамбургер может быть с одним из нескольких видов начинок:



сыром (+ 10 тугриков, + 20 калорий)
салатом (+ 20 тугриков, + 5 калорий)
картофелем (+ 15 тугриков, + 10 калорий)
посыпать приправой (+ 15 тугриков, 0 калорий)
полить майонезом (+ 20 тугриков, + 5 калорий).


При этом начинок можно добавить несколько или не быть совсем



Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход (подсказка: нужен класс Гамбургер, статические константы, методы для выбора опций и рассчета нужных величин).



Пример работы кода:

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log("Price with sauce: “ + hamburger.getPrice());
console.log("Callories with sauce: “ + hamburger.getCallories());
*/