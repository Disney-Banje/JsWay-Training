export function formWrapper(onSubmitCallback) { // Callback function as the parameter....
    const formElem = document.createElement('form');

    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.name = 'author';
    authorInput.id = 'author';
    authorInput.placeholder = 'Author name';
    authorInput.required = true;

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleInput.id = 'title';
    titleInput.placeholder = 'Page title';
    titleInput.required = true;

    const urlInput = document.createElement('input');
    urlInput.type = 'text';
    urlInput.name = 'link';
    urlInput.id = 'link';
    urlInput.placeholder = 'example.com';
    urlInput.required = true;

    const addLinkBtn = document.createElement('button');
    addLinkBtn.type = 'submit';
    addLinkBtn.classList.add('addLink-btn');
    addLinkBtn.textContent = 'Add link';

    formElem.addEventListener('submit', (event) => { // Creating an event handler that will listen for the submit event on the addLinkBtn...
        let URL;

        const author = formElem.elements.author.value;
        const title = formElem.elements.title.value;
        const link = formElem.elements.link.value;

        if (!(link.startsWith('https://') || link.startsWith('http://'))) { // conditional check for the link format...
            URL = `http://${link}`;
        } else {
            URL = link;
        }
    
        onSubmitCallback({ author, title, URL }); // Creating a callback function so that these variables can be accessed outside the closure they are declared in...
        event.preventDefault();
        formElem.remove();

    });

    formElem.append(authorInput, titleInput, urlInput, addLinkBtn);

    return formElem;
}