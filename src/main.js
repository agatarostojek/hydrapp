const addButton = document.querySelector(".add--js");
const removeButton = document.querySelector(".remove--js");
const counterValue = document.querySelector(".counter--js");

let glasses = 0;

/* Local storage key-date element */
let key = new Date().toLocaleString().slice(0,10);

setInterval(() => {
    if(key !== new Date().toLocaleString().slice(0,10)) {
        key = new Date().toLocaleString().slice(0,10);
        setCounterValue(0);
        glasses = 0;
    }
    }, 1000*60)

if (localStorage.getItem(key)) {
glasses = parseInt(localStorage.getItem(key));
}


/* Glasses counter; buttons */
const setCounterValue = (value) => {
    counterValue.innerHTML = value;
    localStorage.setItem(key, value);
}

setCounterValue(glasses);

addButton.addEventListener('click', () =>  {
    glasses = glasses +1;
    setCounterValue(glasses);   
});

removeButton.addEventListener('click', () =>  {
    if (glasses >= 1) { 
    glasses = glasses -1;
    setCounterValue(glasses);   
}});

