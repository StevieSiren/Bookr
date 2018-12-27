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
    // // get the default open section and click it
    // document.getElementById('fan-dashboard--defaultopen').click();
    // optionsList();
    checkDescriptionLength();
})();