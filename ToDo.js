if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready);
}
else{
    ready();
}

function ready(){
   
    var textBoxbtn=document.getElementsByClassName('input-text-btn');
    //console.log(textBoxbtn)
    for(var i=0;i<textBoxbtn.length;i++){
        var button=textBoxbtn[i];
        button.addEventListener('click',addBtnClicked)
    }

}

function removeTask(event){
    var butn=event.target
    console.log(butn.parentElement)
    butn.parentElement.parentElement.remove()
    
}


function addBtnClicked(event){
   var text=document.getElementById("My-id").value
   addTaskToList(text);
   
}

function addTaskToList(text){
   
    var task=document.createElement('div')
    task.className="item-div"
    var taskItems=document.getElementsByClassName("list-elements")[0]
    var taskListContent=`
            <li class="item-list">${text}</li> 
            <button class="item-btn header-btn btn" onclick="removeTask(event)" type="button"><img src="images/check.png"></button>  
            `
    task.innerHTML=taskListContent
    taskItems.append(task)


}