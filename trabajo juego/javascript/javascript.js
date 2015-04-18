window.onload=function ()
 
{
	adiv="";
	var cont=0;
	crear_numeros();
	
		//nom_div("respuestas").addEventListener('click', function(event)
			
				valnum ();
			
				
				
		
			a = Number(nom_div("adivina").value);
			//alert("gdgd");
		
	

	function crear_numeros()
	{

		var num = Math.floor((Math.random()* 50)+1);
	    console.log(num);
	    nom_div("rangoAdivina").innerHTML = "el rango esta entre 1 y"+num;
	    num_correcto = Math.floor((Math.random()* num)+1);
		console.log(num_correcto); 
	}
	 function valnum ()
	 {
	 	crear_numeros();
	 	adiv = Number(nom_div("adivina").value);
	 	var sub = 0;
	 	while(sub <= 0)
			    {
				    
				    //console.log(adiv);
				    console.log("entroooooooo");

				    if(adiv == num_correcto)
				    {
					    console.log("lo logro");
					    alert("correcto");
					
				    }
				    else
				   {
					    cont++;
					    alert("sigue intentando");
				   }
				   sub ++;

			    }
			    

	 }

	function nom_div(div)
	{
		return document.getElementById(div);
	}
}