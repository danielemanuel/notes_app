### Notes keeper

##### Getting started

```
- clone the repo
- cd into directory
- npm install
- npm start
```
##### To run the tests:
```
- npm test
```
### App functionality

- the app is build using create-react-app
- functionality of the app involves being able to create a note, list the notes, remove a note and display the note content into a modal.After modal is closed, the list of notes are available
- user cannot add a note if both, the content and title are empty; if one of the fields is filled in the note is saved
- I used react-router4 for handling navigation between the pages
- react Skylight implemented for displaying the note content into a modal
- data persists on the UI, data is stored in firebase database
- CSS for styling the app

##### Home page

  ![home_page](/images/homepage.png)

##### Notes page

  ![notes_page](/images/notespage.png)

##### Note content is displayed in a modal

  ![modal](/images/modal.png)

##### Test coverage

![tests](/images/tests.png)

##### Future implementations:

- add a user authentication system, the notes can be seen by all users but only a registered user can add and delete a note
- user can update the note
- import the Font Awesome module to make the UI more interesting
- implement more animations of components with CSSTRANSITIONGROUP package
- notes , add note form , updateform; all of these components will have their own route, when the user adds a note will be automatically redirected to the list of notes page
- for creating the form I will import the Redux Form, an awesome package that makes your work much easier and handling errors is very easy 
- last: a very very very great looking interface ;)
