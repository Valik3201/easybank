<div align="center"> 
<br>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Valik3201/easybank/blob/main/images/logo-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/Valik3201/easybank/blob/main/images/logo.svg">
  <img alt="easybank logo" src="https://github.com/Valik3201/easybank/blob/main/images/logo.svg" width="400">
</picture>
  <h1>
    Frontend Mentor - Easybank Landing Page Solution
  </h1>
</div>

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN).

[Frontend Mentor](https://github.com/frontendmentorio) challenges are a great way to enhance coding skills by building real-world projects.

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

![Desktop Preview](/design/desktop-preview.jpg)

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

#### Mixins

I learned how to use Sass mixins to make my styles more modular and reusable. Here's an example of a media query mixin:

```scss
// Breakpoints
@media (min-width: 64em) {
  // Styles for medium screens here
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

#### Class Abbreviations

This code demonstrates how to use abbreviations for CSS classes to reduce repetitive styling declarations. In this example, `.flex-jc-sb` stands for "flex container with `justify-content: space-between;`."

```scss
.flex {
  display: flex;

  // Abbreviation for "justify-content: space-between;"
  &-jc-sb {
    justify-content: space-between;
  }
}
```

#### Property Abbreviations

This code showcases the use of property abbreviations in class names to simplify the declaration of padding styles. For example, `.container--px` stands for "container with horizontal padding."

```scss
.container {
  max-width: 66.5rem;
  margin: 0 auto;

  // Abbreviations for padding properties
  &--pall {
    padding-top: 2.25rem;
    padding-right: 1.5rem;
    padding-bottom: 2.25rem;
    padding-left: 1.5rem;
  }

  &--px {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  &--pt {
    padding-top: 2.25rem;
  }
}
```

These are just a couple of examples of what I learned during this project. Using mixins and abbreviations has improved the maintainability of my code and made it easier to create responsive designs.

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

- GitHub - [Valik3201](https://github.com/Valik3201)
- Frontend Mentor - [Valik3201](https://www.frontendmentor.io/profile/Valik3201)
