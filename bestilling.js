	
	
	sum = 0
	var selectedFoodValue = foods.options[foods.selectedIndex].value;
	
 function choosedFood() {
			var foods = document.getElementById("foods");
			var selectedFood = foods.options[foods.selectedIndex].text;
			selectedFoodValue = foods.options[foods.selectedIndex].value;

			var display = document.getElementById("display");
			var bestill = document.getElementById("bestill").value;


						//document.getElementById("list").innerHTML = "Do har valgt " + selectedFood + " pizza";
					if (selectedFoodValue == 5) {
						display.innerHTML = "Please Select you pizza from the menu ";
						
						}
					if (selectedFoodValue == 1) {    //'<img src="orangepizza.jpg" id="orange" / alt="orange pizza" height="120" width="160">' +
							display.innerHTML = " APPLE PIZZA" +  "</br>" +
							"Ingridents:<br/> Orange, Onion, Ginger, Vodka and some other stuff " + "<br/>PICE:200 kr";
						}
					if (selectedFoodValue == 2){    // '<img src="applepizza.jpg" / alt="apple pizza" height="120" width="160">' + "<br/>" +
							display.innerHTML =  "ORANGE PIZZA" +
							"Ingridents:<br/> Apple, Onion, Ginger, Vodka and some other stuff "  + "<br/>PRICE:200 kr";
						}
					if (selectedFoodValue == 3){
							display.innerHTML =   "PINEAPPLE PIZZA" + '<img src="pineapplepizza.jpg" / alt="pineapple pizza" height="120" width="160">'
							"<br/>" + "Ingridents:<br/> Pineapple, Onion, Ginger, Vodka and some other stuff "  + "<br/>PRICE:200 kr";
						}
					if (selectedFoodValue == 4){
							display.innerHTML =  "CHOCO PIZZA" + '<img src="chocolatepizza.jpg" / alt="chocolate pizza" height="120" width="160">'+"</br>" + 
							"Ingridents:<br/> Chocolate, Onion, Ginger, Vodka and some other stuff"  + "<br/>PRICE:200 kr";
						}
					
				}
							/*
							function foodChooser() {

							var foods = document.getElementById("foods");
							var selectedFood = foods.options[foods.selectedIndex].text;

							document.getElementById("list").innerHTML = "Do har valgt " + selectedFood ;
							}
							*/

function orderedFood (){  
			var foods = document.getElementById("foods");
			var bestill = foods.options[foods.selectedIndex].value;

			var display = document.getElementById("showorder");


						//document.getElementById("list").innerHTML = "Do har valgt " + selectedFood + " pizza";
					if (selectedFoodValue == 5) {
						display.innerHTML = "Please Select you pizza from the menu ";
						
						}
					if (selectedFoodValue == 1) {
							sum += 200
							display.innerHTML += " APPLE PIZZA"+"<br />";
									
						}
					if (selectedFoodValue == 2){
							sum += 200
							display.innerHTML += "ORANGE PIZZA"+"<br />";
						
						}
					if (selectedFoodValue == 3){
							sum += 200
							display.innerHTML += "PINEAPPLE PIZZA"+"<br />";
							
							
						}
					if (selectedFoodValue == 4){
							sum += 200
							display.innerHTML += "CHOCO PIZZA"+"<br />";

						}
					document.getElementById("summer").innerHTML = "Sum: "+sum;
				}

