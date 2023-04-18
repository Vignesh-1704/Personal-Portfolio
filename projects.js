var html_var = document.getElementById("html");
var java_var =  document.getElementById("java");
var all_var =  document.getElementById("all");

let html_work = document.querySelectorAll('.html');
let java_work = document.querySelectorAll('.java');

console.log(html_work);
console.log(java_work);

html_var.addEventListener('click', () =>{
    console.log(html_work)
    for(let i= 0; i<html_work.length;i++)
    {
        html_work[i].style.display = 'grid';
    }
    for(let i=0 ; i<java_work.length;i++)
    {
        java_work[i].style.display = 'none';
    }
})


java_var.addEventListener('click', () =>{
    console.log(html_work)
    for(let i= 0; i<html_work.length;i++)
    {
        html_work[i].style.display = 'none';
    }
    for(let i=0 ; i<java_work.length;i++)
    {
        java_work[i].style.display = 'grid';
    }
})


all_var.addEventListener('click', () =>{
    console.log(html_work)
    for(let i= 0; i<html_work.length;i++)
    {
        html_work[i].style.display = 'grid';
    }
    for(let i=0 ; i<java_work.length;i++)
    {
        java_work[i].style.display = 'grid';
    }
})



// Search Function

function search()
{
    var inputVal = document.getElementById("search").value;
    inputVal = inputVal.toLowerCase();
    let list = document.getElementsByClassName('head-check');
    let lista = document.getElementsByClassName('work');
    console.log(list);
     for (let i = 0; i < list.length; i++) { 
        if (!list[i].innerHTML.toLowerCase().includes(inputVal)) {
            lista[i].style.display="none";
        }
        else {
            lista[i].style.display= 'grid';                 
        }
    }
}
