const date = document.getElementById('date');
options = {weekday: "long", month: "short", day: "numeric"};
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);


var list =document.getElementById("list_item")

function input_text(){
var todo=document.getElementById("input");

var li =document.createElement("li")
var text=document.createTextNode(todo.value)
li.appendChild(text)

var delbtn=document.createElement("button");
var deltext= document.createTextNode("Done")
delbtn.setAttribute("id","delbutton")
delbtn.setAttribute("class", "fa fa-trash")
delbtn.setAttribute("onclick","delete_item(this)")
delbtn.appendChild(deltext)

var editbtn = document.createElement("button")
var editText= document.createTextNode("Edit")
editbtn.setAttribute("class","edit")
editbtn.setAttribute("onclick","edit(this)")
editbtn.appendChild(editText)


	var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
checkBox.setAttribute("class","check")
	li.appendChild(checkBox)
    
    
li.appendChild(editbtn)
li.appendChild(delbtn)

list.appendChild(li)

todo.value=" "
console.log(li)
}


function delete_item(b){
    b.parentNode.remove()
}

function deleteAll(){
    list.innerHTML= ""
}

function edit(e){
var val =prompt("Enter edit value",e.parentNode.firstChild.nodeValue)  
e.parentNode.firstChild.nodeValue= val;
}




