export function formWrapper(arrayList) {
    const formElem = document.createElement('form');

    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.name = 'author';
    authorInput.id = 'author';
    authorInput.placeholder = 'Author name';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleInput.id = 'title';
    titleInput.placeholder = 'Page title';

    const urlInput = document.createElement('input');
    urlInput.type = 'text';
    urlInput.name = 'link';
    urlInput.id = 'link';
    urlInput.placeholder = 'example.com';

    const addLinkBtn = document.createElement('button');
    addLinkBtn.type = 'submit';
    addLinkBtn.classList.add('addLink-btn');

    addLinkBtn.addEventListener('submit', (ev) => {
        const author = ev.target.elements.author.value;
        const title = ev.target.elements.title.value;
        const URL = ev.target.elements.link.value;

        const objNewLink = {};
        objNewLink.author = author;
        objNewLink.title = title;
        objNewLink.URL = URL;

        arrayList.push(objNewLink);
    })

    formElem.append(authorInput, titleInput, urlInput, addLinkBtn);

    return formElem;
}