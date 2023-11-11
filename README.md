# My Portfolio Website

[Link to website](https://jm3development.vercel.app)

## Introduction

Hi there and welcome to my portfolio webpage repository. This space is designed to showcase my skills, projects, and experiences. Whether you're a potential employer, collaborator, or just someone interested in what I do, I appreciate your visit.

## About me

I am jm3 (short version of Jose Manuel Montano Mengual), full-stack web developer and wine technologist, who through a friend, discovered programming and became enamored with it, leading me to switch companies to focus more on software development. Currently, I'm pursuing a Higher Technician degree to gain official recognition and expand my knowledge through a more traditional path.

In addition, I'm actively leading freelance projects, combining my expertise in wine technology with coding to create innovative digital solutions. My passion lies in pushing boundaries and making a meaningful impact in both realms.

## About this webpage

### Next.js + React

This webpage is entirely built with React and the Next.js App Router. In it I implemented the new React Server Components, although it is not the main focus of the webpage, due to it's high interactivity in the client side, which made me have to use a lot of client components. But in some of my other yet in development projects I dive more deep into React Server Components and get the most out of it.

### react-i18next + next-i18n-router

This page is completely translated to three languages, English, German and Spanish. The SEO metadata is also adapted to the three locales making it completely SEO compliant in each language and landing a 100 Lighthouse SEO score.

#### How it works?

The next-i18n-router middleware take the request and detect the user's preferred language using the accept-language header, and then will redirect them to the path of their prefered language. If the language is not supported they will be redirected to the english version of the webpage. Then with the params of the URL I generate the webpage content depending on the language.

In the language selector in the right side of the screen or in the bottom of the side bar in mobile devices, the user can change his language preference by selecting a language. This will set the value of the "NEXT_LOCALE" to the selected language. This cookie is then used in the middleware to override the automatich locale detection.

The pages are SSG so the performance is amazing and as you can see, although I am loading quite a bunch of js because of the 3D animations, the page runs smoothly without any performance issues even while changing the language settings.

### ThreeJS + React Three Fiber

For my portfolio website I wanted to do something more special so I decided to dive a little bit into 3D rendering and do something more spicy. I used ThreeJs and React Three Fiber in order to render the 3D graphics. I would like to give a big shot out to [JavaScript-Mastery](https://www.youtube.com/@javascriptmastery) because the page is inspired by one of his 3D proyects.

### Framer Motion

For the animation part I decided to also use something different from which I tend to use, which usually tends to be native Css and JavaScript to animate my projects, and I ended up using Framer Motion for this proyect.

### Emailjs

I use emailjs library to send the contact emails from the client side.

## Contact information

This was all the most important facts about this website, in order to see which other technologies I am using I invite you to check the package.json.

If you are interested in knowing more about me you can contact me through the webpage or in the following links.

[Linkedin](https://www.linkedin.com/in/josemanuelmontanomengual)
[Email](jm3develop@gmail.com)
