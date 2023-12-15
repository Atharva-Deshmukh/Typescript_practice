function loadData() {
    console.warn( document.getElementById('searchbox').value);
}
let debouncing = (loadData, delay) => {
    let timer;
    // return a function since we have to call a function in the <input>
    return function() {
        // If the user has pressed a key before the interval finishes, restart the timer by clearing the previous timeout
        if (timer) clearTimeout(timer);
        
        // Set a new timeout to execute loadData after the specified delay

        //The setTimeout function itself returns a unique identifier, often referred to as a "timeout ID" or "timer ID."
        // This identifier can be used to later cancel the execution of the scheduled function using the clearTimeout 
        //function.
        timer = setTimeout(() => {
            loadData();
        }, delay);
    }
}
// <input type="text" id="searchbox" onkeyup="improvedLoadData()">
const improvedLoadData = debouncing(loadData, 2000);