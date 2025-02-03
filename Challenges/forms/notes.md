# Manipulating forms

## Handling forms with Javascript

Data entered into a form by users is sent via network to the web server, and the later respond to the browser as a new web page.

The action and method attributes allow to define the request server resources when the form is submitted.

## Choice elements

In case of multiple choices in a form the change event is triggered once the user changes their choices.

## Forms as DOM elements

A form element correspond to a DOM element. It has an elements property that pulls all form inputs fields together. This property is used to access a field via its name.


There are three possible ways to validate a fomr:
- as input is being entered;
- after input is entered;
- when the user submits the form.
