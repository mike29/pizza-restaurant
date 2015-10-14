	
	
	
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
					if (selectedFoodValue == 1) {   
							display.innerHTML = " APPLE PIZZA" +  "</br>" +
							"Ingridents:<br/> Orange, Onion, Ginger, Vodka and some other stuff " + "<br/>PICE:200 kr";
						}
					if (selectedFoodValue == 2){    
							display.innerHTML =  "ORANGE PIZZA" + "<br/>" +
							"Ingridents:<br/> Apple, Onion, Ginger, Vodka and some other stuff "  + "<br/>PRICE:200 kr";
						}
					if (selectedFoodValue == 3){		//'<img src="pineapplepizza.jpg" / alt="pineapple pizza" height="120" width="160">'
							display.innerHTML =   "PINEAPPLE PIZZA" + "<br/>" +
							"Ingridents:<br/> Pineapple, Onion, Ginger, Vodka and some other stuff "  + "<br/>PRICE:200 kr";
						}
					if (selectedFoodValue == 4){
							display.innerHTML =  "CHOCO PIZZA" +"</br>" + 
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

function orderedFood (){     //causing problem u can delete it or fix it  for the page to work
//choosedfood();
//if (selectedFoodValue == 1)&&               // brukern click på bestill skal du bekrefte bestilling med text og vise det maten han bestilt

	var bestill = document.getElementById("mottatBestiling");
		if (selectedFood == true) {                                             //if only  food is selected order will be accepted 
			mottatBestilling.innerHTML = "BESTIILING MOTTAT"; 
	}
	else {

		var bestill = document.getElementById("velg mat");
	}
}

