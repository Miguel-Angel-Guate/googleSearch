console.log('hello world');
var buscarInput = document.getElementById('buscarInput');
document.querySelector('.botoness').addEventListener('click', function(){
console.log('clicado')
var texto = buscarInput.value;
window.location.href = "https://www.google.es/search?q="+texto



})

buscarInput.addEventListener('keyup', function (event) {
       if(event.key === 'Enter') {
              console.log('ei')
              var texto = buscarInput.value; 
              window.location.href = "https://www.google.es/search?q=" + texto
       }
})

