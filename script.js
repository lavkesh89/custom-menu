// var selectField = document.getElementByIdId('selectField');
// var selectText = document.getElementById("selectText"); 
 
// var options = document.getElementsByClassName('options');
// var list = document.getElementById("list");
// var arrowIcon = document.getElementById("arrowIcon");

// selectField.oneclick = function(){
//     list.classList.toggle("hide");
//     arrowIcon.classlist.toggle("rotate");
// }

// for(option of options){
//     option.onclick = function(){
//         selectText.innerHTML = this.textContent;
//         list.classList.toggle("hide");
//         arrowIcon.classlist.toggle("rotate");
//     }
// }



var selectField = document.getElementById('selectField');
var selectText = document.getElementById("selectText");

var options = document.getElementsByClassName('options');
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");

selectField.onclick = function(){
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}

for(var i = 0; i < options.length; i++){
    options[i].onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}
