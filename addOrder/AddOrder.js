const button = document.getElementById("b1")
button.onclick = function() {myFunction()};

function myFunction() {
  console.log( "YOU CLICKED ME!");
  fetch('http://localhost:8080/user/atul_1/order', {
      			method: 'GET',
      		})
      		.then(response => response.json())
      		.then(response => {
      			console.log(response)
      		})
}