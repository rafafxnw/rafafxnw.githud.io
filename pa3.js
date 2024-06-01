
const bd_juego=[
    {

id:0,
pregunta: "She ___ her breakfast at 8 o'clock this morning.",
op0: "eat",
op1: "ate",
op2: "eats",

correcta:"1"

},



{

    id:1,
    pregunta: "They ___ a great time at the party last night.",
    op0: "have",
    op1: "had",
    op2: "has",
    
    
    correcta:"1"
    
    },


    {

        id:2,
        pregunta: "He ___ his keys on the table.",
        op0: "leave",
        op1: "left",
        op2: "leaves",

      
        
        correcta:"1"
        
        },

        {

            id:3,
            pregunta: "She ___ in London for three years before moving to Paris.",
            op0: "live",
            op1: "lived",
            op2: "lives",
        
            
            correcta:"1"
            
            },


            {

                id:4,
                pregunta: "We ___ a delicious cake for his birthday.",
                op0: "bake",
                op1: "baked",
                op2: "bakes",
                
                
                correcta:"0"
                
                },



                {

                    id:5,
                    pregunta: "They ___ to the concert last Friday.",
                    op0: "go",
                    op1: "went",
                    op2: "goes",
                    
                    
                    correcta:"0"
                    
                    },

                    {

                        id:6,
                        pregunta: "He ___ his grandmother every Sunday.",
                        op0: "visit",
                        op1: "visited",
                        op2: "visits",
                       
                        
                        correcta:"2"
                        
                        },


                        {

                            id:7,
                            pregunta: "She ___ her homework before dinner.",
                            op0: "finish",
                            op1: "finished",
                            op2: "finishes",
                            
                            correcta:"2"
                            
                            },

                            {

                                id:8,
                                pregunta: "I ___ my old friends at the reunion.",
                                op0: "see",
                                op1: "saw",
                                op2: "sees",
                              
                                
                                correcta:"0"
                                
                                },


                                {

                                    id:9,
                                    pregunta: "They ___ a new house last month.",
                                    op0: "buy",
                                    op1: "bought",
                                    op2: "buys",
                                 
                                    
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









