/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Start Create fourth (4th) section element
 *
 */

const create4thSection = () => {
  // Create <h2> element and populate with text
  const h2 = document.createElement('h2');
  const text = document.createTextNode('Section 4');
  h2.appendChild(text);

  // Create <p> element and populate with text
  const p1 = document.createElement('p');
  const text1 = document.createTextNode(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.'
  );
  p1.appendChild(text1);

  // Create <p> element and populate with text
  const p2 = document.createElement('p');
  const text2 = document.createTextNode(
    'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'
  );
  p2.appendChild(text2);

  // Create <div> element and populate with h2, p elements
  const div = document.createElement('div');
  div.classList.add('landing__container');
  div.appendChild(h2);
  div.appendChild(p1);
  div.appendChild(p2);

  // Create <section> element
  const section = document.createElement('section');
  section.setAttribute('id', 'section4');
  section.setAttribute('data-nav', 'Section 4');
  section.appendChild(div);

  // Select <main> element and populate with section element
  const main = document.querySelector('main');
  main.appendChild(section);
};

create4thSection();

/**
 * End Create fourth (4th) section element
 *
 */

/**
 * Define Global Variables
 *
 */
const navBox = document.getElementById('navbar__list');
const allSections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const nav = () => {
  let navigation = '';

  // iterate over allSections <section>
  for (section of allSections) {
    // define element attributes
    const id = section.id;
    const dataAttr = section.dataset.nav;

    // assign attributes to <li> element
    navigation += `<li><a class="menu__link" href="#${id}">${dataAttr}</a></li>`;
  }

  // append all <li> to navigation box <ul>
  navBox.innerHTML = navigation;
};

nav();

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
