let header = document.getElementsByTagName('header')[0];
let hamburg = document.getElementsByClassName('hamburg')[0];
let headerLogo = document.getElementsByClassName('header-logo')[0];
let headerIco = document.getElementsByClassName('header-ico')[0];
let headerUl = document.getElementById('header-ul');
let input = document.getElementsByTagName('input')[0];
let error = document.getElementById('error');
let button = document.getElementsByClassName('btn-email')[0];
let errorLogo = document.getElementsByClassName('input-error')[0];

let arr = [
    {
        heading : "Bookmark in one click",
        content : 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        heading : "Intelligent search",
        content : 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
        heading : "Share your bookmarks",
        content : "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
]
let ul = document.getElementsByClassName('ul-change')[0];
let h1 = document.getElementsByClassName('h1-change')[0];
let p = document.getElementsByClassName('p-change')[0];
let zero = document.getElementsByClassName('zero')[0];
let one = document.getElementsByClassName('one')[0];
let two = document.getElementsByClassName('two')[0];

const changeContent = (e) => {
    if(e.target.classList.contains('zero')){
        h1.innerHTML = arr[0].heading;
        p.innerHTML = arr[0].content;
        zero.classList.add('bbottom');
        one.classList.remove('bbottom');
        two.classList.remove('bbottom');
    }
    else if(e.target.classList.contains('one')){
        h1.innerHTML = arr[1].heading;
        p.innerHTML = arr[1].content;
        zero.classList.remove('bbottom');
        one.classList.add('bbottom');
        two.classList.remove('bbottom');
    }
    else if(e.target.classList.contains('two')){
        h1.innerHTML = arr[2].heading;
        p.innerHTML = arr[2].content;
        zero.classList.remove('bbottom');
        one.classList.remove('bbottom');
        two.classList.add('bbottom');
    }
}

let checkInput = () => {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!emailRegex.test(input.value)){
        error.innerText = "Whoops, make sure it's an email";
        input.classList.add('inputBorder')
        errorLogo.style.display = 'block';
        error.style.display = 'block';
        errorLogo.style.display = 'block';
    }
    else{
        errorLogo.style.display = 'none';
        error.style.display = 'none';
        input.classList.remove('inputBorder');
        errorLogo.style.display = 'none';
        input.value = "";
    }
}
let toggleNav = () => {
    header.classList.toggle('toggleNav');
    if(header.classList.contains('toggleNav')){
        hamburg.src = './images/icon-close.svg';
        headerIco.style.display = 'flex';
        headerUl.style.display = 'flex';
        headerLogo.firstElementChild.firstElementChild.style.fill = 'white';
        document.getElementsByTagName('circle')[0].style.fill = 'white';
        headerLogo.lastElementChild.lastElementChild.lastElementChild.style.fill = 'hsl(229, 31%, 21%)';
        console.log(headerLogo.lastElementChild.lastElementChild.lastElementChild);
    }
    else {
        hamburg.src = './images/icon-hamburger.svg'; 
        headerIco.style.display = 'none';
        headerUl.style.display = 'none';
        headerLogo.firstElementChild.firstElementChild.style.fill = '#242A45';
        document.getElementsByTagName('circle')[0].style.fill = '#5267DF';
        headerLogo.lastElementChild.lastElementChild.lastElementChild.style.fill = '#FFF';
        // console.log(headerLogo.lastElementChild.lastElementChild.lastElementChild);
    }
}

hamburg.addEventListener('click', toggleNav);
ul.addEventListener('click', changeContent);
button.addEventListener('click', checkInput);
