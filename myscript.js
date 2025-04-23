function filterResources() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resourceCards = document.querySelectorAll('.resource-card');

    resourceCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchInput) || description.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function uploadResource() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        const resourcesDiv = document.getElementById('resources');

        const resourceCard = document.createElement('div');
        resourceCard.classList.add('resource-card');

        const mediaElement = document.createElement(file.type.startsWith('image') ? 'img' : 'video');
        mediaElement.src = event.target.result;
        mediaElement.classList.add('resource-media');
        if (file.type.startsWith('video')) {
            mediaElement.controls = true;
        }

        resourceCard.appendChild(mediaElement);
        resourcesDiv.appendChild(resourceCard);
    };

    reader.readAsDataURL(file);
}