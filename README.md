# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

This is my solution to a Frontend Mentor coding challenge.  
The project required me to create a fully responsive webpage with interactive elements.  
I used semantic HTML and CSS for the structure and styling, and added JavaScript to handle interactivity such as the mobile menu toggle.  


### The challenge

The challenge

The goal of this challenge was to build a responsive newsletter sign-up form with validation and a success message, matching the given design.
Users should be able to:

1.Submit their email address in the form input.
2.Receive real-time form validation —
  - Show an error if the email is invalid or empty.
   - Show a custom message (“Valid email required”) when needed.
3.See a success message after submitting with a valid email.
4.Navigate between states (form view and success message) without reloading the page.
5.Experience a responsive design — the layout adapts for mobile, tablet, and desktop viewports.
6.See hover and focus states for all interactive elements (buttons, input fields).
7.Enjoy a clean, accessible design with semantic HTML and appropriate ARIA attributes for better screen reader support.

### Screenshot
     

**Desktop View**  
![Desktop screenshot](Screenshot%20-desktop.png)

**Mobile View**  
![Mobile screenshot](Screenshot%20-mobile.png)


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/product-preview-card-using-flexbox-EWlQ50fjuh]
- Live Site URL: [https://sk-surendar-03.github.io/newsletter-subscription/]

## My process
   

1. I started by reviewing the challenge requirements and the provided design files to understand the layout and components.  
2. I built the HTML structure with semantic tags (`header`, `main`, `section`, `footer`) to keep the code organized and accessible.  
3. I styled the layout using a  **Flexbox** depending on the section.  
4. I followed a **mobile-first workflow**, starting with the smallest screen size and then adding media queries for tablets and desktops.  
5. I applied the colors, typography, and spacing based on the design style guide.  
6. I added responsiveness with media queries to ensure the design adapts to different screen sizes.  
7. Finally, I deployed the project using **GitHub Pages** so it can be accessed online.  


### Built with


- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript (for interactivity)


### What I learned


While working on this project, I learned how to:

- Structure a webpage using semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`).  
- Use **CSS Flexbox** and **Grid** effectively to create responsive layouts.  
- Apply a **mobile-first workflow** with media queries.  
- Work with CSS variables for consistent colors and spacing.  

Here’s a small code snippet I’m proud of:

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
}

This challenge helped me practice:

- Building a mobile navigation menu with JavaScript.  
- Toggling classes with `classList.toggle()` for interactivity.  
- Writing clean, reusable functions in JavaScript.  

Here’s an example:

```js
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

```
### Continued development

For upcoming projects, I’d like to:

- Get more comfortable with **JavaScript DOM manipulation**.  
- Practice building **interactive components** like sliders, modals, and dropdown menus.  
- Improve my **code structure** and keep JavaScript more modular.  
- Explore **CSS animations and transitions** to make designs more engaging.  

### Useful resources

- [MDN Web Docs - CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) - This helped me understand how to align and distribute space in a flexible way.  
- [MDN Web Docs - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) - A great guide for learning the basics of grid layouts.  
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-complete-guide-to-flexbox/) - Super useful reference for quickly checking flexbox properties.  
- [Frontend Mentor - Community](https://www.frontendmentor.io/community) - Reading solutions from others gave me ideas on improving my own code.  



## Author

- Website - [surendar](https://sk-surendar-03.github.io/newsletter-subscription/)
- Frontend Mentor - [sk-surendar-03](https://www.frontendmentor.io/profile/sk-surendar-03)

## Acknowledgments
 Thanks to the [Frontend Mentor community](https://www.frontendmentor.io/community) for providing feedback and inspiration.  

