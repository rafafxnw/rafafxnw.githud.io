
const bd_juego=[
    {

id:0,
pregunta: "He ___ to bed early every night.",
op0: "will go",
op1: "will goes",
op2: "went",
correcta:"1"

},



{

    id:1,
    pregunta: "She ___ tea in the afternoon.",
    op1: "will drink",
    op0: "will drinks",
    op2: "drank",
    
    correcta:"1"
    
    },


    {

        id:2,
        pregunta: "They ___ to music on weekends.",
        op1: "will listen",
        op0: "will listens",
        op2: "listened",

      
        
        correcta:"1"
        
        },

        {

            id:3,
            pregunta: "The baby ___ during the night.",
            op2: "will cry",
            op1: "will cries",
            op0: "cried",
            
            correcta:"1"
            
            },


            {

                id:4,
                pregunta: "We ___ to the park every Sunday.",
                op0: "will go",
                op1: "will goes",
                op2: "went",
                
                
                correcta:"0"
                
                },



                {

                    id:5,
                    pregunta: "He ___ video games after school.",
                    op0: "will play",
                    op1: "will plays",
                    op2: "played",
                    
                    
                    correcta:"0"
                    
                    },

                    {

                        id:6,
                        pregunta: "She ___ her car on weekends.",
                        op2: "will wash",
                        op1: "will washes",
                        op0: "washed",
                       
                        
                        correcta:"2"
                        
                        },


                        {

                            id:7,
                            pregunta: "The sun ___ brightly in the sky.",
                            op2: "will shine",
                            op1: "will shines",
                            op0: "shone",
                            
                            correcta:"2"
                            
                            },

                            {

                                id:8,
                                pregunta: "They ___ breakfast at 8 a.m.",
                                op0: "will eat",
                                op1: "will eats",
                                op2: "ate",
                              
                                
                                correcta:"0"
                                
                                },


                                {

                                    id:9,
                                    pregunta: "She ___ her bike to school.",
                                    op2: "will ride",
                                    op1: "will rides",
                                    op0: "rode",
                                 
                                    
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









