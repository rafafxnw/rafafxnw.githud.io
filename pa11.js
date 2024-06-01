
const bd_juego=[
    {

id:0,
pregunta:"She ___ to the store yesterday.",
op0:"go",
op1:"went",
op2:"goes",
op3:"going",

correcta:"1"

},



{

    id:1,
    pregunta:"They ___ a movie last night.",
    op0:"watch",
    op1:"watched",
    op2:"watching",
    
    
    correcta:"1"
    
    },


    {

        id:2,
        pregunta:"He ___ his homework after dinner.",
        op0:"does",
        op1:"did",
        op2:" doing",

      
        
        correcta:"1"
        
        },

        {

            id:3,
            pregunta:"We ___ to the park on Sunday.",
            op0:"go",
            op1:"going",
            op2:"went",
        
            
            correcta:"2"
            
            },


            {

                id:4,
                pregunta:"I ___ my friend at the coffee shop.",
                op0:"met",
                op1:"meeting",
                op2:"meets",
                
                
                correcta:"0"
                
                },



                {

                    id:5,
                    pregunta:"She ___ the cake by herself.",
                    op0:"made",
                    op1:"make",
                    op2:"making",
                    
                    
                    correcta:"0"
                    
                    },

                    {

                        id:6,
                        pregunta:"They ___ for the bus for 30 minutes.",
                        op0:"wait",
                        op1:"waits",
                        op2:"waited",
                       
                        
                        correcta:"2"
                        
                        },


                        {

                            id:7,
                            pregunta:"He ___ his keys this morning.",
                            op0:"losing",
                            op1:"loses",
                            op2:"lost",
                            op3:"lost",
                            
                            correcta:"2"
                            
                            },

                            {

                                id:8,
                                pregunta:"We ___ breakfast at 7 AM.",
                                op0:"ate",
                                op1:"eat",
                                op2:"eating",
                              
                                
                                correcta:"0"
                                
                                },


                                {

                                    id:9,
                                    pregunta:"I ___ my wallet at home.",
                                    op0:"forgetting",
                                    op1:"forget",
                                    op2:"forgot",
                                 
                                    
                                    correcta:"2"
                                    
                                    },


                
]



// para guardar las respuestas elegidas

let respuestas=[];

let cantiCorrectas=0;

let numPregunta=0;


function cargarPreguntas() 


{

    const pregunta=bd_juego [numPregunta];

    const contenedor =document.createElement("div");

    contenedor.className="contenedor-preguntas";
    contenedor.id=pregunta.id;
    

const h2= document.createElement("h2");


h2.textContent = pregunta.id + 1 +" - " + pregunta.pregunta;
contenedor.appendChild(h2);
const opciones = document.createElement("div");


const label1=crearLabel("0",pregunta.op0);
const label2=crearLabel("1",pregunta.op1);
const label3=crearLabel("2",pregunta.op2);


opciones.appendChild(label1);
opciones.appendChild(label2);
opciones.appendChild(label3);

contenedor.appendChild(opciones);
document.getElementById("juego").appendChild(contenedor);



}



function crearLabel(num,txtOpcion) 
{
    const label=document.createElement("label");

label.id= "1" +numPregunta + num;


const input=document.createElement("input");
input.setAttribute("type","radio");
input.name="p" + numPregunta;



input.setAttribute("onclick", "seleccionar("+numPregunta+","+num+")");


const span=document.createElement("span");
const correccion=document.createElement("span");
correccion.id="p" + numPregunta+num;


span.textContent=txtOpcion;
label.appendChild(input);
label.appendChild(span);
label.appendChild(correccion);

return label;



}



for(i=0; i < bd_juego.length;i++) 
{
    cargarPreguntas();

    numPregunta++;
}



function seleccionar(pos,opElegida) {
respuestas[pos]=opElegida;


}


let corregir =document.getElementById("corregir");
corregir.onclick=function() 

{

    for(i=0; i < bd_juego.length;i++) 

    {

        const pregunta=bd_juego[i];
        if(pregunta.correcta == respuestas[i])

        {
            cantiCorrectas++;
            let idCorreccion ="p"+ i + pregunta.correcta;

            document.getElementById(i).className="contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML="&check;";
            document.getElementById(idCorreccion).className="acierto";
        }
        


        else 


        {
            let id="p" + i + respuestas[i];
            let idCorreccion="p" + i + pregunta.correcta;

            document.getElementById(i).className="contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML="&#x2715;";
            document.getElementById(id).className="no-acierto";
            document.getElementById(idCorreccion).innerHTML="&check;";
            document.getElementById(idCorreccion).className="acierto";

        }
    }



    let inputs = document.getElementsByTagName("input");
    for(i=0; i<inputs.length;i++) 
    {

        inputs[i].disabled=true;
    }





    window.scrollTo(0,0);

    h2 =document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (10-cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);

}









