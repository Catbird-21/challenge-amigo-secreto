let amigos = [];
function agregarAmigo() {
    let nombreDeamigo = document.getElementById("amigo").value;
    
    if (nombreDeamigo ==="") {
        alert ("Por favor, inserte un nombre.");
      return false;
  } else {
  amigos.push(nombreDeamigo);
  document.getElementById("amigo").value = "";
   actualizarLista(amigos); 
  return true;
 
  }
} 

function actualizarLista(amigos) {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i< amigos.length; i++) {
    let amigo = amigos [i];
    let listItem = document.createElement("li");
    listItem.textContent = amigo;
    lista.appendChild(listItem);
    }
}

function sortearAmigo() {
  if (amigos.length === 0) {
  alert ("No hay amigos para sortear");
  return;
  }
  let amigoAleatorio = Math.floor(Math.random() * amigos.length);
  let nombreSorteado = amigos[amigoAleatorio];

  document.getElementById("resultado").innerHTML = "Tu amigo secreto es: " + nombreSorteado;
}
