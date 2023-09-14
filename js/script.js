document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('menu');
    var header = document.querySelector('header');
    var topButton = document.querySelector('.top');
    var scrollTimeout;

    menu.addEventListener('click', function () {
        menu.classList.toggle('fa-times');
        header.classList.toggle('toggle');
    });

    window.addEventListener('scroll', function () {
        clearTimeout(scrollTimeout);
        menu.classList.remove('fa-times');
        header.classList.remove('toggle');
        scrollTimeout = setTimeout(function () {
            topButton.style.display = window.scrollY > 0 ? 'block' : 'none';
        }, 200);
    });

    // Smooth scrolling
    var scrollLinks = document.querySelectorAll('a[href*="#"]');
    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var target = document.getElementById(targetId);
            if (target) {
                var targetOffset = target.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.getElementById('portfolio-form').addEventListener('submit', function (e) {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var project = document.getElementById('project').value;
        var message = document.getElementById('message').value;
        var valid = true;

        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('projectError').textContent = '';
        document.getElementById('messageError').textContent = '';

        if (name.trim() === '') {
            document.getElementById('nameError').textContent = 'Please enter your name.';
            valid = false;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '' || !emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            valid = false;
        }

        if (project.trim() === '') {
            document.getElementById('projectError').textContent = 'Please enter the project name.';
            valid = false;
        }

        if (message.trim() === '') {
            document.getElementById('messageError').textContent = 'Please enter a message.';
            valid = false;
        }

        if (!valid) {
            e.preventDefault(); 
        } else {
            document.getElementById('portfolio-form').reset();
        }
    })
});
