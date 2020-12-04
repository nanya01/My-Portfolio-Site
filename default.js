let theme = localStorage.getItem("theme");
 
    if(theme == null){
        setTheme("default.css");
    }else{
        setTheme(theme)
    }

var Theme = document.getElementById("theme");
var themeSet= document.getElementById("theme-set");

Theme.addEventListener("click", ()=>{
    var getTheme = document.getElementById("theme-set").getAttribute("href");     
    changeTheme(getTheme);    
}, false);


function setTheme(theme){
   let themeSet= document.getElementById("theme-set");
    if(theme == "default.css"){
    themeSet.setAttribute("href", "default.css");
    }
    if(theme == "blue.css"){
        themeSet.setAttribute("href", "blue.css");
    }
}
function changeTheme(mode){     
    if(mode =="blue.css"){
        themeSet.setAttribute("href", "default.css");        
        let mode1= themeSet.getAttribute("href");
        save(mode1);       
    }
    else{
        themeSet.setAttribute("href", "blue.css");  
        let mode1= themeSet.getAttribute("href");
        save(mode1);
    }
}
function save(saveTheme){
    localStorage.setItem("theme", saveTheme )
}

