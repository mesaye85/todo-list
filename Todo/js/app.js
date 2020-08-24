
function addToDo(){
    var text=$("#txt-task").val();
    var todo={
        text:text,
        user:"Mesaye"
    };
    if(text!=""){
        displayToDo(todo.text);
        $("#txt-task").val("");
        
    }else{
        alert("You need to enter a task");
    }
    $("#txt-task").focus();
}
function displayToDo(todo){
    var li=`<li>${todo}<button> Done </button></li>`
    $("#pending-list").append(li);
    
}

function init(){
 console.log('init the to do app');
    $("#btn-add").click(addToDo);
    $("#txt-task").keypress(function(e){
        console.log(e.key);
        if(e.key==="Enter");
        addToDo();
    });
}
window.onload=init;
