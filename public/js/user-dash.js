const defaultActive = document.querySelector('#user-dash--defaultactive');

const allMenuItems = document.querySelectorAll('.user-dash--menu_item'),
      unfollowBtn = document.querySelector('#savedartist-unfollow--btn');


// Toggle menu item class
const toggleMenuItems = (e) => {
    e.preventDefault();
    var menuItems = document.querySelectorAll('.user-dash--menu_item');
    var activeItem = document.querySelector('.user-dash--main_menuactive');

    if(activeItem) {
        activeItem.classList.toggle('user-dash--main_menuactive');
    }
    console.log('I was clicked');
    e.currentTarget.classList.add('user-dash--main_menuactive');
}

allMenuItems.forEach((item) => {
    item.addEventListener('click', toggleMenuItems);
});



// Toggle the content being shown

const toggleDashContent = (contentSection, element) => {
    const allContent = document.querySelectorAll('.user-dash--main_content');

    allContent.forEach((content) => {
        content.style.display = 'none';
    });

    document.getElementById(contentSection).style.display = 'grid';
    
    
}



// Functions to run when calling the script
(function() {
    // defaultHidden.forEach((item) => {
    //     item.style.display = 'none';
    // });

    document.getElementById('user-dash--defaultactive').click();
    // fadeBids();
})();