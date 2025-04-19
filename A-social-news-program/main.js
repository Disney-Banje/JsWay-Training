import { linkWrapper } from "./module/link-wrapper.js";
import { formWrapper } from "./module/form-elem.js";
// Initialize an empty array...
let linkList;

// UI elements to interact with...
const listWrapper = document.querySelector('.link-list');
const submitBtn = document.querySelector('.submit-btn');

// get the data..
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    linkList = data;

    linkList.forEach(link => {
        const liWrapper = document.createElement('li');
        const card = linkWrapper(link.author, link.title, link.URL);
        liWrapper.appendChild(card);
        listWrapper.appendChild(liWrapper);
    })
  })
  .catch(err => {
    console.error(err.message);
  });