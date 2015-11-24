/* eslint no-console:0 */

var cookMeal = function (food) {
    var methods = [
        Boil,
        Toast,
        Raw
    ];
    var chosenMethod;
    methods.forEach(function (method) {
        if (method.canCook(food)) {
            chosenMethod = method;
        }
    });
    chosenMethod.cook(food);
};

var Boil = (function () {
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
    return {
        cook: cook,
        canCook: canCook
    };
}());
var Toast = (function () {
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
    return {
        cook: cook,
        canCook: canCook
    };
}());
var Raw = (function () {
    var badFoods = [
        'egg',
        'potato',
        'bread',
        'hashbrown'
    ];
    var cook = function (food) {
        console.log('Rawed ' + food);
    };
    var canCook = function (food) {
        return (badFoods.indexOf(food) == -1);
    };
    return {
        cook: cook,
        canCook: canCook
    };
}());

cookMeal('egg');
cookMeal('potato');
cookMeal('banana');
cookMeal('toast');
cookMeal('hashbrown');
cookMeal('bread');
cookMeal('egg');
