//variables

const inputtask =document.querySelector("#en-task");
const button =document.querySelector("#add-task");
const cont = document.querySelector("#task-container");

button.addEventListener("click",function(){

    let task =document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");

    li.innerText =`${inputtask.value}`;

    task.appendChild(li);


    let checkbtn =document.createElement("button");
    checkbtn.innerText ="check"
    task.appendChild(checkbtn);

     let delbtn = document.createElement("button");
     delbtn.innerText = "delete";
     task.appendChild(delbtn);

     let editbtn =document.createElement("button");
     editbtn.innerText ="edit"
     task.appendChild(editbtn)

    if(inputtask.value === ""){
        alert("enter the task")
    }else{
        cont.appendChild(task);
    }
 inputtask.value ="";


 checkbtn.addEventListener("click",function(){
    checkbtn.parentElement.style.textDecoration ='line-through';
 })

  delbtn.addEventListener("click", function (e) {
    let target =e.target;

    // target.parentElement.parentElement.remove();
    task.remove();
  });

//   editbtn.addEventListener("click",function(e){
//     e.preventDefault();
//     let span=document.createElement("span");
//     span.innerText =    `${inputtask.value}`;
//     li.replaceWith(span);
//   })
})