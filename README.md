<br/>
<div align="center">
  <img src="public/svgs/favicon.svg" alt="Logo" width="100" height="100">

  <h3 align="center">EKRUT form app</h3>

  <p align="center">
    Form app utilizing an EKRUT internal API
  </p>
</div>
<br/>

<br/>

### Framework, library, language or API is used in this app

- [Vite.js - Framework / Bootstrap](https://vitejs.dev/)

- [React.js - Renderer library](https://reactjs.org/)

- EKRUT APIs

- [SCSS - CSS styling superset](https://sass-lang.com/)

<br/>

## Starting points

- Spin up development server start <a href="#development">here</a>

- A few notes regarding the live demo app <a href="#notes">here</a>

<br/>

### Access the live demo following <a href="http://ekrut-form.vercel.app/">this</a> link

<div id="development"></div>
<br/>

## Spin up development server

In this section, we're going to spin our development server locally. Following this step

- The first thing we need to do is, clone the repository

    ```sh
    git clone https://github.com/yusrmuttaqien/EKRUT-form-app.git
    ```

- Go into our newly created directory by git

   ```sh
   cd EKRUT-form-app
   ```

- Install all required packages listed on `packages.json`

   ```sh
   npm i
   ```

- After all of those texts are done spitting, as long there is no red-colored text, we're good to go, spin the development server

   ```sh
   npm run dev
   ```

- Access the app in the browser at `http://localhost:3000/`

<div id="notes"></div>
<br/>

## A few notes regarding the live demo app

There are a few notes about live demo app and payload based on PDF example

- Since EKRUT APIs is served over HTTP instead HTTPS, and live demo is hosted on top HTTPS protocol, in order to access those APIs, "Insecure content" options inside site permissions must be switched to "Allowed".

- Based on PDF screenshot there is field for start_date and end_date both in experience and education form. But at current code, field for start_date and end_date is stripped out, because both field cause server error.

<br/>

## Credits

### <a href="https://github.com/yusrmuttaqien">Yusril Muttaqien</a> - 2022 - MIT License