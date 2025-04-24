import { linkWrapper } from "./link-wrapper.js";

export function updateLinkList(myLinks, listWrapper) {
    
    myLinks.forEach(link => {
        const liWrapper = document.createElement('li');
        const card = linkWrapper(link.author, link.title, link.URL);
        liWrapper.appendChild(card);
        listWrapper.appendChild(liWrapper);
    });

}