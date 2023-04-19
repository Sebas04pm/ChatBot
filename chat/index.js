var data= {
    chatinit:{
        title: ["Hola <span class='emoji'> &#128075;</span>","Soy SlackBot","¿Cómo puedo ayudarle?"],
        options: ["Movies <span class='emoji'> &#128250;</span>","News","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
    },
    movies: {
        title:["Por favor seleccione la categoria"],
        options:['Hollywood','Bollywood','Series Web','Otros'],
        url : {

        }
    },
    
    news: {
        title:["Los 5 mejores titulares de hoy"],
        options:["Alemania abandona la energía nuclear después de más de 60 años a pesar de las presiones de la guerra en Ucrania","Durante el fin de semana se produjeron violentos enfrentamientos en varias partes de Sudán entre fuerzas militares y paramilitares, que dejaron más de 50 muertos y 600 heridos","Lager-Sylt: el único campo de concentración nazi en suelo británico","Lula acusa a Estados Unidos desde China de alentar la guerra en Ucrania. Rusia sostiene que el grupo mercenario Wagner ha tomado dos nuevas áreas de la ciudad sitiada de Bakhmut"],
        url : {
            more:"https://www.youtube.com/@sebastianparedesmorillo/videos",
            link:["https://eluniversal.com/","https://www.youtube.com/@webhub/videos","https://www.youtube.com/@webhub/videos","https://www.youtube.com/@webhub/videos"]
        }
    },
    shopping: {
        title:["Gracias por su respuesta!","Bienvenido a la zona comercial <span class='emoji'> &#128090;</span>","Seleccione una de las siguientes opciones para continuar"],
        options:['Electrodomesticos','Productos de limpieza','Mobiles','Men Fashion','Women fashion'],
        url : {
            
        }
    },
    electronics: {
        title:["Gracias por su respuesta!","Aquí hay algunos artículos electrónicos para usted","Haga click para saber mas"],
        options:['Televisores','Camaras','Consolas','Celulares','Cornetas'],
        url : {
            more:"https://www.youtube.com/@sebastianparedesmorillo/videos",
            link:["https://www.amazon.com/-/es/","https://www.amazon.com/-/es/","https://www.amazon.com/-/es/","https://www.amazon.com/-/es/","https://www.amazon.com/-/es/"]
        }
    },
    beauty: {
        title:["Gracias por su respuesta!","Aquí hay algunos productos de belleza para ti","Haga click para saber mas"],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.youtube.com/@sebastianparedesmorillo/videos",
            link:["#","#","#","#"]
        }
    },
    mobiles: {
        title:["Gracias por su respuesta!","Estos son algunos resultados basados en su entrada","Haga click para saber mas"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://www.youtube.com/@sebastianparedesmorillo/videos",
            link:["https://www.apple.com/","https://www.samsung.com/latin/","https://www.walmart.com/","https://www.mi.com/global/"]
        }
    },
    men: {
        title:["Gracias por su respuesta!","Estos son algunos resultados basados en su entrada","Haga click para saber mas"],
        options:['Ropa','Camisas','Camisetas','Ropa interior','Jeans'],
        url : {
            more:"https://www.youtube.com/@sebastianparedesmorillo/videos",
            link:["#","#","#","#","#"]
        }
    },
    women: {
        title:["Gracias por su respuesta!","Estos son algunos resultados basados en su entrada","Haga click para saber mas"],
        options:['Ropa','Faldas','Tops','Vestidos',"Lenceria"],
        url : {
            more:"https://www.youtube.com/@sebastianparedesmorillo/videos",
            link:["#","#","#","#"]
        }
    },
    music: {
        title:["Estas son algunas de las últimas canciones <span class='emoji'> &#127925;</span>"],
        options: ["song 1","song 2","song 3","song 4","song 5"],
        url : {
            more:"https://www.youtube.com/@sebastianparedesmorillo/videos",
            link:["https://youtu.be/L-OdlTWHx5c","https://www.youtube.com/watch?v=j1VVY2sEdC0","https://www.youtube.com/watch?v=WFoMObvIQXk","https://www.youtube.com/watch?v=AAbAw3sgeow","https://www.youtube.com/watch?v=y19tw_92AFk"]
        }
    },
    hollywood: {
        title: ["Gracias por su respuesta!","Aquí hay algunas películas basadas en el género"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/@sebastianparedesmorillo/videos",
            link:["https://www.culturagenial.com/es/peliculas-de-comedia/","https://www.rtve.es/playz/20210507/top-15-mejores-peliculas-terror-deberias-ver/2088886.shtml","https://www.xataka.com/cine-y-tv/mejores-peliculas-ciencia-ficcion-1","https://www.superaficionados.com/mejores-peliculas-romanticas/","https://www.espinof.com/listas/las-mejores-peliculas-de-accion-de-la-historia#:~:text=Las%2032%20mejores%20pel%C3%ADculas%20de%20acci%C3%B3n%20de%20la,%27Robocop%27%208%20%27Desaf%C3%ADo%20Total%27%20%28%27Total%20Recall%27%29%20M%C3%A1s%20elementos"]
        }
    },
    bollywood: {
        title: ["Gracias por su respuesta!","Aquí hay algunas películas basadas en el género"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/@sebastianparedesmorillo/videos",
            link:["#","#","#","#","#"]
        }
    },
    web: {
        title: ["Gracias por su respuesta!","Here are some genre based web series"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/@sebastianparedesmorillo/videos",
            link:["#","#","#","#","#"]
        }
    },
    others: {
        title: ["Aquí hay algunas opciones más para usted"],
        options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
        url: {
            more:"https://www.youtube.com/",
            link:["#","#","#","#","#"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CERRAR CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}