//selectors---

const addBtn=document.getElementById('add-list');
const searchMenu=document.getElementById('search-menu');
const filterList=document.getElementById('filter-list');
const ul=document.getElementById('list-items')

//lists---
let all; getToDos();
render('all');
function getToDos(){
    let all=[];
    if(localStorage.getItem('all')!=null){
        for (let i=0; i<all.length;i++)
        create(all[i])
    }
   
}

function saveToDos(todo){
    all.push(todo); 
    console.log(all)
    localStorage.setItem('all',JSON.stringify(all));
    render('all');
}

function removeToDos(todo){
}



//Functions---
                

function getUserInput(){
    const userInput=document.getElementById('user-input');
    create(userInput.value);
}

function render(tagValue){
    console.log(tagValue)
    if(tagValue=='all'){
        for (let i=0; i<all.length;i++)
        ul.appendChild(all[i]);
    }
    if(tagValue=='done'){
        for (let i=0; i<all.length;i++){
            ul.appendChild(all[i]);
            if(all[i].classList[1]!='completed')
            ul.removeChild(all[i]);
        }
    }
    if(tagValue=='left'){
        for (let i=0; i<all.length;i++){
            console.log('lll');
            ul.appendChild(all[i]);
            if(all[i].classList[1]=='completed')
            ul.removeChild(all[i]);
        }
    }
}



function create(taskname){
    
    //creating div---
    const item= document.createElement('div');
    item.classList.add('items');
    //creating and appending li---
    const newTask= document.createElement('li');
    newTask.classList.add('task-name');
    newTask.textContent=taskName;
    item.appendChild(newTask);
    //creating and appending done btn--
    const doneBtn= document.createElement('button');
    doneBtn.classList.add('done');
    doneBtn.innerHTML='<i class="fas fa-check"></i>';
    item.appendChild(doneBtn);
    //creating and appending trash btn--
    const trashBtn= document.createElement('button');
    trashBtn.classList.add('delete');
    trashBtn.innerHTML='<i class="fas fa-trash"></i>';
    item.appendChild(trashBtn);
    saveToDos(item);
    // render('all');

}
 function deleteComplete(e){
        const tag=e.target.classList[0]
        const list= e.target.parentElement;
        if(tag=='done'){
            list.classList.toggle("completed")
            render('all')
        }else if(tag=='delete'){
            list.classList.add("slide")
            list.addEventListener('transitionend',()=>{
                
                list.classList.add("remove")
                list.remove();
                console.log()
            })
            
        }
       
 }
 function filter(e){
    const filterBy= searchMenu.value;
    render(filterBy);
 }


//Event-Listners---

window.onload= function(){

    addBtn.addEventListener('click', getUserInput);
    ul.addEventListener('click',deleteComplete);
    filterList.addEventListener('click',filter);

}
