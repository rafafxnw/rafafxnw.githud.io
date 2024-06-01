
const bd_juego=[
    {

id:0,
pregunta: "He ___ his homework later.",
op1: "will do",
op0: "will does",
op2: "did",
correcta:"1"

},



{

    id:1,
    pregunta: "She ___ to the party tomorrow.",
    op1: "will go",
    op0: "will goes",
    op2: "went",
    
    correcta:"1"
    
    },


    {

        id:2,
        pregunta: "They ___ the new movie this weekend.",
        op1: "will watch",
        op0: "will watches",
        op2: "watched",

      
        
        correcta:"1"
        
        },

        {

            id:3,
            pregunta: "The dog ___ in the garden.",
            op2: "will play",
            op1: "will plays",
            op0: "played",
            
            correcta:"1"
            
            },


            {

                id:4,
                pregunta: "We ___ a picnic next Saturday.",
                op0: "will have",
                op1: "will has",
                op2: "had",
                
                correcta:"0"
                
                },



                {

                    id:5,
                    pregunta: "He ___ dinner tonight.",
                    op0: "will cook",
                    op1: "will cooks",
                    op2: "cooked",
                    
                    
                    correcta:"0"
                    
                    },

                    {

                        id:6,
                        pregunta: "She ___ the report by tomorrow.",
                        op0: "will finish",
                        op1: "will finishes",
                        op2: "finished",
                       
                        
                        correcta:"2"
                        
                        },


                        {

                            id:7,
                            pregunta: "The team ___ the game next week.",
                            op2: "will win",
                            op1: "will wins",
                            op0: "won",
                            
                            correcta:"2"
                            
                            },

                            {

                                id:8,
                                pregunta: "They ___ the house this weekend.",
                                op0: "will clean",
                                op1: "will cleans",
                                op2: "cleaned",
                              
                                
                                correcta:"0"
                                
                                },


                                {

                                    id:9,
                                    pregunta: "She ___ a book during the holiday.",
                                    op2: "will read",
                                    op1: "will reads",
                                    op0: "read",
                                 
                                    
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









