## Front-end

This project has been made with:

<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>

HTML, SASS, TypeScript

Libraries used:
-Mocks Service Worker
-React
-Recharts

React framework used:
-Next.js

Package manager used:
-npm

## Installation guide: WIP

Pre-requisites you must have Node.js installed in your IDE

## Back-end

Here are all the endpoints for the API using `localhost:4200`

⚠*The port of the Back-end must be changed to 4200 in order for the app to work properly*⚠

| HTTP Verb | Endpoints                      | Body of the request                                                                                                                                                                                                                  | Description of the info received                                                                                                                                                                                 |
| --------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET       | /user/:userId                  | {"data": {"id":[number],"userInfos":{"firstName":[string],"lastName":[string],"age":[number]},"todayScore":[number],"keyData":{"calorieCount":[number],"proteinCount":[number],"carbohydrateCount":[number],"lipidCount":[number]}}} | Retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.). |
| GET       | /user/:userId/activity         | {"data":{"userId":[number],"sessions":[{"day":[string],"kilogram":[number],"calories":[number]}, ...]}}                                                                                                                              | Retrieves a user's activity day by day with kilograms and calories.                                                                                                                                              |
| GET       | /user/:userId/average-sessions | {"data":{"userId":12,"sessions":[{"day":1,"sessionLength":30}, ...]}}                                                                                                                                                                | Retrieves the average sessions of a user per day. The week starts on Monday.                                                                                                                                     |
| GET       | /user/:userId/performance      | { "data": { "userId": 12, "kind": { "1": "cardio", "2": "energy", "3": "endurance", "4": "strength", "5": "speed", "6": "intensity" },"data": [{"value": [number],"kind": [number]},...]}}                                           | Retrieves a user's performance (energy, endurance, etc.)                                                                                                                                                         |
