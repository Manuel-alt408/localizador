function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const formattedDateTime = now.toLocaleDateString('es-ES', options);
    document.getElementById('datetime').textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000); // Actualiza cada segundo

// Llama la función para mostrar la fecha y hora inmediatamente
updateDateTime();
