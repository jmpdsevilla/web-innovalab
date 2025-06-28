/**
 * Configuración de Iconos Feather para Innovalab
 * Archivo centralizado para mantener consistencia en toda la web
 */

// Configuración de iconos por categoría
const FeatherConfig = {
    // Navegación
    navigation: {
        home: 'home',
        about: 'info',
        services: 'tool',
        portfolio: 'briefcase',
        blog: 'book',
        contact: 'phone',
        pqr: 'message-circle',
        tracking: 'search',
        trucoteca: 'smartphone'
    },
    
    // Acciones
    actions: {
        send: 'send',
        search: 'search',
        edit: 'edit-3',
        delete: 'trash-2',
        save: 'save',
        cancel: 'x',
        add: 'plus',
        download: 'download',
        upload: 'upload',
        print: 'printer'
    },
    
    // Estados y alertas
    status: {
        success: 'check-circle',
        error: 'alert-circle',
        warning: 'alert-triangle',
        info: 'info',
        loading: 'loader'
    },
    
    // Datos y formularios
    data: {
        user: 'user',
        email: 'mail',
        phone: 'phone',
        document: 'file',
        calendar: 'calendar',
        clock: 'clock',
        location: 'map-pin'
    },
    
    // PQR específicos
    pqr: {
        petition: 'help-circle',
        complaint: 'frown',
        claim: 'alert-triangle',
        details: 'file-text',
        response: 'message-square',
        timeline: 'clock'
    },
    
    // Admin
    admin: {
        dashboard: 'grid',
        analytics: 'bar-chart-2',
        settings: 'settings',
        users: 'users',
        reports: 'file-text',
        notifications: 'bell'
    }
};

// Función para inicializar iconos Feather
function initFeatherIcons() {
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Función para crear icono dinámicamente
function createFeatherIcon(iconName, className = '') {
    return `<i data-feather="${iconName}" class="${className}"></i>`;
}

// Función para actualizar iconos de navegación
function updateNavigationIcons() {
    const navLinks = document.querySelectorAll('nav a, .nav-menu a, .nav-simple a');
    
    navLinks.forEach(link => {
        const text = link.textContent.trim().toLowerCase();
        let iconName = '';
        
        if (text.includes('inicio') || text.includes('home')) iconName = FeatherConfig.navigation.home;
        else if (text.includes('acerca') || text.includes('about')) iconName = FeatherConfig.navigation.about;
        else if (text.includes('servicios') || text.includes('services')) iconName = FeatherConfig.navigation.services;
        else if (text.includes('contacto') || text.includes('contact')) iconName = FeatherConfig.navigation.contact;
        else if (text.includes('pqr')) iconName = FeatherConfig.navigation.pqr;
        else if (text.includes('seguimiento') || text.includes('tracking')) iconName = FeatherConfig.navigation.tracking;
        else if (text.includes('trucoteca')) iconName = FeatherConfig.navigation.trucoteca;
        
        if (iconName && !link.querySelector('[data-feather]')) {
            link.innerHTML = `<i data-feather="${iconName}"></i> ${link.textContent}`;
        }
    });
}

// Auto-inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Esperar un poco para asegurar que Feather esté cargado
    setTimeout(() => {
        initFeatherIcons();
    }, 100);
});

// Exportar para uso global
window.FeatherConfig = FeatherConfig;
window.initFeatherIcons = initFeatherIcons;
window.createFeatherIcon = createFeatherIcon;
window.updateNavigationIcons = updateNavigationIcons; 