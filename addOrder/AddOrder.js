const form = document.getElementById("form1");
const qty = document.getElementById("quantity");
var type
const price = document.getElementById("price");
var esopType= document.getElementById("esopType")
console.log("hi")


function buySellCheck()
{
    if (document.getElementById('buy').checked) {
        type= "BUY"
        document.getElementById("esopType").disabled= true

    }
    else {
        type= "SELL"
         document.getElementById("esopType").disabled= false
        document.getElementById("esopType").checked = "NORMAL"

    }

}


form.addEventListener("submit", function(event) {
	event.preventDefault();
    var content

    if(type=="SELL")
    {
        content = JSON.stringify({
                        quantity: parseInt(qty.value),
                        type: type,
                        price: parseInt(price.value),
                        esopType: esopType.value
                    })
     }
     else
     {
           content = JSON.stringify({
                             quantity: parseInt(qty.value),
                             type: type,
                             price: parseInt(price.value)
                         })
      }

	fetch("http://localhost:8080/user/atul_1/order", {
			method: "POST",
			headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
			body:
				content

		})
		.then((response) => response.json())
		.then((json) =>{
			console.log(json);
			if(json.error)
			{
			document.getElementById("message").innerHTML = json.error
			document.getElementById("message").style.color="red";
			}
			else
			{
			document.getElementById("message").style.color="green";
			document.getElementById("message").innerHTML = "Order Placed";
            document.getElementById("esopType").disabled= false
			}

			}
		)

});

