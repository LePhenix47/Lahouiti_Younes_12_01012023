# [P12] SportSee, build an analytics dashboard with React by Younes LAHOUITI

## 0. Project folder structure and miscellaneous

Here's the current folders structure for the application
```
P12/
|
|– sport-see/
|   |– ...
|
|– P9-front-end-dashboard/
|   |– ...
```

Naming convention rules for this project:

*CSS*:
<ul>
  <li>
      For variable names: kebab-case
  </li>
</ul>

*JS*:
 <ul>
  <li>
      For variable and function names: camelCase
  </li>
  <li>
      For classes: PascalCase
  </li>
  <li>
      For contextualized variables: SNAKE_CASE
  </li>
</ul>

# 1. Front-end

## 1.1 Front-end stack:

<ul>
<li>HTML</li>
<li>SASS</li>
<li>TypeScript</li>
<li>React</li>
<li>Next.js</li>
</ul>

<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>



## 1.2 Libraries used:

 <ul>
  <li>Mocks Service Worker </li>
  <li>Recharts</li>
  </ul>


<a href="https://mswjs.io" target="_blank" rel="noreferrer">
<img src="./public/svg/msw-logo.svg" width="36" height="36"/>
</a>
<a href="https://recharts.org" target="_blank" rel="noreferrer"><img src="https://www.wappalyzer.com/images/icons/Recharts.svg" width="46" height="46" alt="Recharts" /></a>

## 1.2 Front-end installation guide:
The project uses Node packages and uses `npm`, so the installation of Node.js in your IDE is required

> [Install Node.js](https://nodejs.org/en/)

Once Node.js has been successfully added to your IDE, you'll need to:
<ol>
<li>Fork the Front-end repository</li>
<li>Clone it locally with with <code>git clone</code></li>
</ol>

Afterwards you'll need to install all the project dependencies with `npm install`



## 1.3 Launching the project

For the Front-end, you will need to compile the Next.js app by using the script: 

`npm run dev`
<hr/>


<br/>
<br/>
<br/>

# 2. Back-end

## 2.1  Back-end installation guide:

Just like for the Front-end, you will need to do the same steps

To view a more detailed installation guide, you can go on the 
[repository of the Back-end](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) of the project


<ol>
<li>Fork the Back-end repository</li>
<li>Clone it locally with with <code>git clone</code></li>
</ol>

<br/>

Provided Node.js is already installed, you'll just need to run the command `npm install` to install all the necessary node packages


## 2.2 Launching the server

In order to launch the Back-end server, you'll need to run nodemon with this command:

`npm run start`



## 2.3 Route endpoints
Here are all the endpoints for the API using `localhost:4200`

It currently has only one route → `user`

Ex: `localhost:4200/user/12/performance`

⚠*The port of the Back-end must be changed to 4200 in order for the app to work properly*⚠



| HTTP Verb | Endpoints                      | Body of the request                                                                                                                                                                                                                  | Description of the info received                                                                                                                                                                                 |
| --------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET       | /user/:userId                  | {"data": {"id":[number],"userInfos":{"firstName":[string],"lastName":[string],"age":[number]},"todayScore":[number],"keyData":{"calorieCount":[number],"proteinCount":[number],"carbohydrateCount":[number],"lipidCount":[number]}}} | Retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.). |
| GET       | /user/:userId/activity         | {"data":{"userId":[number],"sessions":[{"day":[string],"kilogram":[number],"calories":[number]}, ...]}}                                                                                                                              | Retrieves a user's activity day by day with kilograms and calories.                                                                                                                                              |
| GET       | /user/:userId/average-sessions | {"data":{"userId":12,"sessions":[{"day":1,"sessionLength":30}, ...]}}                                                                                                                                                                | Retrieves the average sessions of a user per day. The week starts on Monday.                                                                                                                                     |
| GET       | /user/:userId/performance      | { "data": { "userId": 12, "kind": { "1": "cardio", "2": "energy", "3": "endurance", "4": "strength", "5": "speed", "6": "intensity" },"data": [{"value": [number],"kind": [number]},...]}}                                           | Retrieves a user's performance (energy, endurance, etc.)                                                                                                                                                         |
