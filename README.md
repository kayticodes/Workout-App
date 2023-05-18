# Workout-App
This is a full-stack web application (SPA) that tracks workout routines entered by the user.

## Technologies
- HTML
- CSS
- JavaScript
- MongoDB
- Express.js
- React
- Node.js

## Gif Walkthrough 
### Front-end
The React app includes the following 3 pages:
- Home Page
- Edit Workout Page
- Create Workout Page

Various React components are used to generate the table and global navigation features. When editing an entry, the boxes are pre-populated with the existing data. Upon successfully creating or editing an entry, the app will show an alert to the user with a confirmation message before automatically taking the user back to the Home Page.
[Front end walk through](FrontEnd.gif) 
<p>
<image src = FrontEnd.gif title = "Front end walk through" width = 450 height = 450><br>
</p>

CRUD operation is supported by a REST API by implementing the following 4 endpoints:

- Create using POST/workouts
- Read using GET/workouts
- Update using PUT/workouts/:id
- Delete using DELETE/workouts/:id

[Back end walk through](Backend.gif) 
<p>
<image src = Backend.gif title = "Back end walk through" width = 450 height = 450><br>
</p>
