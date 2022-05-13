/**
 Udacity landing page project
**/

// Create fourth (4th) section element
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

// Call function to create 4th section element
create4thSection();

// Add active class
const addClass = (condition, element) => {
  // Add class if condition is true
  if (condition) {
    $(element).addClass('your-active-class');
    $(element).css('background', 'rgba(0, 11, 24, 0.781)');
  } else {
    // Remove class if condition is false
    removeClass(element);
  }
};

// Remove active class
const removeClass = (element) => {
  $(element).removeClass('your-active-class');

  $(element).css(
    'background',
    'linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)'
  );
};

// Declarations

// Get ul element by Id
const unorderedList = $('#navbar__list')[0];

// Get all section elements
const allSections = $('section');

// Create list items and append to ul element
const createDynamicNavigation = () => {
  // Initialize list variable
  let list = '';
  // Iterate over allSections and assign unique is<section>
  for (section of allSections) {
    // Append li and a element to list variable
    list +=
      '<li><a class="menu__link" href="#' +
      section.id +
      '">' +
      section.dataset.nav +
      '</a></li>';
  }

  // Append list <li> to unorderedList <ul>
  $(unorderedList).append(list);
};

// Apply active class when mouse is around 120 viewport of each section
const triggerActiveClass = () => {
  // Iterate over section
  for (section of allSections) {
    // Set viewport range
    isInRange = (element) =>
      Math.floor(element.getBoundingClientRect().top) < 130 &&
      Math.floor(element.getBoundingClientRect().top) >= -130;

    // Set sections as active if condition is true
    addClass(isInRange(section), section);
  }
};

// Call function to create navigation
createDynamicNavigation();

/*
  Listen on window and when on scroll, 
  trigger function to set active class on section element
*/

$(window).on('scroll', () => triggerActiveClass());

// Select all links
const anchors = $('.navbar__menu a');

// Iterate over selected element
for (anchor of anchors) {
  // Listen for click event on anchor
  $(anchor).on('click', function smoothScroll(e) {
    // Prevent refresh after selection
    e.preventDefault();
    const href = this.getAttribute('href');

    // Smooth scroll animation
    if (href)
      return scroll({
        top: document.querySelector(href).offsetTop,
        behavior: 'smooth'
      });
  });
}
