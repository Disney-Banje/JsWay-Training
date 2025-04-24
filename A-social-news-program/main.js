import { updateLinkList } from "./module/update-list.js";
import { formWrapper } from "./module/form-elem.js";
// Initialize an empty array...
let linkList;

// UI elements to interact with...
const listWrapper = document.querySelector('.link-list');
const submitBtn = document.querySelector('.submit-btn');
const userAction = document.querySelector('.user-action');


// get the data..
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    linkList = data;

    updateLinkList(linkList, listWrapper);

    submitBtn.addEventListener('click', (ev) => {
      const form = formWrapper((data) => {
        linkList.unshift(data);
        listWrapper.innerHTML = '';
        userAction.textContent = `The link ${data.title} has been successfully added!`
        userAction.classList.toggle('success-message');

        setTimeout(() => {
          userAction.innerHTML = '';
          userAction.classList.toggle('success-message');
        }, 3500);

        updateLinkList(linkList, listWrapper);

      });

      userAction.appendChild(form);

    });

  })
  .catch(err => {
    console.error(err.message);
  });


