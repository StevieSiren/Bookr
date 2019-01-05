// const mongoose = require('mongoose');

// const Artist = require('../../models/Artist'),
//       Fan = require('../../models/Fan');

// const saveBtn = document.querySelector('#profile-artist--savebtn'),
const modalCloseBtn = document.querySelectorAll('.profile-artist--modal_closebtn'),
      modalBody = document.querySelector('.profile-artist--modal'),
      bookBtn = document.querySelector('#profile-artist--bookbtn'),
      bidSubmitBtn = document.querySelector('#profile-artist--bidsubmitbtn'),
      contentTabs = document.querySelectorAll('.profile-artist--content_tab'),
      saveBtn = document.querySelector('#profile-artist--savebtn');

const bidModal = document.querySelector('#profile-artist--modalbid');

saveBtn.addEventListener('click', () => {
    saveBtn.value = 'Saved';
});
// saveBtn.addEventListener('click', saveArtist);


// TOGGLE ACTIVE CLASS OF THE TABS
const toggleActiveClass = (e) => {
    e.preventDefault();
    const active = document.querySelector('.profile-artist--top_tabsactive');
    if(active){
      active.classList.remove('profile-artist--top_tabsactive');
    }
    e.currentTarget.classList.add('profile-artist--top_tabsactive');
};

contentTabs.forEach((tab) => {
    tab.addEventListener('click', toggleActiveClass);
});



// TOGGLE ACTIVE CONTENT BASED ON ACTIVE TAB
const openContent = (contentSection, element) => {
    
    var profileContent = document.querySelectorAll('.profile-artist--bottom_content');
    
    // Set all content tabs to no display
    profileContent.forEach((content) => {
        content.style.display = 'none';
    });

    // Get the current element and display it
    document.getElementById(contentSection).style.display = 'flex';

}



bookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalBody.style.display = 'block';
});

modalCloseBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        modalBody.style.display = 'none';
    });
});



(function() {
    document.getElementById('content-default--open').click();
})();





