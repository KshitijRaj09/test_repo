console.log("Welcome js file");

console.log("inside js")
const hid = document.getElementById("h2html");
const bid = document.getElementById("button1");
let val = 0;
bid.addEventListener('click', () => {
    hid.innerHTML = ++val;
})



