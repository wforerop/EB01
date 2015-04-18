window.onload=function ()
 
{
	adiv="";
	crear_numeros();
    a = Number(nom_div("adivina").value);
    nom_div("respuestas").addEventListener('click', function(event)
	{
		adiv = Number(nom_div("adivina").value);
		if(adiv!=" ")
		{
			valnum ();		
		}
		else
		{
			alert("no hay nada");
		}
	});

	function crear_numeros()
	{

		var num = Math.floor((Math.random()* 200)+50);
	    console.log(num);
	    nom_div("rangoAdivina").innerHTML = "el rango esta entre 1 y"+num;
	    num_correcto = Math.floor((Math.random()* num)+1);
		console.log(num_correcto); 
	}
	 function valnum ()
	 {
	 	var intentos ;
	 	for(intentos=0;intentos<=2;intentos++)
			    {
				    if(adiv == num_correcto)
				    {
					    console.log("lo logro");
					    alert("correcto");
					    break;
				    }
				    else
				   {
				   		nom_div("adivina").value= " ";
				   		intentos ++;
					    alert("sigue intentando");
				   }
			    }
			    

	 }

	function nom_div(div)
	{
		return document.getElementById(div);
	}
}