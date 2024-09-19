const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', function() {
    body.classList.toggle('night-mode');
    const icon = toggleButton.querySelector('i');

    if (body.classList.contains('night-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

