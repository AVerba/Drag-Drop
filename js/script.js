const item =document.querySelector(".item"),
      plaseholders=document.querySelectorAll(".placeholder");
     /*  console.log(plaseholders) */
      let i=0;

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

plaseholders.forEach((placeholder)=>{
    placeholder.addEventListener("dragover", dragover),
    placeholder.addEventListener("dragenter", dragenter),
    placeholder.addEventListener("dragleave", dragleave),
    placeholder.addEventListener("drop", dragdrop)
    
})
function dragstart(event){
    event.target.classList.add("hold");
    setTimeout(()=>{
        event.target.classList.add("hide")
    }, 0)
}
function dragend(event){
    event.target.className="item";
} 

function dragenter(event){
    event.target.classList.add("hovered")
}
function dragleave(event){
    event.target.classList.remove("hovered")
}
function dragdrop(event){
    event.target.append(item)
}
function dragover(event){
    event.preventDefault();
}
