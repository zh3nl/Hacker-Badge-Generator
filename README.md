## Getting Started

First, run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack
Here is the Tech Stack used to create this project:
- Frontend: React, JavaScript, Bootstrap
- Backend (so far): node.js, App Script
- Other tools used (so far): Google Sheets

## Approach
To approach the challenge, I first created a registration form that contains individual inputs corresponding to data such as name, email, university, major, etc.
To store the data collected by the form, I utilized Google App Script as my REST API to send the form data to my Google Spreadsheet. 
Assuming that the API works, I would then create React components corresponding to the Badge Display and Profile pages of the website. 
- The Badge component displays the participants information and a QR code that links to the Profile component, which displays the participant's information.
- For the QR code generation, I can utilize the qrcode.react package. 
To handle routes between each webpage, I can use the react-router-dom package. 

## Current Issues
The form submits correctly but my spreadsheet does not receive the correct data from Google App Script. 

## Future Updates and Improvements
If I had more time, I would:
- Debug the issue associated with Google App Script
- Implement my Badge and Profile components
- Utilize a more organized database like MongoDB
- Include more styling such as animations
