

const button = document.getElementById("viewHistory")
button.onclick = function() {myFunction()};

function myFunction() {

      let Table = document.getElementById("html-data-table");
      Table.innerHTML = "";


       let newRow=createTableHeading();
       console.log(newRow)
       Table.appendChild(newRow);

       fetch('http://localhost:8080/user/atul_1/order')
            .then(function (response) {
                return response.json();
            }).then(function (apiJsonData) {
                console.log(apiJsonData);
                renderDataInTheTable(apiJsonData);
            })
}



function renderDataInTheTable(orders) {
            const mytable = document.getElementById("html-data-table");
            orders.forEach(order => {
                let newRow = document.createElement("tr");

                    let cell = document.createElement("td");
                    cell.innerText = order["id"].second;
                    newRow.appendChild(cell);

                     cell = document.createElement("td");
                     cell.innerText = order["type"];
                     newRow.appendChild(cell);


                    cell = document.createElement("td");
                    cell.innerText = "NON-PERFORMANCE"
                    if(order["esopType"]==1)
                       cell.innerText = "PERFORMANCE"
                    newRow.appendChild(cell);



                    cell = document.createElement("td");
                    cell.innerText = order["qty"];
                    newRow.appendChild(cell);


                    cell = document.createElement("td");
                    cell.innerText = order["price"];
                    newRow.appendChild(cell);

                    cell = document.createElement("td");
                    cell.innerText = order["status"];
                    newRow.appendChild(cell);

                    cell = document.createElement("td");
                    cell.innerText = order["filledQty"];
                    newRow.appendChild(cell);

                    cell = document.createElement("td");
                    cell.innerText = "unfilledOrder"
                     if(order["filled"]){
                     cell = createTableForTransaction(order["filled"])
                     console.log(typeof(order["filled"][0].price))
                     //cell.innerText = createTableForTransaction()

                    }
                    newRow.appendChild(cell);

                mytable.appendChild(newRow);
            });
        }


function createTableForTransaction(filledOrder) {
  const table = document.createElement("table");
  table.id="transTable"
  const tableBody = document.createElement("tbody");

    const newRow = document.createElement("tr");
    let cell = document.createElement("td");
    cell.innerText = "Quantity";
    newRow.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = "Price";
    newRow.appendChild(cell);

     tableBody.appendChild(newRow);


  for (let orderNo = 0; orderNo < filledOrder.length; orderNo++) {
      const newRow = document.createElement("tr");

      let cell = document.createElement("td");
      cell.innerText = filledOrder[orderNo].quantity;
      newRow.appendChild(cell);

       cell = document.createElement("td");
       cell.innerText = filledOrder[orderNo].price;
       newRow.appendChild(cell);


       tableBody.appendChild(newRow);
    }



  table.appendChild(tableBody);

  table.setAttribute("border", "2");

  return table
}





function createTableHeading(){

        let newRow = document.createElement("tr");

        let cell = document.createElement("th");
        cell.innerText = "OrderId";
        newRow.appendChild(cell);

        cell = document.createElement("th");
        cell.innerText = "Type";
        newRow.appendChild(cell);

        cell = document.createElement("th");
        cell.innerText = "EsopType";
        newRow.appendChild(cell);

        cell = document.createElement("th");
        cell.innerText = "Quantity";
        newRow.appendChild(cell);


        cell = document.createElement("th");
        cell.innerText = "Price";
        newRow.appendChild(cell);

        cell = document.createElement("th");
        cell.innerText = "Status";
        newRow.appendChild(cell);

        cell = document.createElement("th");
        cell.innerText = "FilledQty";
        newRow.appendChild(cell);

        cell = document.createElement("th");
        cell.innerText = "Filled";
        newRow.appendChild(cell);

        return newRow;

}