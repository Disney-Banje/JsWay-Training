export function linkWrapper(author, title, URL) {
    const linkContainer = document.createElement('article');
    linkContainer.classList.add('link-container');

    const linkDetails = document.createElement('div');
    linkDetails.classList.add('link-details');
    const linkTitle = document.createElement('h1');
    linkTitle.classList.add('link-title');
    linkTitle.textContent = title;
    const linkAddress = document.createElement('a');
    linkAddress.classList.add('link-address');
    linkAddress.href = URL;
    linkAddress.textContent = URL;
    linkDetails.append(linkTitle, linkAddress);

    const authorDetails = document.createElement('p');
    authorDetails.classList.add('author-details');
    authorDetails.textContent = `Submited by ${author}`;

    linkContainer.append(linkDetails, authorDetails);
    
    return linkContainer;
}