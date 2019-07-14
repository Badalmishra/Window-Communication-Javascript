var childs = []
function deliverChild() {
    id = childs.length 

    var newWindow = window.open('./child.html',id);
    
    newWindow.name = id
    childs.push(newWindow)
    console.log(newWindow);
    display()
}

function display() {
    
    let list = document.getElementById('list')
    list.innerHTML =""
    childs.forEach((child,i) => {
        let status = child.closed?'Closed':'close'
        let button = document.createElement("button");
        button.onclick=kill
        button.id = i
        button.className = child.closed?'Closed':'Open'
        button.innerText=i+" "+status  
        list.append(button)
    });
}
window.addEventListener('message', function(event) {
    this.alert(event.data + " destructed")
    display()
});
function kill(){
    var index = event.target.id;
    if (!childs[index].closed) {
        console.log(childs[index].close());
    } else {
        alert("window already killed")
    }
}
