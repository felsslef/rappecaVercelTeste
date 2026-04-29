let currentSlide = 0;
const carousel = document.querySelector('[data-carousel]');
const slides = carousel.querySelectorAll('.slide');
const descriptions = [
    'Descrição da imagem 1.',
    'Descrição da imagem 2.',
    'Descrição da imagem 3.'
];

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    carousel.querySelector('.carousel-caption').textContent = descriptions[index];
}

carousel.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

carousel.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

showSlide(currentSlide);

// Ver Mais functionality
const verMaisBtn = document.getElementById('ver-mais');
const eventsColumn = document.querySelector('.events-column');

verMaisBtn.addEventListener('click', () => {
    // Create new event rows
    const newEvent1 = document.createElement('article');
    newEvent1.className = 'event-row';
    newEvent1.innerHTML = `
        <a href="project2.html">
            <img src="../img/carrossel/carrossel2.jpg" alt="Oficina de Compostagem">
        </a>
        <div class="event-row-content">
            <h3 class="event-row-title">Oficina de Compostagem</h3>
            <p class="event-row-description">Aprenda práticas sustentáveis para o dia a dia neste workshop interativo.</p>
        </div>
    `;

    const newEvent2 = document.createElement('article');
    newEvent2.className = 'event-row';
    newEvent2.innerHTML = `
        <a href="project3.html">
            <img src="../img/carrossel/carrossel3.jpg" alt="Mutirão de Limpeza">
        </a>
        <div class="event-row-content">
            <h3 class="event-row-title">Mutirão de Limpeza</h3>
            <p class="event-row-description">Participe de um mutirão para revitalizar espaços urbanos e promover a sustentabilidade.</p>
        </div>
    `;

    // Append to events column
    eventsColumn.appendChild(newEvent1);
    eventsColumn.appendChild(newEvent2);

    // Hide the button after loading
    verMaisBtn.style.display = 'none';
});

// set footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// admin request form handling (placeholder)
const adminForm = document.getElementById('admin-request-form');
const adminMsg = document.getElementById('admin-msg');
if (adminForm) {
    adminForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('admin-email').value.trim();
        if (!email) {
            adminMsg.textContent = 'Por favor insira um e-mail válido.';
            return;
        }
        // Placeholder: aqui você pode integrar com backend para processar a solicitação
        adminMsg.textContent = 'Solicitação enviada. Verificaremos e entraremos em contato.';
        adminForm.reset();
    });
}

function criarEvento({ titulo, descricao, imagem }) {
    const template = document.getElementById('evento-template');
    const container = document.getElementById('eventos-container');

    const clone = template.content.cloneNode(true);

    clone.querySelector('img').src = imagem;
    clone.querySelector('.evento-titulo').textContent = titulo;
    clone.querySelector('.evento-descricao').textContent = descricao;

    container.appendChild(clone);
}

criarEvento({
    titulo: "Feira Agroecológica",
    descricao: "Venha conhecer produtores locais e alimentos sustentáveis.",
    imagem: "../img/carrossel/carrossel1.jpg"
});

criarEvento({
    titulo: "Oficina de Compostagem",
    descricao: "Aprenda práticas sustentáveis para o dia a dia.",
    imagem: "../img/carrossel/carrossel2.jpg"
});
