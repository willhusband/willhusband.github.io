function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

        document.getElementById('contact-btn').addEventListener('click', function() {
            document.querySelector('footer').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
