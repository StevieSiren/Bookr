// Selecting the tab titles
const showsTitle = document.querySelector('#myshows-title'),
      discoverTitle = document.querySelector('#discover-title'),
      testBtn = document.querySelector('#test-btn'),
      content = document.querySelector('.listener-dash--right_content');

// Content for each tab




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


const openContent = (contentSection, element) => {
    
    var dasboardContent = document.querySelectorAll('.fan-dashboard--content'),
        title = document.querySelector('#fan-dashboard--title');
    
    // Set all content tabs to no display
    dasboardContent.forEach((content) => {
        content.style.display = 'none';
    });

    // Get the current element and display it
    document.getElementById(contentSection).style.display = 'grid';
    title.innerHTML = contentSection;

}

// IF DESCRIPTION IS TOO LONG, ADD A READ MORE TAG
const checkDescriptionLength = () => {
    const descriptions = document.querySelectorAll('.card-artists--description'); 
        //   html = '<a href="/artists/<%= artist._id %>">More</a>';

    descriptions.forEach((description) => {
        var descriptionHTML = description.innerHTML;
        var descriptionArray = descriptionHTML.split(' ');
        
        if(descriptionArray.length > 22) {
            newDesArray = descriptionArray.slice(0, 23);
            var newHTML = `${newDesArray.join(" ")}...`;
            description.innerHTML = newHTML;
        }
    });
}


(function() {
    // get the default open section and click it
    document.getElementById('fan-dashboard--defaultopen').click();
    optionsList();
    checkDescriptionLength();
})();
