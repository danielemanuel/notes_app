### Notes keeper

Tasks:

Key features:
- Add a note
- List of notes
- View a note
A note has a title and main content field, both of which are optional.  If neither are filled in,
the note cannot be saved, but if one is filled in the note can be saved.

What we will be reviewing you on:
UI/UX requirements:
You have the freedom to design the UI and behaviours.
- Should be responsive, working on mobile, tablet and desktop.
- The UI should be intuitive
- When a note is clicked then I only see the selected notes content in a modal
- When I close a modal then I see the list of notes
- Please explain your UI/UX choices
- Please don’t use a CSS framework.
Technical requirements:
- Data should persist in some form. Local storage is great, don&#39;t need to store in a database.
- Like to see reliable and safe handling of data
- At FMP we love tests, use whatever testing you feel appropriate and be prepared to justify
your choices.
Nice to haves:
- The ability to select a note in the list and cause that note to open in a modal. Closing the
modal returns back to the list of notes.
- Auto save create and edits of notes

### Getting started

```
- clone the repo
- cd noteskeeper
- nmp install
- npm start
```
### App functionality

- the app is build using create-react-app
- functionality of the app involves being able to create a note, list the notes, remove a note and display the note content into a modal.After modal is closed, the list of notes are available
- I used react-router4 for handling navigation between the home page and notes page
- react Skylight implemented for displaying the note content into a modal
- data persists on the UI, data is stored in firebase database
- CSS for styling the app

##### Home page

  ![home_page](/images/homepage.png)

##### Notes page

  ![notes_page](/images/notespage.png)

##### Note content is displayed in a modal

  ![modal](/images/modal.png)
