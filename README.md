# [P12] SportSee, build an analytics dashboard with React by Younes LAHOUITI

## 1. Front-end

### 1.1 Project stack:

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



### 1.2 Libraries used:

 <ul>
  <li>Mocks Service Worker </li>
  <li>Recharts</li>
  </ul>


<a href="https://mswjs.io" target="_blank" rel="noreferrer">
<svg viewBox="0 0 122 122" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="36" width="36"><title>msw-logo</title><g id="msw-logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:none;"><g id="Group" transform="translate(-44.297427, -47.574576)" stroke-width="21"><g transform="translate(107.297427, 108.074576) rotate(-42.000000) translate(-107.297427, -108.074576) translate(36.297427, 26.574576)"><path d="M75.1396666,46.668325 C78.6024919,46.668325 81.7374919,48.0719124 84.0067856,50.341206 C86.2760793,52.6104997 87.6796666,55.7454997 87.6796666,59.208325 C87.6796666,62.3036716 86.534852,65.2896505 84.4655356,67.5916279 L84.4655356,67.5916279 L48.2320648,107.898963 C47.5120934,108.699884 46.5356444,109.133155 45.5389581,109.186204 C44.5422718,109.239252 43.5253482,108.912077 42.7244276,108.192106 L42.7244276,108.192106 L6.19781435,67.5916279 C3.88282918,65.0163603 2.8308369,61.7465599 3.00140781,58.5418302 C3.17197873,55.3371004 4.56511284,52.1974412 7.14038046,49.882456 C9.44235787,47.8131396 12.4283368,46.668325 15.5236833,46.668325 L15.5236833,46.668325 Z" id="back" stroke="#7A1818" transform="translate(45.331675, 81.500000) rotate(90.000000) translate(-45.331675, -81.500000) " data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:#fb7f7f;"></path><path d="M145.86082,46.668325 C146.937775,46.668325 147.912775,47.1048474 148.618536,47.8106086 C149.324297,48.5163698 149.76082,49.4913698 149.76082,50.568325 C149.76082,51.5309926 149.404777,52.4596464 148.76121,53.1755724 L148.76121,53.1755724 L99.5687149,107.898963 C98.8487435,108.699884 97.8722944,109.133155 96.8756081,109.186204 C95.8789218,109.239252 94.8619983,108.912077 94.0610777,108.192106 L94.0610777,108.192106 L44.5754404,53.1755724 C43.8554689,52.3746518 43.5282943,51.3577282 43.5813427,50.3610419 C43.634391,49.3643556 44.0676624,48.3879066 44.868583,47.6679352 C45.584509,47.0243679 46.5131627,46.668325 47.4758303,46.668325 L47.4758303,46.668325 Z" id="front" stroke="#FF6A33" transform="translate(96.668325, 81.500000) rotate(-90.000000) translate(-96.668325, -81.500000) " data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:#ff6e30;"></path></g></g></g></svg> 
</a>
<a href="https://recharts.org" target="_blank" rel="noreferrer"><img src="https://www.wappalyzer.com/images/icons/Recharts.svg" width="36" height="36" alt="Recharts" /></a>

## 2. Front-end installation guide:
The project uses Node packages and uses `npm`, so the installation of Node.js in your IDE is required

> [Install Node.js](https://nodejs.org/en/)

Once Node.js has been successfully added to your IDE, you can execute the command `npm install` to install all the 
packages necessary for the Front-end of the app

### Front-end scripts

## Back-end

Here are all the endpoints for the API using `localhost:4200`

⚠*The port of the Back-end must be changed to 4200 in order for the app to work properly*⚠

| HTTP Verb | Endpoints                      | Body of the request                                                                                                                                                                                                                  | Description of the info received                                                                                                                                                                                 |
| --------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET       | /user/:userId                  | {"data": {"id":[number],"userInfos":{"firstName":[string],"lastName":[string],"age":[number]},"todayScore":[number],"keyData":{"calorieCount":[number],"proteinCount":[number],"carbohydrateCount":[number],"lipidCount":[number]}}} | Retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.). |
| GET       | /user/:userId/activity         | {"data":{"userId":[number],"sessions":[{"day":[string],"kilogram":[number],"calories":[number]}, ...]}}                                                                                                                              | Retrieves a user's activity day by day with kilograms and calories.                                                                                                                                              |
| GET       | /user/:userId/average-sessions | {"data":{"userId":12,"sessions":[{"day":1,"sessionLength":30}, ...]}}                                                                                                                                                                | Retrieves the average sessions of a user per day. The week starts on Monday.                                                                                                                                     |
| GET       | /user/:userId/performance      | { "data": { "userId": 12, "kind": { "1": "cardio", "2": "energy", "3": "endurance", "4": "strength", "5": "speed", "6": "intensity" },"data": [{"value": [number],"kind": [number]},...]}}                                           | Retrieves a user's performance (energy, endurance, etc.)                                                                                                                                                         |
