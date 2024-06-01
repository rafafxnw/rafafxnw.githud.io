
const bd_juego=[
    {

id:0,
pregunta: "He ___ to the gym tomorrow.",
op1: "will go",
op0: "will goes",
op2: "went",
correcta:"1"

},



{

    id:1,
    pregunta: "She ___ a new dress next week.",
    op1: "will buy",
    op0: "will buys",
    op2: "bought",
    
    correcta:"1"
    
    },


    {

        id:2,
        pregunta: "They ___ to the beach on Saturday.",
        op1: "will travel",
        op0: "will travels",
        op2: "traveled",

      
        
        correcta:"1"
        
        },

        {

            id:3,
            pregunta: "The teacher ___ the test results soon.",
            op2: "will announce",
            op1: "will announces",
            op0: "announced",
            
            correcta:"1"
            
            },


            {

                id:4,
                pregunta: "We ___ a new project next month.",
                op0: "will start",
                op1: "will starts",
                op2: "started",
                
                
                correcta:"0"
                
                },



                {

                    id:5,
                    pregunta: "He ___ his car next Friday.",
                    op0: "will sell",
                    op1: "will sells",
                    op2: "sold",
                    
                    
                    correcta:"0"
                    
                    },

                    {

                        id:6,
                        pregunta: "She ___ a cake for the party.",
                        op2: "will bake",
                        op1: "will bakes",
                        op0: "baked",
                       
                        
                        correcta:"2"
                        
                        },


                        {

                            id:7,
                            pregunta: "The company ___ a new product soon.",
                            op2: "will launch",
                            op1: "will launches",
                            op1: "launched",
                            
                            correcta:"2"
                            
                            },

                            {

                                id:8,
                                pregunta: "They ___ a marathon next year.",
                                op0: "will run",
                                op1: "will runs",
                                op2: "ran",
                              
                                
                                correcta:"0"
                                
                                },


                                {

                                    id:9,
                                    pregunta: "She ___ the meeting at 10 a.m.",
                                    op2: "will attend",
                                    op1: "will attends",
                                    op0: "attended",
                                    
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









