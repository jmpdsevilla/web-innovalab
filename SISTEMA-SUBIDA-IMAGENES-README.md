# 📸 Sistema de Subida de Imágenes - Trucoteca

## 🎯 Descripción
Sistema integrado para subir y gestionar imágenes en la trucoteca de Innovalab, diseñado para ser fácil de usar por administradores sin acceso técnico a carpetas del servidor.

## ✨ Características

### 🔧 **Funcionalidades Principales**
- **Subida directa**: Arrastra y suelta o selecciona archivos desde tu computador
- **Vista previa instantánea**: Ve la imagen antes de guardar
- **Validación automática**: Verifica formato y tamaño de archivos
- **Barra de progreso**: Seguimiento visual del proceso de subida
- **Gestión automática**: URLs generadas automáticamente

### 📋 **Especificaciones Técnicas**
- **Formatos soportados**: JPG, PNG, WebP, GIF
- **Tamaño máximo**: 5MB por imagen
- **Almacenamiento**: Supabase Storage (bucket: `trucoteca-images`)
- **Acceso**: Público (URLs directas)
- **Nomenclatura**: `trucoteca_[timestamp].[extensión]`

## 🚀 Cómo Usar

### ➕ **Agregar Nueva Imagen**
1. Ve al **Panel de Administración** → Tab **Trucoteca**
2. En el formulario, busca la sección **"Imagen (opcional)"**
3. Haz clic en **"Elegir archivo"** o arrastra la imagen
4. **Vista previa** aparecerá automáticamente
5. Completa los demás campos (título, categoría, contenido)
6. Haz clic en **"Guardar"**

### ✏️ **Editar Imagen Existente**
1. Haz clic en **"Editar"** en cualquier consejo
2. La imagen actual se mostrará en la vista previa
3. Para cambiar: selecciona una nueva imagen
4. Para eliminar: haz clic en **"Eliminar"** junto a la vista previa
5. Guarda los cambios

### 🗑️ **Eliminar Vista Previa**
- Haz clic en el botón **"Eliminar"** rojo junto a la imagen
- Esto limpia la selección sin afectar imágenes ya guardadas

## 🔒 Seguridad y Validaciones

### ✅ **Validaciones Automáticas**
- **Tipo de archivo**: Solo imágenes permitidas
- **Tamaño**: Máximo 5MB (mensaje de error si excede)
- **Formato**: JPG, PNG, WebP, GIF únicamente

### 🛡️ **Políticas de Seguridad**
- **Subida**: Permitida para todos (necesario para admin)
- **Lectura**: Pública (para mostrar en web)
- **Eliminación**: Controlada por admin

## 🎨 Interfaz de Usuario

### 📱 **Área de Subida**
```
┌─────────────────────────────────────┐
│  📁 Elegir archivo                  │
│  ┌─────────────────────────────────┐ │
│  │     Vista Previa de Imagen      │ │
│  │         [Imagen 200x150]        │ │
│  │                                 │ │
│  │         [Eliminar]              │ │
│  └─────────────────────────────────┘ │
│  ████████████████████ 100%          │
│  ✅ Imagen subida correctamente      │
└─────────────────────────────────────┘
```

### 🎯 **Estados Visuales**
- **Sin imagen**: Área punteada gris
- **Con imagen**: Vista previa + botón eliminar
- **Subiendo**: Barra de progreso azul
- **Error**: Mensaje rojo con descripción
- **Éxito**: Confirmación verde

## 🔧 Configuración Técnica

### 📊 **Bucket Storage**
```sql
-- Configuración del bucket
Bucket ID: trucoteca-images
Público: Sí
Límite: 5MB
Tipos: image/jpeg, image/png, image/webp, image/gif
```

### 🔗 **URLs Generadas**
```
https://ptonwoegfinkdngrovhv.supabase.co/storage/v1/object/public/trucoteca-images/trucoteca_1703123456789.jpg
```

### 📝 **Estructura de Archivos**
```
trucoteca-images/
├── trucoteca_1703123456789.jpg
├── trucoteca_1703123456790.png
├── trucoteca_1703123456791.webp
└── ...
```

## 🚨 Solución de Problemas

### ❌ **Errores Comunes**

**"La imagen es muy grande"**
- Solución: Reduce el tamaño a menos de 5MB
- Herramientas: Compresores online como TinyPNG

**"Archivo no válido"**
- Solución: Usa solo JPG, PNG, WebP o GIF
- Verifica que sea realmente una imagen

**"Error de conexión"**
- Solución: Verifica conexión a internet
- Intenta recargar la página

### 🔄 **Recuperación**
- Las imágenes se almacenan permanentemente en Supabase
- URLs no cambian una vez generadas
- Backup automático incluido en Supabase

## 📈 Beneficios para el Administrador

### 👤 **Facilidad de Uso**
- ✅ No necesita acceso FTP/carpetas
- ✅ Interfaz visual intuitiva
- ✅ Validación automática de errores
- ✅ Vista previa inmediata

### ⚡ **Eficiencia**
- ✅ Subida directa desde el navegador
- ✅ URLs generadas automáticamente
- ✅ Integración completa con formularios
- ✅ Sin pasos adicionales

### 🔐 **Seguridad**
- ✅ Almacenamiento profesional (Supabase)
- ✅ URLs seguras y permanentes
- ✅ Validación de tipos de archivo
- ✅ Límites de tamaño automáticos

## 🎯 Casos de Uso

### 📱 **Consejos de Smartphone**
- Capturas de pantalla de configuraciones
- Fotos de componentes internos
- Diagramas de reparación

### 💻 **Consejos de Laptop**
- Imágenes de puertos y conectores
- Fotos de herramientas necesarias
- Diagramas de desmontaje

### 🔧 **Consejos de Reparación**
- Antes y después de reparaciones
- Herramientas especializadas
- Pasos del proceso

---

## 📞 Soporte
Para problemas técnicos o dudas sobre el sistema:
- **Email**: hola@innovalab.online
- **Teléfono**: +57 324 259 80 84

---
*Sistema desarrollado para Innovalab - Laboratorio Técnico Especializado* 