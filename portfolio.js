// Name - typewriter effect 

let title = document.querySelector(".name");
let name = "Hi, I'm Vignesh Manikavasagam";

let index = 1;

const typewriter = () => {

    let new_title = name.slice(0,index);

    let nameSubstring = new_title.substring(8, 16);

    //Replaces the name substring with colored name substring
    new_title = new_title.replace(nameSubstring, "<span style='color:#ef3038'>" + nameSubstring + "</span>");
    
    title.innerHTML = new_title;

    if(index > name.length)
    {
        index = 1;
    }
    else
    {
        index ++;
    }

    setTimeout( () => {typewriter()} , 150);
}

typewriter();


// About page js

var aboutlinks = document.getElementsByClassName('tab-links');
var aboutContents = document.getElementsByClassName('tab-contents');

function openTab(tabname)
{
    for(aboutlink of aboutlinks)
    {
        aboutlink.classList.remove("active-link");
    }
    for(aboutContent of aboutContents)
    {
        aboutContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

// 

const scriptURL = 'https://script.google.com/macros/s/AKfycbzNYPnR7bcflDmRF0iXdnPY8zUmfB27aJQKJtUvgCZbVO98fUi0zk2LLD5EtoT0S5NT/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully !"
        setTimeout(function(){msg.innerHTML = ""},5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


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