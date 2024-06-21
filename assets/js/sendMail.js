document.getElementById('giftForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const loading = document.getElementById('loadingFormGift');
    loading.classList.remove("d-none");
    fetch('https://demo-send-mail-production.up.railway.app/api/v1/email-gift', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            age: age,
            email: email
        })
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                title: '¡Gracias por contactarte con nosotros!',
                text: 'El formulario se ha enviado correctamente. revisa tu correo electrónico, has recibido un obsequio de parte de CognitiVital',
                icon: 'success',
                confirmButtonText: "Cerrar",
                confirmButtonColor: '#167a63'
            });
             // Limpiar el formulario
             document.getElementById('giftForm').reset();
        } else {
            throw new Error('Error en la solicitud');
        }
        loading.classList.add("d-none");
    })
    .catch(error => {
        Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al enviar el formulario.',
            icon: 'error'
        });
        console.error('Error:', error);
        loading.classList.add("d-none");
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('nameContact').value;
    const age = document.getElementById('ageContact').value;
    const email = document.getElementById('emailContact').value;
    const subject = document.getElementById('subjectContact').value;
    const message = document.getElementById('messageContact').value;

    const loading = document.getElementById('loadingFormContact');
    loading.classList.remove("d-none");
    fetch('https://demo-send-mail-production.up.railway.app/api/v1/email-contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            age: age,
            email: email,
            subject: subject,
            message: message
        })
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                title: '¡Gracias por contactarte con nosotros!',
                text: 'El formulario se ha enviado correctamente. revisa tu correo electrónico, un integante de nuestro equipo revisará tú mensaje',
                icon: 'success',
                confirmButtonText: "Cerrar",
                confirmButtonColor: '#167a63'
            });
             // Limpiar el formulario
             document.getElementById('contactForm').reset();
        } else {
            throw new Error('Error en la solicitud');
        }
        loading.classList.add("d-none");
    })
    .catch(error => {
        Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al enviar el formulario.',
            icon: 'error'
        });
        console.error('Error:', error);
        loading.classList.add("d-none");
    });
});
