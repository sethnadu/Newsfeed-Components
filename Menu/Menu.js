/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuButton = document.querySelector(".menu-button");
const header = document.querySelector(".header");

header.appendChild(createNav(menuItems));



function createNav(menuItems) {
  const menu = document.createElement("div");
  const list = document.createElement("ul");
  const item1 = document.createElement('li');
  const item2 = document.createElement('li');
  const item3 = document.createElement('li');
  const item4 = document.createElement('li');
  const item5 = document.createElement('li');
  const item6 = document.createElement('li');

  menu.appendChild(list);
  list.appendChild(item1);
  list.appendChild(item2);
  list.appendChild(item3);
  list.appendChild(item4);
  list.appendChild(item5);
  list.appendChild(item6);
  
  menu.classList.add('menu');
  

  item1.textContent = menuItems[0];
  item2.textContent = menuItems[1];
  item3.textContent = menuItems[2];
  item4.textContent = menuItems[3];
  item5.textContent = menuItems[4];
  item6.textContent = menuItems[5];

  console.log(item1);
  console.log(item2);
  console.log(item3);
  console.log(item4);
  console.log(item5);
  console.log(item6);

  

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu--open")
  });


  return menu;

}