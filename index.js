const container = document.getElementById("container");
const divContainer = document.createElement("div");

container.appendChild(divContainer);
container.style.display = "flex";

divContainer.style.display = "flex";
divContainer.style.flexWrap = "wrap"
divContainer.style.width = "960px";
divContainer.style.height = "960px";
divContainer.style.flex = "1"

function grid(num){

    // clears the screen
    divContainer.innerHTML = "";
    // Creating all the divs   
    for (let i = 0; i < num * num; i++){ 
    const div = document.createElement("div"); 
        div.classList.add("divs");
        divContainer.appendChild(div);
    div.style.width = `${100 / num}%`;
    div.style.height = `${100 / num}%`;
        }

    // Mouse over change to black
    const divAll = document.querySelectorAll(".divs")
    divAll.forEach(div => {
    div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = "black";
    })
        
    })
    }


    const btn = document.createElement("button"); 
    const userInput = document.createElement('input');
    userInput.type = 'number';
    btn.textContent = "Submit";
    btn.addEventListener("click", () => {
        const value = userInput.value
        if(value <= 0){
            alert("Number needs to be greater than 0")
        } else if (value > 100) {
            alert("Number needs to be lower than 100")
        } else {
        grid(value)}})
        ;
        userInput.placeholder = "# of Rows";
  
    container.appendChild(btn);
    container.appendChild(userInput);

    






