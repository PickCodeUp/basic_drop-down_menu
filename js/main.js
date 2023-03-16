
/* En este archivo, hemos seleccionado los elementos HTML 
utilizando document.querySelector() y hemos agregado dos 
event listeners, uno para cuando el ratón se mueve sobre 
el menú (mouseover) y otro para cuando el ratón sale del 
menú (mouseout). Cuando el ratón se mueve sobre el menú, 
establecemos el estilo display del elemento .dropdown-content 
en block para mostrar el menú, y cuando el ratón sale del menú, 
establecemos el estilo display en none para ocultar el menú.*/ 

var dropdown = document.querySelector(".dropdown");
var dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("mouseover", function() {
	dropdownContent.style.display = "block";
});

dropdown.addEventListener("mouseout", function() {
	dropdownContent.style.display = "none";
});


