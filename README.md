# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges are a great way to enhance your coding skills by building real-world projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The challenge was to create a responsive landing page for Easybank, ensuring that users can view the site optimally on various screen sizes and interact with interactive elements.

### Screenshot

![](./screenshot.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS for styling
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript for interactivity

<!--
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
-->

### Key Takeaways

During this project, I learned several valuable lessons, including:

- How to structure a responsive layout using CSS and SASS.
- Implementing a mobile-first approach to ensure cross-device compatibility.
- Enhancing my JavaScript skills for interactive features.

##Mixins

I learned how to use Sass mixins to make my styles more modular and reusable. Here's an example of a media query mixin:

```scss
// Breakpoints
@media (min-width: 64em) {
  // Your styles for medium screens here
}

// 640px, 1024px, 1400px
$breakpoints-up: (
  "medium": "40em",
  "large": "64em",
  "xlarge": "87.5em",
);

@mixin breakpoint-up($size) {
  @media (min-width: map-get($breakpoints-up, $size)) {
    @content;
  }
}
```

This allows me to easily apply styles based on different screen sizes without repeating code.

##Global Styles

I discovered the power of global styles to maintain consistency across my project. Here's an example of a global flexbox utility class:

```scss
.flex {
  display: flex;
  &-jc-sb {
    justify-content: space-between;
  }
}
```

This class can be applied to any element to make it a flex container with space-between justification.

These are just a couple of examples of what I learned during this project. Using mixins and global styles has improved the maintainability of my code and made it easier to create responsive designs.

### Continued development

- Adding a feedback form to improve user engagement and communication.
- Exploring the use of modern front-end libraries and frameworks, such as React or Vue.js, to build more dynamic and interactive components.
- Optimizing performance to ensure faster loading times and smoother user experiences.
- Implementing accessibility features to make the website more inclusive and user-friendly.
- Integrating with a back-end server using technologies like Node.js to enable more advanced functionalities.
- Conducting thorough testing and debugging to catch any potential issues and ensure the project's stability.
- Continuously improving the design and user interface based on user feedback and industry trends.

### Useful resources

- [How to Make a Landing Page using HTML, SCSS, and JavaScript](https://www.youtube.com/watch?v=aoQ6S1a32j8) - A comprehensive video course on creating a landing page with HTML, SCSS, and JavaScript. This course was incredibly helpful in deepening my understanding of web development and served as a valuable reference throughout this project. 

## Author

- Frontend Mentor - [@Valik3201](https://www.frontendmentor.io/profile/Valik3201)
