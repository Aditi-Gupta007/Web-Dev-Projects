

const NotesContainer= document.querySelector(".notes-container");
const Createbtn= document.querySelector(".btn");
let notes = document.querySelectorAll(".input");

function Display()
{
  NotesContainer.innerHTML= localStorage.getItem("notes");
}
Display();

function updateStorage(){
    localStorage.setItem("notes", NotesContainer.innerHTML);
}


Createbtn.addEventListener("click", ()=> {
    let inputbox = document.createElement("p");
    let dimg = document.createElement("img");
    let fimg= document.createElement("img");
     inputbox.className = "input";
    inputbox.setAttribute("contenteditable" , "true");
    dimg.id="delete";
    fimg.id="flower";
    dimg.src="Images/delete.png";
    fimg.src="Images/sunflower.png";
    NotesContainer.appendChild(inputbox).appendChild(dimg);
    NotesContainer.appendChild(inputbox).appendChild(fimg);
})

NotesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    updateStorage();
}
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input");
        notes.forEach(nt => {
          nt.onkeyup = function(){
            updateStorage();
          }
        })
    } 
})

document.addEventListener("keydown", event =>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();

    }

})