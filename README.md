# Trello - MERN stack kanba style Work management web application

![Banner](./screenshots/light-trello.png)

Trello is a web-based, kanban-style, list-making application.

Users can create task boards with different columns and move the tasks between them. Typically columns include task statuses such as To Do, In Progress, Done. The tool can be used for personal and business purposes including real estate management, software project management, school bulletin boards, lesson planning, accounting, web design, gaming, and law office case management.

## Demo

<!-- [Deployment link](https://trello-web-sage-psi.vercel.app/) (Please wait a few seconds for the data to load correctly) -->

[video demo](youtube.com)

[back-end github repo](https://github.com/tgoldenphoenix/trello-clone-api)

## Application Requirements 👀

<details>

<summary>Open to read</summary>

<br />

👉 Users can create new column and add cards to those column

👉 Users can change columns' order by drag and drop

👉 Users can drag and drop cards in the same column

👉 Users can also drag and drop card to other columns in the same board

👍 App needs Dark Mode and user can set light or dark mode based on computer preference.

</details>

## Technologies

### Main technologies

- **Front-end**: ReactJS, Material UI, Redux, [DND kit library](https://dndkit.com/)
- **Back-end**: RESTful API built with NodeJS (Express Framework)
- **Database**: MongoDB Atlas
- **Built tools**: Vite, ESLint, Yarn, Babel, Node Version Manager

### Detail technologies

- **Front-end**: React-toastify, Axios, cross-env, React-router-dom
- **Back-end**: cors, [Joi](https://www.npmjs.com/package/joi) schema description language

## What I gained from building this project 😎

<details> 

<summary>Open to read</summary>

<br />

🔵 I try to apply all my knowledge into this project and follow best practices for clean coding.

🔵 Manage sensitive environment variables such as API keys using [dotenv](https://www.npmjs.com/package/dotenv) & [cross-env](https://www.npmjs.com/package/cross-env). All sensitive data are stored in a single file `.env` which must NOT be pushed to Github.

🔵 Project file structure follow best practice which makes it easy to read, maintain and keeping each source codes file modular and reusable.

- Front-end ReactJS: pages, components, redux, apis, assets, customLibraries
- Back-end Express: routes, middlewares, controllers, services, models, config, utils, etc...

🔵 Professional large frontend application planning:

- From gather business requirements, frontend architecture, thinking about the data flow through the entire application
- and then Break the application into categories of features.
- Choosing suitable Technology Stack for high quality frontend development.

🔵 Managing Remote Server state in application with React Query, there's no Redux in this application. Use Redux to manage state

🔵 Write highly reusable React Functional Component, with custom styling by leveraging Material UI `styled-component`

Examples: Reusable Modal Component, Confirm Component, and Table Component with custom styling, and Compount Pattern, Select, Client Side Sort, Filter, Pagination...

🔵 This application is built with `Performance and Accessibility` in mind.

</details>