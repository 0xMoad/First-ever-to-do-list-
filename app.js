let addToDo = document.getElementById("addToDo");
let inputField = document.getElementById("inputField");
let container = document.getElementById("toDoContainer")
let reset = document.getElementById("reset")

addToDo.addEventListener("click", function(){
    
    if(inputField.value !== ""){
        let paragraph = document.createElement("li");
    paragraph.classList.add('paragraph-styling');
    paragraph.innerHTML = inputField.value;
    container.appendChild(paragraph);
    inputField.value = "";

    reset.addEventListener("click", function(){
        container.innerHTML = ""
    })

    paragraph.addEventListener("click", function (){
        paragraph.style.textDecoration = "line-through"
        paragraph.style.color = "green"
    })

    paragraph.addEventListener("dblclick", function (){
        container.removeChild(paragraph);

    })


    
} else {
    alert("You need to submit a task :)")
}
})

