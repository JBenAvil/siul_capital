// whatsapp.js - Script para botón flotante de WhatsApp

// Configuración
const WHATSAPP_CONFIG = {
    // Cambia este número por el tuyo (formato internacional sin +, espacios ni guiones)
    phoneNumber: '56912345678', // Ejemplo: Chile +56 9 1234 5678
    message: 'Quiero solicitar sus servicios'
};

// Función para crear el enlace de WhatsApp
function createWhatsAppLink(phone, message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
}

// Función para abrir WhatsApp
function openWhatsApp() {
    const link = createWhatsAppLink(WHATSAPP_CONFIG.phoneNumber, WHATSAPP_CONFIG.message);
    window.open(link, '_blank');
}

// Event listener cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    if (whatsappBtn) {
        // Agregar evento click al botón
        whatsappBtn.addEventListener('click', openWhatsApp);
        
        // Animación de entrada del botón
        setTimeout(() => {
            whatsappBtn.style.animation = 'slideIn 0.5s ease-out';
        }, 1000);
        
        // Efecto de pulso periódico
        setInterval(() => {
            whatsappBtn.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                whatsappBtn.style.animation = '';
            }, 1000);
        }, 5000);
    }
});

// Agregar estilos de animación dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
`;
document.head.appendChild(style);