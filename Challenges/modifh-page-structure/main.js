//Coding Time!

// Adding a paragraph
const addParaContainer = document.getElementById('add-para');

const para = document.createElement('p');
para.innerHTML = `Here is a more complete <a href="https://en.wikipedia.org/wiki/List_of_programming_languages">list</a> of languages`;

addParaContainer.appendChild(para);






// Newspaper list
const newspapers = [
    "https://www.nytimes.com",
    "https://www.washingtonpost.com",
    "http://www.economist.com"
];

const content = document.getElementById("content");
newspapers.forEach(newspaper => {
    const link = document.createElement('a');
    link.href = newspaper;
    link.textContent = newspaper;
    content.appendChild(link);
});






// Mini-dictionary

const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];


const miniDictionary = document.getElementById('dictionary');
const dl = document.createElement('dl');

words.forEach(word => {
    const dt = document.createElement('dt');
    dt.innerHTML = `<strong>${word.term}</strong>`;
    const dd = document.createElement('dd');
    dd.textContent = word.definition;

    dl.appendChild(dt);
    dl.appendChild(dd);
})

miniDictionary.appendChild(dl);



// Updating Colors...

// Uncomment the below code if you want to change the color


// const textColor = prompt('Please enter the color of the text:', ''); 
// const backgroundColor = prompt('Please enter the background color', '');

// const paragraphs = document.querySelectorAll('.paragraph');

// paragraphs.forEach(element => {
//     element.style.color = textColor;
//     element.style.backgroundColor = backgroundColor;
// });





// Information about an element
const info = getComputedStyle(document.getElementById('info'));
const infos = document.getElementById('infos');

infos.innerHTML = `
<ul>
<li>Height: ${info.height}</li>
<li>Width: ${info.width}</li>
</ul>
`;

