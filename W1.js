var m = "Hello";
console.log(m)
 // --------------------
var n = "Sorry";
console.log(n)
 // --------------------
var c = true;
console.log(c)
 // --------------------
var d = false;
console.log(d)
 // --------------------

x = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
 // --------------------


const like ={
    food:"Burger",
    drink:"Coke",
    fruit:"Dragon Fruit"
}

 // --------------------
function favorite(like) {
    const favorites = [];
    for (let i in like) {
        favorites[favorites.length] = like[i];
    }
    return favorites;
}

console.log(favorite(like)); 
 // --------------------

function circleArea(r) {
    return 3.14 * Math.pow(r,2);
}
console.log(circleArea(3))
 // --------------------

function NumberOFfive() {
    for (var i = 0; i <= 100; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}
NumberOFfive();
 // --------------------