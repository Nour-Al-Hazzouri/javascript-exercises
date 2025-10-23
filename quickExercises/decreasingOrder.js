const array= [5, 6, 10, -5, 33, 7, 9];
function decreasingOrder() {
    let decreasedArray= array.sort((a, b) => b - a);
    console.log(decreasedArray);
};
decreasingOrder()