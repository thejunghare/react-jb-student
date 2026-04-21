/*
Challenge: prevent the count value from going below 0 or above 100.
*/

function add() {
    if (count < 100)
        setCount((prev) => prev + 1)
}


function sub() {
    if (count > 0) {
        setCount(prev => prev - 1)
    }

}