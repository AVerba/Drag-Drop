const item =document.querySelector(".item"),
      plaseholders=document.querySelectorAll(".placeholder");
      console.log(plaseholders)
      let i=0;

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);
for (placeholder of plaseholders){
    placeholder.addEventListener('dragover', dragover),
    placeholder.addEventListener('dragenter', dragenter),
    placeholder.addEventListener('dragleave', dragleave),
    placeholder.addEventListener('dragdrop', dragdrop)
    i++
    console.log(i)
}

/* plaseholders.forEach((placeholder)=>{
    console
    placeholder.addEventListener('dragover', dragover),
    placeholder.addEventListener('dragenter', dragenter),
    placeholder.addEventListener('dragleave', dragleave),
    placeholder.addEventListener('dragdrop', dragdrop)
    
}) */
function dragstart(event){
    event.target.classList.add("hold");
    setTimeout(()=>{
        event.target.classList.add("hide")
    }, 0)
}
function dragend(event){
/*      event.target.classList.remove("hold");
     event.target.classList.remove("hide"); */
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
    console.log(event.target)
}