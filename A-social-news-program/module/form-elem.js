export function formWrapper() {
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

    formElem.addEventListener('submit', (event) => {

        const author = formElem.elements.author.value;
        const title = formElem.elements.title.value;
        const url = formElem.elements.link.value;
    
        console.log(author, title, url);
        formElem.remove();
        event.preventDefault();
    });

    formElem.append(authorInput, titleInput, urlInput, addLinkBtn);

    return formElem;
}