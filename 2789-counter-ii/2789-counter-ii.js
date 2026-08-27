/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let cached = init
    
    function increment() {
        return ++cached
    }
    
    function decrement() {
        return --cached
    }

    function reset(){
        cached = init
        return cached
    }
    return { increment, decrement, reset }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */