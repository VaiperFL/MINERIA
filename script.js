document.addEventListener('DOMContentLoaded', function() {
    const botonAsistencia = document.getElementById('boton-asistencia');
    const cuadroChat = document.getElementById('cuadro-chat');
    const formularioChat = document.getElementById('formulario-chat');
    const preguntaInput = document.getElementById('pregunta');

    botonAsistencia.addEventListener('click', () => {
        cuadroChat.style.display = 'block';
    });

    formularioChat.addEventListener('submit', (event) => {
        event.preventDefault();
        const pregunta = preguntaInput.value.trim();
        if (pregunta !== '') {
            alert('Tu pregunta ha sido enviada: Espera a un asesor: ' + pregunta);
            preguntaInput.value = '';
        }
    });

    // 1. Ocultar el cuadro de chat al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!cuadroChat.contains(event.target) && event.target !== botonAsistencia) {
            cuadroChat.style.display = 'none';
        }
    });

    // 2. Mostrar un mensaje cuando el formulario de chat está vacío
    formularioChat.addEventListener('submit', function(event) {
        const pregunta = preguntaInput.value.trim();
        if (pregunta === '') {
            alert('Por favor, escribe tu pregunta antes de enviar.');
            return;
        }
    });

    // 3. Cambiar el color del botón de asistencia al pasar el cursor sobre él
    botonAsistencia.addEventListener('mouseover', function() {
        botonAsistencia.style.backgroundColor = '#0056b3';
    });

    // 4. Cambiar el color del botón de asistencia cuando el cursor sale de él
    botonAsistencia.addEventListener('mouseout', function() {
        botonAsistencia.style.backgroundColor = '#0d63be';
    });

    // 5. Ocultar el cuadro de chat al enviar el formulario
    formularioChat.addEventListener('submit', function() {
        cuadroChat.style.display = 'none';
    });

    // 6. Ajustar el tamaño del cuadro de chat al cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            cuadroChat.style.width = '80%';
        } else {
            cuadroChat.style.width = '300px';
        }
    });

    // 7. Funcionalidad del chat en línea
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const message = messageInput.value.trim();
        if (message !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            messageInput.value = '';
        }
    });
});
