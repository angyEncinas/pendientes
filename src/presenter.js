import sumar from "./sumador";

const tarea = document.querySelector("#descripcion");
const form = document.querySelector("#tareas-form");
const div = document.querySelector("#resultado-div");
let tareas  =[]
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tar = tarea.value;
  if(tar ==""){
    div.innerHTML = "<p>" + "No es posible registrar una tarea pendiente sin descripción" + "</p>";
  }else{
    tareas.push(tar)
    div.innerHTML = "<p>" + tareas[0] + "</p>";
  }
  

  
});
