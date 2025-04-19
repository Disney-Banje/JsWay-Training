const formElement = document.querySelector('form');

formElement.addEventListener('submit', event => {
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const email = event.target.elements.emailAddress.value;

    console.log(`Username: ${username}, Password: ${password}, email: ${email}`);

    if (event.target.elements.confirmation.checked) {
        console.log("You asked for email confirmation");
    } else {
        console.log("You dind't asked for email confirmation");
    }

    switch (event.target.elements.subscription.value) {
        case "newspromo":
            console.log("You are subscribed to newsletters and promotions");
            break;
        case "news":
            console.log("You are subscribed to newsletters only");
            break;
        case "no":
            console.log("You are not subscribed to anything");
            break;
        default:
            console.error("Unknown subscription code");
    }

    switch (event.target.elements.nationality.value) {
        case "US":
            console.log("Hello! You are a US citizen");
            break;
        case "FR":
            console.log("Bonjour! You are a French citizen");
            break;
        case "ES":
            console.log("Hola! You are a Spanish citizen");
            break;
        default:
            console.log("Your nationality is unknown");
    }

    event.preventDefault();

})