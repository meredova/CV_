$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.user').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    // smooth scrolling

    $('a[href*="#"]').on('click', function(e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );
    });

    //validation


    $('form').submit(function(event) {
        event.preventDefault(); 
        
        var formData = {
        name: $('input[name="name"]').val(),
        email: $('input[name="email"]').val(),
        project: $('input[name="project"]').val(),
        message: $('textarea[name="message"]').val()
        };
        
        $.ajax({
        type: 'POST',
        url: 'send_email.php', 
        data: formData,
        dataType: 'json',
        success: function(response) {
            if (response.success) {

            alert('Form submitted successfully!');
            $('form')[0].reset(); 
            } else {

            alert('Error sending email: ' + response.message);
            }
        },
        error: function() {
            alert('Error occurred during AJAX request.');
        }
        });
    });
     
});