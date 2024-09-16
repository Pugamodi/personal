document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para demostración
    
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    
    // Aquí podrías agregar código para enviar el formulario a un servidor
});