function validate(){
  var mainMenu =document.body.querySelector(".mainmenu");
  
  var userInput =document.body.querySelector(".userinput");
  
  var nextMenu =document.body.querySelector(".nextmenu");
  
  var username =document.body.querySelector(".username").value;
    
  if(username==="coolStudent123"){
    mainMenu.innerHTML="";
    userInput.innerHTML="";
    writeStuff(pages[0].content);
    for (i=0; i<pages.length; i++){
     new pageMaker(pages[i]);
    }
  }else{
    mainMenu.innerHTML="Username Incorrect";
  }
  
}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})

var pages = [
  {
    title:"Home",
    content:"Stuff"
  },
  {
    title:"About",
    content:"Some About Content"
  },
  {
    title:"View",
    content:"N/A"
  }
]

var nextMenu =document.body.querySelector(".nextmenu");

var display =document.body.querySelector(".display");

var nav =document.body.querySelector(".nav");

var makenote =document.body.querySelector(".makenote");

var list =document.body.querySelector(".list");


function pageMaker(pg){
  this.button = document.createElement("button")
  this.button.addEventListener("click", function(){
    writeStuff(pg.content, pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}

function writeStuff(stuff, pg){
  if(pg!=="View"){
    display.innerHTML=stuff;
  }else{
    addNote();
    renderList();
  }
}

var checkNumber = /^[0-9]+$/;


function addNote(){
  display.innerHTML="";
  var makebtn = document.createElement("button");
  makebtn.innerHTML="Add Note";
  makebtn.addEventListener("click", function(){
    submit();
    submitnum();
  })
  display.appendChild(makebtn);
  var makenote = document.createElement("input");
  makenote.placeholder="add note..."
  var makeimp = document.createElement("input");
  makeimp.placeholder="add importance..."
  function submit(){
    var text =(makenote).value;
    if(text.length<0){
      document.body.querySelector(".list2").innerHTML="Error: Not enough characters in note."
    }else if(text.length>0){
       list.push(text);
       document.body.querySelector(".list2").innerHTML=""
       renderList();
    }else{
      document.body.querySelector(".list2").innerHTML="Error:N ot enough characters in note."
     }
  }
  renderList();
  function submitnum(){
    var imp =(makeimp).value;
    if(checkNumber.test(imp)){
     list.push(imp);
     document.body.querySelector(".list2").innerHTML=""
     renderList();
     }else if (imp.length<0){
     document.body.querySelector(".list2").innerHTML="Error: Not enough characters in importance."
     }else{
     document.body.querySelector(".list2").innerHTML="Error: Importance value is not an integer."
     }
   }
   display.appendChild(makenote);
   display.appendChild(makeimp);
   renderList();
}

var list = [" "];


function renderList(){
  var listEle = document.body.querySelector(".list");
  listEle.innerHTML="";
  
  for(var i=0; i<list.length; i++){
    var element = document.createElement("div");
    element.innerHTML=list[i];
    listEle.appendChild(element);
  }
}


renderList();