# Sistema PQR - Innovalab

## 🎯 Descripción General

Se ha implementado un **Sistema completo de PQR (Peticiones, Quejas y Reclamos)** para Innovalab que permite a los clientes enviar y hacer seguimiento de sus solicitudes de manera eficiente.

## 🏗️ Arquitectura del Sistema

### **Base de Datos: Supabase**
- **Proyecto**: `https://ptonwoegfinkdngrovhv.supabase.co`
- **Tabla**: `pqrs`

### **Estructura de la Tabla PQRs**

```sql
pqrs (
    id BIGSERIAL PRIMARY KEY,
    numero_pqr VARCHAR(20) UNIQUE NOT NULL,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('peticion', 'queja', 'reclamo', 'sugerencia')),
    asunto VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    
    -- Información del cliente
    cliente_nombre VARCHAR(100) NOT NULL,
    cliente_email VARCHAR(100) NOT NULL,
    cliente_telefono VARCHAR(20),
    cliente_documento VARCHAR(20),
    
    -- Gestión administrativa
    estado VARCHAR(20) NOT NULL DEFAULT 'recibido' CHECK (estado IN ('recibido', 'en_revision', 'respondido', 'cerrado')),
    prioridad VARCHAR(15) NOT NULL DEFAULT 'normal' CHECK (prioridad IN ('baja', 'normal', 'alta', 'urgente')),
    
    -- Respuesta y seguimiento
    respuesta TEXT,
    respuesta_fecha TIMESTAMP,
    respuesta_por VARCHAR(100),
    
    -- Metadatos
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    archivos_adjuntos JSONB DEFAULT '[]'::jsonb
)
```

## 📄 Páginas del Sistema

### **1. Página Pública de PQR** (`pqr.html`)

**Funcionalidades:**
- ✅ Formulario intuitivo para envío de PQRs
- ✅ Selección visual del tipo de PQR
- ✅ Validaciones en tiempo real
- ✅ Generación automática de número de seguimiento
- ✅ Diseño completamente responsive
- ✅ Integración con Supabase

**Tipos de PQR:**
- **Petición**: Solicitar información o servicios
- **Queja**: Expresar inconformidad con un servicio
- **Reclamo**: Reclamar por un problema específico
- **Sugerencia**: Proponer mejoras o ideas

### **2. Página de Seguimiento** (`seguimiento-pqr.html`)

**Funcionalidades:**
- ✅ Consulta pública por número de PQR
- ✅ Visualización completa del estado
- ✅ Respuestas oficiales del equipo
- ✅ Información detallada del seguimiento
- ✅ Enlaces de ayuda y soporte

### **3. Panel de Administración** (`admin/index.html`)

**Tab PQR incluido:**
- ✅ Dashboard con estadísticas en tiempo real
- ✅ Listado completo de PQRs
- ✅ Sistema de respuestas oficial
- ✅ Gestión de estados y prioridades
- ✅ Buscador avanzado
- ✅ Vista detallada de cada PQR

## 🔧 Funcionalidades del Sistema

### **Para Clientes:**

#### **Envío de PQR:**
1. Acceder a `/pqr.html`
2. Seleccionar tipo de PQR
3. Completar formulario con datos personales
4. Describir detalladamente la situación
5. Enviar y recibir número de seguimiento

#### **Consulta de Estado:**
1. Acceder a `/seguimiento-pqr.html`
2. Ingresar número de PQR
3. Ver estado actual y respuestas
4. Acceder a información completa del caso

### **Para Administradores:**

#### **Gestión Completa:**
- **Dashboard**: Estadísticas en tiempo real
- **Responder**: Sistema de respuestas oficiales
- **Actualizar**: Cambio de estados y prioridades
- **Buscar**: Filtros por número, cliente, email, etc.
- **Eliminar**: Gestión de PQRs obsoletos

#### **Estados de PQR:**
- `recibido` - PQR recién ingresado
- `en_revision` - En proceso de análisis
- `respondido` - Con respuesta oficial
- `cerrado` - Caso finalizado

