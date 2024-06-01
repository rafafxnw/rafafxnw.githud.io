
const bd_juego=[
    {

id:0,
pregunta: "She ___ to the store yesterday.",
op0: "go",
op1: "went",
op2: "goes",

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
        pregunta: "They ___ a movie together on Friday.",
        op0: "watch",
        op1: "watched",
        op2: "watches",

      
        
        correcta:"1"
        
        },

        {

            id:3,
            pregunta: "She ___ in the park every Sunday",
            op0: "walk",
            op1: "walked",
            op2: "walks",
        
            
            correcta:"1"
            
            },


            {

                id:4,
                pregunta: "We ___ to the beach last summer.",
                op0: "go",
                op1: "went",
                op2: "goes",
                
                
                correcta:"0"
                
                },



                {

                    id:5,
                    pregunta: "They ___ their friends last weekend.",
                    op0: "visit",
                    op1: "visited",
                    op2: "visits",
                    
                    
                    correcta:"0"
                    
                    },

                    {

                        id:6,
                        pregunta: "He ___ his car every week.",
                        op0: "wash",
                        op1: "washed",
                        op2: "washes",
                       
                        
                        correcta:"2"
                        
                        },


                        {

                            id:7,
                            pregunta: "She ___ her room every day.",
                            op0: "clean",
                            op1: "cleaned",
                            op2: "cleans",
                            
                            correcta:"2"
                            
                            },

                            {

                                id:8,
                                pregunta: "I ___ to the store on weekends.",
                                op0: "go",
                                op1: "went",
                                op2: "goes",
                              
                                
                                correcta:"0"
                                
                                },


                                {

                                    id:9,
                                    pregunta: "He ___ his teeth every morning.",
                                    op0: "brush",
                                    op1: "brushed",
                                    op2: "brushes",
                                 
                                    
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









