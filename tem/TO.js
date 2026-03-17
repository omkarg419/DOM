const todoBtn=document.getElementById('todoBtn')
const todoMsg=document.getElementById('todoMsg')
const todoList=document.getElementById('todoList')

todoBtn.addEventListener('click',function(){
    const msg=todoMsg.value
    console.log(msg);

    const li=document.createElement('li')
    li.innerText=msg
    li.addEventListener('click',function(){
        li.remove()
    })

    todoList.appendChild(li)
    todoMsg.value=''
    
    
})
