document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('#form');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        console.log('Form Submitted')
    })
})