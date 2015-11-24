/* eslint no-console:0 */

var cookMeal = function (food) {
    var chosenMethod;
    iMethods.forEach(function (method) {
        if (method.canCook(food)) {
            chosenMethod = method;
        }
    });
    chosenMethod.cook(food);
};

var iMethods = [];

(function () {
    var foods = [
        'egg',
        'potato'
    ];
    var cook = function (food) {
        console.log('Boiled ' + food);
    };
    var canCook = function (food) {
        return (foods.indexOf(food) >= 0);
    };
    var exported = {
        cook: cook,
        canCook: canCook
    };
    iMethods.push(exported);
    return exported;
}());

(function () {
    var foods = [
        'bread',
        'hashbrown'
    ];
    var cook = function (food) {
        console.log('Toasted ' + food);
    };
    var canCook = function (food) {
        return (foods.indexOf(food) >= 0);
    };
    var exported = {
        cook: cook,
        canCook: canCook
    };
    iMethods.push(exported);
    return exported;
}());

(function () {
    var badFoods = [
        'egg',
        'potato',
        'hashbrown'
    ];
    var cook = function (food) {
        console.log('Rawed ' + food);
    };
    var canCook = function (food) {
        return (badFoods.indexOf(food) == -1);
    };
    var exported = {
        cook: cook,
        canCook: canCook
    };
    iMethods.push(exported);
    return exported;
}());

cookMeal('egg');
cookMeal('potato');
cookMeal('banana');
cookMeal('toast');
cookMeal('hashbrown');
cookMeal('bread');
cookMeal('egg');
