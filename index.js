/* eslint no-console:0 */

var cookMeal = function (food) {
    switch(food) {
        case 'egg':
            boil(food);
            break;
        case 'bread':
            toast(food);
            break;
        case 'hashbrown':
            toast(food);
            break;
        case 'potato':
            boil(food);
            break;
        default:
            raw(food);
    }
};

var boil = function (food) {
    console.log('boiled ' + food);
};

var toast = function (food) {
    console.log('toasted ' + food);
};

var raw = function (food) {
    console.log('rawed ' + food);
};

cookMeal('egg');
cookMeal('potato');
cookMeal('banana');
cookMeal('toast');
cookMeal('hashbrown');
cookMeal('bread');
cookMeal('egg');