#### **Niveles de Prioridad:**
- `baja` - Sin urgencia
- `normal` - Prioridad estándar
- `alta` - Requiere atención prioritaria
- `urgente` - Máxima prioridad

## 🛡️ Características de Seguridad

- ✅ **RLS (Row Level Security)**: Habilitado en Supabase
- ✅ **Políticas de Acceso**: Lectura pública controlada
- ✅ **Validación de Datos**: Frontend y backend
- ✅ **Números Únicos**: Generación automática secuencial

## 🔄 Flujo de Trabajo Típico

### **Proceso Completo:**
1. **Cliente** envía PQR desde la página pública
2. **Sistema** genera número único automáticamente
3. **Administrador** recibe notificación en el panel
4. **Equipo** revisa y actualiza estado a "en_revision"
5. **Responsable** redacta respuesta oficial
6. **Sistema** actualiza estado a "respondido"
7. **Cliente** consulta respuesta desde seguimiento
8. **Administrador** cierra caso cuando está resuelto

### **Tiempos de Respuesta:**
- **Compromiso**: Máximo 48 horas hábiles
- **Seguimiento**: Disponible 24/7
- **Notificaciones**: Inmediatas por email

## 📊 Datos de Ejemplo

El sistema incluye 4 PQRs de ejemplo:

1. **Queja** - Demora en entrega (Alta prioridad)
2. **Petición** - Solicitud de garantía (Normal)
3. **Reclamo** - Problema técnico (Urgente)
4. **Sugerencia** - Mejora del sistema (Baja)

## 🚀 Características Técnicas

### **Generación Automática de Números:**
- **Formato**: `YYYYMMDD-XXX` (Ej: `20250117-001`)
- **Secuencial**: Por día automáticamente
- **Trigger**: PostgreSQL función automática

### **Responsive Design:**
- ✅ Optimizado para móviles y tablets
- ✅ Touch-friendly en dispositivos móviles
- ✅ Formularios adaptables

### **Validaciones:**
- ✅ Campos obligatorios marcados
- ✅ Validación de email en tiempo real
- ✅ Límites de caracteres apropiados
- ✅ Formato de número de PQR

### **Integración con Navegación:**
- ✅ Enlaces agregados a todos los menús principales
- ✅ Breadcrumbs en páginas internas
- ✅ Footer actualizado con nueva sección

## 📱 URLs del Sistema

- **Envío de PQR**: `/pqr.html`
- **Seguimiento**: `/seguimiento-pqr.html`
- **Administración**: `/admin/index.html` (Tab PQR)

## 🎨 Diseño y UX

### **Colores del Sistema:**
- **Primario**: #00A7EB (Azul Innovalab)
- **Estados**: Colores diferenciados por estado
- **Tipos**: Badges visuales distintivos

### **Iconografía:**
- **Petición**: 🤚 (fa-hand-paper)
- **Queja**: ⚠️ (fa-exclamation-triangle)
- **Reclamo**: ❗ (fa-exclamation-circle)
- **Sugerencia**: 💡 (fa-lightbulb)

## 🔮 Posibles Mejoras Futuras

1. **Notificaciones Email**: Automáticas por cambio de estado
2. **Archivos Adjuntos**: Sistema de subida de documentos
3. **API REST**: Para integraciones externas
4. **Dashboard Público**: Estadísticas generales
5. **Encuestas**: Satisfacción post-resolución
6. **WhatsApp Integration**: Notificaciones por WhatsApp

## 📞 Soporte y Mantenimiento

### **Acceso Administrativo:**
- **URL**: `/admin/index.html`
- **Código**: `55555`
- **Tab**: PQR (tercero en la lista)

### **Base de Datos:**
- **Acceso**: A través del panel Supabase
- **Backup**: Automático por Supabase
- **Monitoreo**: Dashboard integrado

---

**✅ Sistema PQR completamente implementado y funcional**  
**Fecha de implementación**: 17 Enero 2025  
**Versión**: 1.0.0  
**Estado**: Producción ✨ 