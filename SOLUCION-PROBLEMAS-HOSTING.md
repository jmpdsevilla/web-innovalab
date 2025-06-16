# 🚨 Solución de Problemas en Hosting

## Problema Reportado
- **Trucoteca**: No carga los datos
- **Rastreo**: Se ve diferente y mal
- **Causa probable**: Diferencias entre repositorio local y hosting

## 🔍 Diagnóstico Rápido

### 1. Usar Página de Diagnóstico
1. Sube `diagnostico-hosting.html` a tu hosting
2. Accede a `tu-dominio.com/diagnostico-hosting.html`
3. Ejecuta todos los tests
4. Revisa los resultados

### 2. Verificaciones Manuales

#### ✅ Archivos Críticos que DEBEN existir:
```
/trucoteca.html
/rastreo-reparaciones.html
/admin/index.html
/assets/js/supabase-config.js
/assets/css/style.css
/assets/js/script.js
```

#### ✅ Configuración Supabase Correcta:
- **URL**: `https://ptonwoegfinkdngrovhv.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- **Tablas**: `trucoteca_items`, `reparaciones`, `trucoteca_images`

## 🛠️ Soluciones Paso a Paso

### Problema 1: Trucoteca no carga datos

**Síntomas:**
- La página carga pero no muestra consejos
- Aparece "Cargando..." indefinidamente
- Error en consola del navegador

**Soluciones:**

1. **Verificar librería Supabase**
   ```html
   <!-- Debe estar en trucoteca.html línea 63 -->
   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
   ```

2. **Verificar configuración**
   - Abrir consola del navegador (F12)
   - Buscar errores de JavaScript
   - Verificar que la URL de Supabase sea correcta

3. **Test manual**
   ```javascript
   // Ejecutar en consola del navegador
   console.log(typeof window.supabase); // Debe mostrar "object"
   ```

### Problema 2: Rastreo se ve diferente

**Síntomas:**
- Diseño roto o diferente
- Formulario no funciona
- Estilos CSS no se aplican

**Soluciones:**

1. **Verificar archivos CSS**
   - Comprobar que `/assets/css/style.css` existe
   - Verificar que todos los CSS se cargan correctamente

2. **Verificar estructura HTML**
   - El archivo debe tener exactamente 946 líneas
   - Verificar que los estilos inline estén presentes (líneas 65-290)

3. **Limpiar caché**
   - Ctrl+F5 para recargar sin caché
   - Limpiar caché del navegador

### Problema 3: Archivos no sincronizados

**Causa:** El hosting tiene versiones antiguas de los archivos

**Solución:**
1. **Re-subir archivos completos**
   - Descargar todo el repositorio desde GitHub
   - Subir TODOS los archivos al hosting
   - Sobrescribir archivos existentes

2. **Verificar estructura de carpetas**
   ```
   /
   ├── index.html
   ├── trucoteca.html
   ├── rastreo-reparaciones.html
   ├── admin/
   │   └── index.html
   ├── assets/
   │   ├── css/
   │   ├── js/
   │   └── images/
   └── imagenes/
   ```

## 🔧 Checklist de Verificación

### Antes de subir al hosting:
- [ ] Todos los archivos están en el repositorio
- [ ] Git push completado exitosamente
- [ ] Configuración de Supabase es correcta
- [ ] Test local funciona correctamente

### Después de subir al hosting:
- [ ] Todos los archivos se subieron correctamente
- [ ] URLs de archivos CSS/JS son accesibles
- [ ] Página de diagnóstico pasa todos los tests
- [ ] Trucoteca carga datos correctamente
- [ ] Rastreo funciona y se ve bien

## 🚨 Errores Comunes y Soluciones

### Error: "supabase is not defined"
**Causa:** Librería de Supabase no se carga
**Solución:** Verificar que esta línea esté presente:
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```

### Error: "Failed to fetch"
**Causa:** Problema de CORS o conexión a Supabase
**Solución:** Verificar URL y token de Supabase

### Error: CSS no se aplica
**Causa:** Archivos CSS no se encuentran
**Solución:** Verificar rutas de archivos CSS en el HTML

### Error: "404 Not Found" en archivos
**Causa:** Archivos no se subieron al hosting
**Solución:** Re-subir todos los archivos del repositorio

## 📞 Pasos de Emergencia

Si nada funciona:

1. **Backup completo**
   - Descargar repositorio completo desde GitHub
   - Hacer backup del hosting actual

2. **Subida limpia**
   - Eliminar todos los archivos del hosting
   - Subir TODOS los archivos del repositorio
   - Verificar permisos de archivos

3. **Test inmediato**
   - Acceder a `diagnostico-hosting.html`
   - Ejecutar todos los tests
   - Verificar que todo funcione

## 📋 Información de Contacto de Emergencia

**Configuración Supabase:**
- Proyecto: `web_db`
- ID: `ptonwoegfinkdngrovhv`
- URL: `https://ptonwoegfinkdngrovhv.supabase.co`

**Archivos críticos modificados recientemente:**
- `trucoteca.html` - Configuración Supabase unificada
- `rastreo-reparaciones.html` - Sistema de rastreo completo
- `assets/js/supabase-config.js` - Configuración centralizada

---

**Última actualización:** $(date)
**Versión del sistema:** 1.0.0 