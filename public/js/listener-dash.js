// Selecting the tab titles
const showsTitle = document.querySelector('#myshows-title'),
      discoverTitle = document.querySelector('#discover-title'),
      testBtn = document.querySelector('#test-btn'),
      content = document.querySelector('.listener-dash--right_content');

// Content for each tab
const myArtistsContent = document.querySelector('#my-artists--content'),
      discoverContent = document.querySelector('#discover--content');



// CONTROL THE ACTIVE CLASS OF THE TAB OPTIONS //

const optionsList = () => {
    const options = document.querySelectorAll('.listener-dash--left_options li');

    options.forEach((option) => {
        option.addEventListener('click', toggleActiveClass);
        // option.addEventListener('click', toggleContent);
    })
}

const toggleActiveClass = (e) => {
    e.preventDefault();
    const active = document.querySelector('.listener-dash--active');
    if(active){
      active.classList.remove('listener-dash--active');
    }
    e.currentTarget.classList.add('listener-dash--active');
  }



// const toggleContent = (e) => {
//     e.preventDefault();
//     const activeContent = document.querySelector('.fandash-active--content');
//     if(activeContent) {
//         activeContent.classList.remove('fandash-active--content');
//         activeContent.style.display = 'none';
//     }
//     e.currentTarget.classList.add('fandash-active--content');
//     console.log(e.currentTarget.classList);
// }

optionsList();
