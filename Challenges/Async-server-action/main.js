const pageSource = 'https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt';

const languageList = document.getElementById('languageList');

fetch(pageSource)
    .then(response => response.text())
    .then(languages => {
        const languagesArray = languages.split(';');
        languagesArray.forEach(language => {
            const li = document.createElement('li');
            li.textContent = language;
            languageList.appendChild(li);
        });
    })
    .catch(err => {
        const li = document.createElement('li');
        li.textContent = 'Error loading languages: ' + err.message;
        languageList.appendChild(li);
    });






const paintingsSource = "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json";

const table = document.getElementById('paintings');

fetch(paintingsSource)
  .then(response => response.json())
  .then(paintings => {
    paintings.forEach(painting => {
        const tableRow = document.createElement('tr');
        const paintingName = document.createElement('td');
        const paintingYear = document.createElement('td');
        const paintingArtist = document.createElement('td');

        paintingName.textContent = painting.name;
        paintingYear.textContent = painting.year;
        paintingArtist.textContent = painting.artist;

        tableRow.append(paintingName, paintingYear, paintingArtist);
        table.appendChild(tableRow);
    })
  })
  .catch(err => {
    const tableDisplay = document.querySelector('.table-display');
    tableDisplay.innerHTML = '';
    tableDisplay.innerHTML = `Error loanding paintings: ${err.message}`;
  });





// Information about a GitHub user

const lookupBtn = document.querySelector('.lookup-btn');
const userInput = document.querySelector('#user-name');

const gitHubUrl = '';


// Create user card
function createUserCard(avatar, name, link) {

  const article = document.createElement('article');
  article.classList.add('user-card');

  const userAvatar = document.createElement('img');
  userAvatar.src = avatar;
  userAvatar.alt = name;
  const userName = document.createElement('p');
  userName.textContent = name;
  const userLink = document.createElement('a');
  userLink.href = link;
  userLink.textContent = link;

  article.append(userAvatar, userName, userLink);

  return article;
  
}