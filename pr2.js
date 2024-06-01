
const bd_juego=[
    {

id:0,
pregunta: "He ___ to work every day.",


op0: "walk",
op1: "walks",
op2: "walked",

correcta:"1"

},



{

    id:1,
    pregunta: "She ___ her dog in the park.",
    
    
    op0: "walk",
    op1: "walks",
    op2: "walked",
    
    
    correcta:"1"
    
    },


    {

        id:2,
        pregunta: "They ___ soccer on Saturdays.",
        
        
        op1: "play",
        op0: "plays",
        op2: "played",

      
        
        correcta:"1"
        
        },

        {

            id:3,
            pregunta: "The cat ___ on the windowsill.",
            
            
            op0: "sit",
            op2: "sits",
            op1: "sat",
        
            
            correcta:"1"
            
            },


            {

                id:4,
                pregunta: "We ___ dinner together every evening.",
                
                
                op0: "have",
                op1: "has",
                op2: "had",
                
                
                correcta:"0"
                
                },



                {

                    id:5,
                    pregunta: "He ___ a bike to work.",
                    
                    
                    op1: "ride",
                    op0: "rides",
                    op2: "rode",
                    
                    
                    correcta:"0"
                    
                    },

                    {

                        id:6,
                        pregunta: "She ___ her favorite TV show every Monday.",
                        
                        
                        op0: "watch",
                        op2: "watches",
                        op1: "watched",
                       
                        
                        correcta:"2"
                        
                        },


                        {

                            id:7,
                            pregunta: "They ___ early in the morning.",
                            
                            
                            op0: "wake",
                            op2: "wakes",
                            op1: "woke",
                            
                            correcta:"2"
                            
                            },

                            {

                                id:8,
                                pregunta: "The birds ___ in the trees.",
                                
                                op0: "chirp",
                                op1: "chirps",
                                op2: "chirped",
                              
                                
                                correcta:"0"
                                
                                },


                                {

                                    id:9,
                                    pregunta: "She ___ her lunch at 12 o'clock.",
                                    
                                    
                                    op0: "have",
                                    op2: "has",
                                    op1: "had",
                                 
                                    
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









