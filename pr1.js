
const bd_juego=[
    {

id:0,
pregunta: "He ___ basketball every weekend.",

op0: "play",
op1: "plays",
op2: "played",

correcta:"1"

},



{

    id:1,
    pregunta: "She ___ to the gym after work.",
    
    op0: "go",
    op1: "goes",
    op2: "went",
    
    
    correcta:"1"
    
    },


    {

        id:2,
        pregunta: "They ___ English in school.",

        op0: "speaks",
        op1: "speak",
        op2: "spoke",

      
        
        correcta:"1"
        
        },

        {

            id:3,
            pregunta: "It ___ like it's going to rain soon.",
            
            op0: "looks",
            op1: "look",
            op2: "looked",
        
            
            correcta:"1"
            
            },


            {

                id:4,
                pregunta: "I ___ my homework every evening.",
                
                op0: "do" ,
                op1: "does",
                op2: "did",
                
                
                correcta:"0"
                
                },



                {

                    id:5,
                    pregunta: "She ___ coffee in the morning.",
                    
                    op0: "drinks",
                    op1: "drink",
                    op2: "drank",
                    
                    
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
                            pregunta: "He ___ his dog in the park.",
                            
                            op2: "walks",
                            op1: "walk",
                            op0: "walked",
                            
                            correcta:"2"
                            
                            },

                            {

                                id:8,
                                pregunta: "The sun ___ in the east.",
                                
                                op1: "rise",
                                op0: "rises",
                                op2: "rose",
                              
                                
                                correcta:"0"
                                
                                },


                                {

                                    id:9,
                                    pregunta: "They ___ dinner at 7 p.m.",
                                    
                                    op0: "eats",
                                    op2: "eat",
                                    op1: "ate",
                                 
                                    
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









