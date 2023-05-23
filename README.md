# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshots/Screenshot%202023-05-23%20at%2010.15.00%20AM.png)
![](./screenshots/Screenshot%202023-05-23%20at%2010.16.10%20AM.png)
![](./screenshots/Screenshot%202023-05-23%20at%2010.16.38%20AM.png)

### Links

- Solution URL: [Solution URL](https://github.com/Rataash99/Bookmark_Landing_page)
- Live Site URL: [live site URL here](https://tourmaline-crepe-4ba583.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Bootstrap 5.0
- Mobile-first workflow

### What I learned

It's been so long since I've used bootstrap so this project helped me brush up those long forgotten concepts. and Yes we do learn something new with each project even if it's little.

code snippets, see below:

```html
          <div class="d-flex gap-3">
            <button class="px-3 sec-1-btn-1 btn-own rounded-1">
              Get it on Chrome
            </button>
            <button
              class="px-3 sec-1-btn-2 btn-own bg-white text-dark rounded-1"
            >
              Get it on Firefox
            </button>
          </div>
```
```css
#error{
    display: none;
    font-size: 0.8rem;
    border-end-start-radius: 5px;
    border-end-end-radius: 5px;
    background-color: hsl(0, 94%, 66%);
    color: white;
    padding: 3px;
    padding-left: 0.9rem;
}
```
```js
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
```

### Continued development

As I find Tailwind CSS more close to vanila CSS so I would be making projects using tailwind CSS and also I am planning to make furthur projects using REACT. hopefully next Project will be of REACT and tailwind. (^_^)>

### Useful resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - If you are planning to make projects using bootstrap than the documnetation will really going to be helping you alot do check it out.
- [fontAwesome](https://fontawesome.com) - Whenever I want to add icons to my website this is my goto place, fontawesome provides good control over icons they have predefined classes for changing color, size, etc. of your icons. must check out.

## Author

- Frontend Mentor - [@Rataash99](https://www.frontendmentor.io/profile/Rataash99)
- Showwcase - [@rataash99](https://www.showwcase.com/rataash99)

## Acknowledgments

I would like to present my gratitude to frontend Mentor community for providing us with such good projects, they are really helping build future of web developers and I appreciate the community for helping us out with every problem.