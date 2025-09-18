function grid(num){
    
    const container = document.getElementById("container");
    container.style.display = "flex";
    container.style.flexWrap = "wrap"
    container.style.width = "800px";
    container.style.height = "800px";
   
    for (let i = 0; i < num * num; i++){ 
    const div = document.createElement("div");
        div.classList.add("divs");
        container.appendChild(div);
        div.style.width = "50px";
        div.style.height = "50px";
}
}




grid(16);