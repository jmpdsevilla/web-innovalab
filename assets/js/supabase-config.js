// Configuración centralizada de Supabase para Web Innovalab
const SUPABASE_CONFIG = {
    url: 'https://ptonwoegfinkdngrovhv.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0b253b2VnZmlua2RuZ3Jvdmh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NTE0ODUsImV4cCI6MjA2NTUyNzQ4NX0.jIin8SVfYvFh2-NxoJH8dcqOQ4Lt26rPyidzMy4yOwg',
    
    // Configuración de tablas
    tables: {
        trucoteca: 'trucoteca_items',
        trucotecaImages: 'trucoteca-images',
        reparaciones: 'reparaciones'
    },
    
    // Configuración de storage
    storage: {
        buckets: {
            trucotecaImages: 'trucoteca-images'
        }
    },
    
    // URLs de la API
    apiUrls: {
        storage: 'https://ptonwoegfinkdngrovhv.supabase.co/storage/v1/object/public/'
    }
};

// Inicializar cliente de Supabase
let supabaseClient;

function initSupabase() {
    if (typeof supabase !== 'undefined') {
        supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        return supabaseClient;
    } else {
        console.error('Supabase library not loaded');
        return null;
    }
}

// Función para obtener el cliente de Supabase
function getSupabaseClient() {
    if (!supabaseClient) {
        return initSupabase();
    }
    return supabaseClient;
}

// Exportar configuración para uso global
window.SUPABASE_CONFIG = SUPABASE_CONFIG;
window.getSupabaseClient = getSupabaseClient;
window.initSupabase = initSupabase; 