// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
// const mainNav = document.getElementById('mainNav');
// const divElems = document.getElementsByTagName('div') // have to pay attention to plural
// const cardElems = document.getElementsByClassName("card") // and camelCasing
// console.log(mainNav)
// console.log(divElems)
// console.log(cardElems)

//  Newer: querySelector, querySelectorAll
// modern standard, simpler
// #id selector
// .class selector
// element selector
const queryMainNav = document.querySelector("#mainNav")
// console.log("queryMainNav:", queryMainNav)
const queryDivElems = document.querySelector("div") // querySelector finds the first instance
// console.log("queryDivElems:", queryDivElems)
const queryCardElems = document.querySelectorAll(".card")
// console.log("queryCardElems:", queryCardElems)

//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('header');
console.log("header:", header);
const logoTitle = document.querySelector('#logoTitle');
console.log("logoTitle:", logoTitle);
// const firstCard = document.querySelector(".card") // this is good cus it grabs the 1st instance
const firstCard = document.querySelector(".card:nth-of-type(1)") ;
// ^ nth-of-type(number) is css to grab a specific element within the .card class. more specific targeting ^ 
console.log('firstCard:', firstCard);

// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img");
console.log('imgageFirstCard:', imageFirstCard);
const titleFirstCard = firstCard.querySelector("h2");
console.log(`titleFirstCard:`, titleFirstCard);
const subtitleFirstCard = firstCard.querySelector("h3");
console.log('subtitleFirstCard:', subtitleFirstCard);
const textFirstCard = firstCard.querySelector("p");
console.log('textFirstCard:', textFirstCard);

// C- traversing with dot notation
// const link1FirstCard = firstCard.querySelector(".card-link:nth-of-type(1)")
const link1FirstCard = textFirstCard.nextElementSibling; // this grabs the a tag, the next direct child of the p tag
console.log('link1FirstCard:', link1FirstCard)
// const link2FirstCard = firstCard.querySelector(".card-link:nth-of-type(2)")
const link2FirstCard = link1FirstCard.nextElementSibling;
console.log('link2FirstCard:', link2FirstCard)


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav a")
console.log('links:', links)

// B- Loop over the links and console.log their text content
// forEach is a higher order function, a function that takes another function as an argument
// links.forEach(function(link) {
//     console.log('link.textContent:', link.textContent)
// })

links.forEach((link) => console.log('link.textContent:', link.textContent));

// C- Turn the collection of links into a real array
const linksArr = Array.from(links)
console.log('linksArr:', linksArr)
// same as above
// const newArr = []
// for (let i = 0; i < links.length; i++) {
//     newArr.push(links[i])
// }
// return newArr;

// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeLink = linksArr.find(link => link.textContent === 'Home')
console.log('homeLink:', homeLink)
// take each link from linksArr using the find array method. 
// if textContent is same as 'Home', return to homeLink.

// find returns first element which meets the criteria
// filter returns all elements which pass the condition
// map makes some update to all elements of the array
// reduce reduces the array to a singular value

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
logoTitle.textContent = 'Bloomtech Doggos'
titleFirstCard.textContent = 'I am Dog'
subtitleFirstCard.textContent = 'A story in three parts'
textFirstCard.textContent = 'Dogs are nice and dogs are kind'
link2FirstCard.textContent = 'Cat Ipsum'

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes
link1FirstCard.setAttribute("href", "https://pexels.com/search/dog") //does the same as below
link2FirstCard.href = "https://doggoipsum.com" // does the same as above
imageFirstCard.src = "https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg"
logoTitle.className = "logo heading banana"


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
// classList.add adds a class
// className (line 102, for example) rewrites all of them
// sky class was in the CSS but never added
// below adds and removes
header.classList.add("sky")
header.classList.remove("sky")
//  B- By manipulating inline styles on the element
header.style.fontSize = "2em";
// ^targeting the style property that already exists the DOM node
// setInterval(() => header.classList.toggle('sky'), 1000)
// ^ goofing around with toggling sky color

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
// add a new href to nav bar
const blogLink = document.createElement("a") // THIS HAS TO BE A DOM TAG NAME - a, href, div, span, etc
console.log('blogLink:',blogLink) 
blogLink.textContent = 'Blog'
blogLink.href = "#"
document.querySelector('nav').appendChild(blogLink);
blogLink.classList.add("menu-item")

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true)

document.querySelector('.card-group').appendChild(secondCard);

const data = {
    "contact": {
        "contact-heading": "contact",
        "address": "123 fake street, springfield, usa",
        "phone": "847-555-5555",
        "email": "email@email.com"
    }
}
// have to use bracket notation when there is a hyphen in the key, cannot use dot notation like normal object drilling
// data["contact"]["contact-heading"]

const contactHeading = document.querySelector(".contact-heading")
console.log('contactHeading:', contactHeading)
const address = document.querySelector(".address")
const phone = document.querySelector(".phone")
const email = document.querySelector(".email")

contactHeading.textContent = data["contact"]["contact-heading"]
address.textContent = data.contact.address
phone.textContent = data.contact.phone
email.textContent = data.contact.email

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
// header.remove()

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
