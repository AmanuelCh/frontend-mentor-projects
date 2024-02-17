# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly


### Links

- [Solution URL](https://www.frontendmentor.io/solutions/manage-landing-page-with-react-and-tailwindcss-8Y1zLf3-My)
- [Live Site URL](https://manage-landing-page-frontend-me.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/)
- `Tailwind CSS`
- `Mobile-first` workflow
- `Nuka` Carousel
- `useMedia` Hook

### What I learned

I dived deep in Tailwind CSS and used a custom React hook to determine the user's screen size and display the testimonials slide according to their screen size. Since I had issues with Swiper React components, I used Nuka Carousel.

The `useMedia` hook returns a boolean based on the condition. A typical usage of the hook:
```JSX
const isWide = useMedia({ minWidth: '976px' });
```

## Author

- Website - [Amanuel Chaka](https://github.com/AmanuelCh)
- Frontend Mentor - [@AmanuelCh](https://www.frontendmentor.io/profile/AmanuelCh)
