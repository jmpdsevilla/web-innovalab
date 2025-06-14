# Estructura de Componentes - Innovalab

## Descripción
Se ha implementado una nueva estructura modular que separa el header y footer del contenido específico de cada página, eliminando la duplicación de código y facilitando el mantenimiento.

## Archivos de Componentes

### `includes/header.html`
- Contiene todo el `<head>` con metadatos, CSS y scripts
- Header completo con navegación y contacto
- Preloader y elementos comunes

### `includes/footer.html`
- Footer completo con enlaces y información
- Navegación móvil
- Popup de búsqueda
- Todos los scripts JavaScript
- Cierre de `</body>` y `</html>`

### `js/components.js`
- Script que carga dinámicamente header y footer
- Configura títulos específicos por página
- Maneja navegación activa
- Funciona con fetch API

## Configuración por Página

El archivo `components.js` incluye configuración específica para cada página:

```javascript
const pageConfig = {
    'index.html': {
        title: 'Inicio || Innovalab || Laboratorio Técnico',
        activeNav: 'nav-inicio'
    },
    'acerca-de.html': {
        title: 'Acerca de || Innovalab || Laboratorio Técnico',
        activeNav: 'nav-acerca'
    },
    // ... más páginas
};
```

## Estructura de Páginas

Cada página HTML ahora tiene esta estructura simplificada:

```html
<!-- Header Container -->
<div id="header-container"></div>

<!-- Contenido específico de la página -->
<section>
    <!-- ... contenido único ... -->
</section>

<!-- Footer Container -->
<div id="footer-container"></div>
```

## Ventajas

1. **Mantenimiento simplificado**: Cambios en header/footer se aplican automáticamente a todas las páginas
2. **Código más limpio**: Cada página contiene solo su contenido específico
3. **Consistencia garantizada**: Imposible que una página tenga header/footer desactualizado
4. **Tamaño reducido**: Archivos HTML más pequeños y enfocados
5. **Fácil escalabilidad**: Agregar nuevas páginas es más rápido

## Requisitos Técnicos

- **Servidor web requerido**: Los componentes se cargan via fetch(), no funciona abriendo archivos directamente
- **JavaScript habilitado**: Necesario para cargar los componentes
- **Navegadores modernos**: Compatible con ES6+ y fetch API

## Archivos de Respaldo

Se mantienen copias de seguridad de los archivos originales:
- `index-original.html`
- `acerca-de-original.html`

## Páginas Convertidas

✅ `index.html` - Convertida a estructura modular  
✅ `acerca-de.html` - Convertida a estructura modular  
⏳ `servicios.html` - Pendiente  
⏳ `trucoteca.html` - Pendiente  
⏳ `contacto.html` - Pendiente  

## Próximos Pasos

1. Convertir las páginas restantes a la nueva estructura
2. Probar funcionamiento en servidor web
3. Verificar que todos los enlaces y funcionalidades trabajen correctamente
4. Commit y deploy de la nueva estructura 