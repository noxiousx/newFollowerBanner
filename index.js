const container = document.getElementById('container');

// Función para mostrar el nombre del nuevo seguidor
function showNewFollower(name) {
    const followerElement = document.createElement('div');
    followerElement.textContent = `¡Nuevo seguidor: ${name}!`;
    container.appendChild(followerElement);

    // Remover el elemento después de un tiempo
    setTimeout(() => {
        container.removeChild(followerElement);
    }, 5000); // 5 segundos
}

// Conectar con Streamlabs OBS y escuchar eventos
Streamlabs.createWidget().then(widget => {
    widget.on('follow', event => {
        const followerName = event.message[0].name;
        showNewFollower(followerName);
    });
});
