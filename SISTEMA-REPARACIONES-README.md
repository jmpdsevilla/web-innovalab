# Sistema de Gestión Integrado - Innovalab

## 🎯 Descripción General

Se ha implementado un **sistema completo de gestión integrado** que permite administrar tanto la **Trucoteca** como el **Sistema de Reparaciones** desde un único panel de administración.

## 🏗️ Arquitectura del Sistema

### **Base de Datos: Supabase**
- **Proyecto**: `https://ptonwoegfinkdngrovhv.supabase.co`
- **Token**: `sbp_04c23da9c2770428e2fe140523a023b3156049b5`

### **Tablas Principales**

#### 1. **trucoteca_items** (Existente)
```sql
- id (BIGSERIAL PRIMARY KEY)
- title (VARCHAR)
- content (TEXT)
- category (VARCHAR)
- image_url (VARCHAR, opcional)
- status (VARCHAR, default: 'active')
- created_at (TIMESTAMP)
```

#### 2. **reparaciones** (Nueva)
```sql
- id (BIGSERIAL PRIMARY KEY)
- numero_orden (VARCHAR UNIQUE) - Generado automáticamente
- cliente_nombre (VARCHAR)
- cliente_telefono (VARCHAR)
- cliente_email (VARCHAR, opcional)
- dispositivo_tipo (VARCHAR)
- dispositivo_marca (VARCHAR)
- dispositivo_modelo (VARCHAR)
- dispositivo_serie (VARCHAR, opcional)
- problema_descripcion (TEXT)
- diagnostico (TEXT, opcional)
- solucion (TEXT, opcional)
- costo_estimado (DECIMAL)
- costo_final (DECIMAL)
- estado (VARCHAR) - Estados predefinidos
- prioridad (VARCHAR) - Niveles de prioridad
- fecha_ingreso (TIMESTAMP, automático)
- fecha_estimada_entrega (DATE)
- fecha_entrega (TIMESTAMP, opcional)
- tecnico_asignado (VARCHAR)
- notas_internas (TEXT)
- repuestos_necesarios (TEXT)
- garantia_dias (INTEGER, default: 30)
- created_at/updated_at (TIMESTAMP)
```

## 🔧 Funcionalidades del Sistema

### **Panel de Administración** (`admin/index.html`)

#### **Acceso**
- **URL**: `admin/index.html`
- **Código de acceso**: `55555`

#### **Navegación por Tabs**
1. **📚 Trucoteca**: Gestión de consejos técnicos
2. **🔧 Reparaciones**: Sistema completo de reparaciones

### **Tab Trucoteca**
- ✅ Agregar nuevos consejos
- ✅ Editar consejos existentes
- ✅ Eliminar consejos
- ✅ Categorización (Smartphone, Laptop, Tablet, Reparación, Consejos)
- ✅ Gestión de imágenes opcionales

### **Tab Reparaciones**

#### **Dashboard con Estadísticas**
- Total de reparaciones
- Reparaciones recibidas
- En proceso de reparación
- Completadas
- Entregadas

#### **Gestión Completa de Reparaciones**
- ✅ **Registro de nuevas reparaciones**
  - Información completa del cliente
  - Detalles del dispositivo
  - Descripción del problema
  - Asignación de técnico
  - Estimación de costos y fechas

- ✅ **Estados de seguimiento**:
  - `recibido` - Dispositivo recién ingresado
  - `diagnosticando` - En proceso de diagnóstico
  - `esperando_aprobacion` - Esperando aprobación del cliente
  - `reparando` - En proceso de reparación
  - `completado` - Reparación terminada
  - `entregado` - Dispositivo entregado al cliente
  - `cancelado` - Reparación cancelada

- ✅ **Niveles de prioridad**:
  - `baja` - Sin urgencia
  - `normal` - Prioridad estándar
  - `alta` - Requiere atención prioritaria
  - `urgente` - Máxima prioridad

- ✅ **Funciones avanzadas**:
  - Búsqueda por orden, cliente, teléfono, marca o modelo
  - Edición completa de reparaciones
  - Vista detallada con toda la información
  - Eliminación con confirmación
  - Generación automática de números de orden (YYYYMMDD-XXX)

## 🎨 Frontend Público

### **Trucoteca Pública** (`trucoteca.html`)
- ✅ Muestra consejos activos desde la base de datos
- ✅ Filtrado por categorías
- ✅ Diseño responsive y moderno
- ✅ Integración completa con el sistema admin

## 🔄 Flujo de Trabajo Típico

### **Para Reparaciones**
1. **Recepción**: Cliente llega con dispositivo
2. **Registro**: Se crea nueva reparación en estado "recibido"
3. **Diagnóstico**: Técnico evalúa y actualiza diagnóstico
4. **Aprobación**: Se espera aprobación del cliente para proceder
5. **Reparación**: Se ejecuta la reparación
6. **Completado**: Reparación terminada, lista para entrega
7. **Entregado**: Dispositivo entregado al cliente

### **Para Trucoteca**
1. **Creación**: Se agregan nuevos consejos técnicos
2. **Categorización**: Se asigna categoría apropiada
3. **Publicación**: Aparece automáticamente en el frontend público
4. **Mantenimiento**: Edición o eliminación según necesidad

## 🛡️ Características de Seguridad

- ✅ **Autenticación**: Código de acceso para admin panel
- ✅ **RLS (Row Level Security)**: Habilitado en Supabase
- ✅ **Validaciones**: Campos obligatorios y tipos de datos
- ✅ **Confirmaciones**: Para acciones destructivas (eliminar)

## 🔧 Características Técnicas

### **Generación Automática de Números de Orden**
- Formato: `YYYYMMDD-XXX` (ej: `20250616-001`)
- Secuencial por día
- Implementado con triggers de PostgreSQL

### **Triggers y Funciones**
- ✅ Generación automática de números de orden
- ✅ Actualización automática de timestamps
- ✅ Validaciones de integridad de datos

### **Responsive Design**
- ✅ Adaptable a móviles y tablets
- ✅ Navegación optimizada para touch
- ✅ Tablas con scroll horizontal en móviles

## 📊 Datos de Ejemplo

El sistema incluye 3 reparaciones de ejemplo:
1. **Samsung Galaxy S21** - Juan Pérez (Diagnosticando)
2. **HP Pavilion 15** - María González (Recibido)
3. **iPad Air 4** - Pedro Rodríguez (Reparando)

## 🚀 Próximos Pasos Recomendados

1. **Probar el sistema completo**:
   - Acceder al admin panel
   - Crear nuevas reparaciones
   - Verificar el frontend de trucoteca

2. **Personalización**:
   - Ajustar categorías según necesidades
   - Modificar estados de reparación si es necesario
   - Personalizar campos adicionales

3. **Capacitación del equipo**:
   - Entrenar al personal en el uso del sistema
   - Establecer procedimientos de trabajo
   - Definir responsabilidades por rol

## 📞 Soporte

Para cualquier duda o modificación del sistema, el código está completamente documentado y es fácilmente extensible.

---

**Sistema desarrollado para Innovalab - Laboratorio Técnico**  
*Gestión integrada de Trucoteca y Reparaciones* 