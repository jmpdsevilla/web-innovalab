// Configuración de páginas para títulos y navegación activa
const pageConfig = {
    'index.html': {
        title: 'Inicio || Innovalab || Laboratorio Técnico',
        activeNav: 'nav-inicio'
    },
    'acerca-de.html': {
        title: 'Acerca de || Innovalab || Laboratorio Técnico',
        activeNav: 'nav-acerca'
    },
    'servicios.html': {
        title: 'Servicios || Innovalab || Laboratorio Técnico',
        activeNav: 'nav-servicios'
    },
    'trucoteca.html': {
        title: 'Trucoteca || Innovalab || Laboratorio Técnico',
        activeNav: 'nav-trucoteca'
    },
    'contacto.html': {
        title: 'Contacto || Innovalab || Laboratorio Técnico',
        activeNav: 'nav-contacto'
    }
};

// Función para obtener el nombre del archivo actual
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page;
}

// Función para cargar componentes
async function loadComponent(url, containerId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
        return true;
    } catch (error) {
        console.error(`Error loading ${url}:`, error);
        return false;
    }
}

// Función para configurar la página actual
function setupCurrentPage() {
    const currentPage = getCurrentPage();
    const config = pageConfig[currentPage];
    
    if (config) {
        // Actualizar título
        const titleElement = document.getElementById('page-title');
        if (titleElement) {
            titleElement.textContent = config.title;
        }
        
        // Marcar navegación activa
        const activeNavElement = document.querySelector(`.${config.activeNav}`);
        if (activeNavElement) {
            activeNavElement.classList.add('current');
        }
    }
}

// Función principal para inicializar componentes
async function initializeComponents() {
    // Cargar header
    const headerLoaded = await loadComponent('includes/header.html', 'header-container');
    
    if (headerLoaded) {
        // Configurar página después de cargar el header
        setupCurrentPage();
    }
    
    // Cargar footer
    await loadComponent('includes/footer.html', 'footer-container');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeComponents();
}); 