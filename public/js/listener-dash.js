// CONTROL THE ACTIVE CLASS OF THE OPTIONS //

const optionsList = () => {
    const options = document.querySelectorAll('.listener-dash--left_options li'),
          active = document.querySelector('.listener-dash--active');

    options.forEach((option) => {
        option.addEventListener('click', toggleActiveClass);
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

optionsList();