import './styles.css';
import './footer.js';
import { sampleNotes } from './sample-notes.js';

// Get elements
const notesListElement = document.querySelector('#notesList');

// Create note item
function createNoteItemElement({ id, title, body }) {
  const container = document.createElement('div');
  container.setAttribute('data-noteid', id);

  const titleElement = document.createElement('h3');
  titleElement.textContent = title;

  const bodyElement = document.createElement('p');
  bodyElement.innerText = body;

  container.append(titleElement, bodyElement);
  
  return container;
}

// Render all sample notes
sampleNotes.forEach((sampleNote) => {
  const element = createNoteItemElement(sampleNote);
  notesListElement.append(element);
});
