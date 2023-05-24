var arr=[]
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready);
}
else{
    ready();
}

function ready(){
    
    var textBoxbtn=document.getElementsByClassName('input-text-btn');
 
    for(var i=0;i<textBoxbtn.length;i++){
        var button=textBoxbtn[i];       
        button.addEventListener('click',addBtnClicked)
        
    }

   window.onload=function(){
        var localTasks=JSON.parse(localStorage.getItem('data'));
        
        for(var j=0;j<localTasks.length;j++){         
            addTaskToList(localTasks[j]);
        }
        

   }
   


}




function removeTask(event){
    var butn=event.target
    
    var localTasks=JSON.parse(localStorage.getItem('data'));
    for(var i=0;i<localTasks.length;i++){
        var localid=butn.parentElement.parentElement;
        var dummy=localid.getElementsByClassName("item-list")[0].innerHTML
        if(dummy==localTasks[i]){
            console.log('true')
            var index = localTasks.indexOf(dummy);
            localTasks.splice(index,1)
            localStorage.setItem('data',JSON.stringify(localTasks))
        }
    }
   
    
    butn.parentElement.parentElement.remove()
    
}


function addBtnClicked(){
   var text=document.getElementById("My-id").value
   if(text==''){
    alert('Enter the task');
   }

  else{
    var text=document.getElementById("My-id").value
    
    arr.push(text);
    localStorage.setItem('data',JSON.stringify(arr))
    
    addTaskToList(text);
    document.getElementById("My-id").value='';
  }
   
}

function addTaskToList(text){
   
    var task=document.createElement('div')
    task.className="item-div"
    var taskItems=document.getElementsByClassName("list-elements")[0]
    
    var taskItemsTitle=document.getElementsByClassName("item-list")
    for(var i=0;i<taskItemsTitle.length;i++){
        if(text==taskItemsTitle[0].innerHTML){
            alert("Task Already in the List")
            return;
        }
    }


    var taskListContent=`
            <li class="item-list">${text}</li> 
            <button class="item-btn header-btn btn" onclick="removeTask(event)" type="button"><img src="images/check.png"></button>  
            `
    
    
           // localStorage.setItem('taskItem',taskListContent);
            task.innerHTML=taskListContent
           // var taski=localStorage.getItem('taskItem').value;
            taskItems.append(task)
    

}
