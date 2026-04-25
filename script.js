// ---- PESTAÑAS CV ----
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.getAttribute('data-tab');
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active-tab'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tab)?.classList.add('active-tab');
    btn.classList.add('active');
  });
});

// ---- MODAL RECTORADO ----
const rectorModal = document.getElementById('rectorModal');
document.getElementById('openRectorModalBtn')?.addEventListener('click', () => rectorModal.classList.add('active'));
document.getElementById('closeModalBtn')?.addEventListener('click', () => rectorModal.classList.remove('active'));

// ---- MODAL CV ----
const cvModal = document.getElementById('cvModal');
document.getElementById('openCvModalBtn')?.addEventListener('click', () => cvModal.classList.add('active'));
document.getElementById('closeCvModalBtn')?.addEventListener('click', () => cvModal.classList.remove('active'));

// ---- CERRAR MODALES AL CLICK EN OVERLAY ----
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = 'auto';
  }
});

// ---- COPYABLE ----
document.querySelectorAll('.copyable').forEach(el => {
  el.addEventListener('click', () => {
    navigator.clipboard.writeText(el.getAttribute('data-copy'));
    const toast = document.getElementById('toast-message');
    if (toast) { toast.style.opacity = '1'; setTimeout(() => toast.style.opacity = '0', 2000); }
  });
});

// ========== VISOR PDF SIMPLE CON IFRAME ==========
const pdfModal = document.getElementById('pdfModal');
const pdfIframe = document.getElementById('pdfIframe');
const pdfModalTitle = document.getElementById('pdfModalTitle');
const pdfDownloadLink = document.getElementById('pdfDownloadLink');
const closePdfModalBtn = document.getElementById('closePdfModalBtn');
const closePdfModalBtn2 = document.getElementById('closePdfModalBtn2');

function verPDF(rutaPDF, titulo) {
    if (!pdfModal) return;
    pdfModalTitle.innerHTML = `<i class="fas fa-file-pdf"></i> ${titulo}`;
    pdfIframe.src = rutaPDF;
    pdfDownloadLink.href = rutaPDF;
    pdfModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function verPDFSpread(rutaPDF, titulo) { verPDF(rutaPDF, titulo); }

function cerrarPdfModal() {
    pdfModal.classList.remove('active');
    setTimeout(() => { pdfIframe.src = ''; }, 300);
    document.body.style.overflow = '';
}


// ====================
// FUNCIÓN COPIAR (para teléfono y email)
// ====================

document.addEventListener('DOMContentLoaded', function() {
    const copyItems = document.querySelectorAll('.contact-item-modern[data-contacto]');
    const toast = document.getElementById('copyToast');
    
    copyItems.forEach(item => {
        const copyBtn = item.querySelector('.contact-copy-modern');
        
        if (copyBtn) {
            copyBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const textoACopiar = item.getAttribute('data-contacto');
                
                if (textoACopiar) {
                    navigator.clipboard.writeText(textoACopiar).then(() => {
                        // Mostrar toast
                        showToast();
                        
                        // Feedback visual en el botón
                        const originalHTML = copyBtn.innerHTML;
                        copyBtn.innerHTML = '<i class="fas fa-check"></i><span>Copiado!</span>';
                        setTimeout(() => {
                            copyBtn.innerHTML = originalHTML;
                        }, 1500);
                    }).catch(() => {
                        // Fallback
                        fallbackCopy(textoACopiar);
                    });
                }
            });
        }
    });
// ====================
//  BOTÓN FLOTANTE - SECCIÓN DE CAMBIO DE IDIOMA
// ====================
/**
 * SISTEMA DE CAMBIO DE IDIOMA ESPAÑOL ↔ INGLÉS
 * Pega este bloque completo al final de tu script.js
 * Compatible con la estructura existente del sitio
 */

(function() {
    'use strict';

    // ===== DICCIONARIO DE TRADUCCIONES =====
    const translations = {
        // Navegación flotante
        'Índice': 'Index',
        'Sobre mí': 'About Me',
        'Currículum': 'Resume',
        'Contacto': 'Contact',
        
        // Hero / Portada
        'Franco Carlos· Ingeniería Civil': 'Franco Carlos · Civil Engineering',
        
        // Sección Sobre mí
        'Presentación': 'Presentation',
        'Sobre mí': 'About Me',
        'MAESTRO MAYOR DE OBRAS · INGENIERÍA CIVIL': 'MASTER BUILDER · CIVIL ENGINEERING',
        '4to año': '4th Year',
        'Soy Maestro Mayor de Obras y estudiante avanzado de Ingeniería Civil (UTN-FRC), con formación técnica orientada al análisis estructural, la gestión de documentación y el control de infraestructura. De perfil analítico y apasionado por el rigor técnico, el cálculo y la resolución de problemas constructivos. Busco integrarme a un equipo técnico donde pueda aplicar mi capacidad operativa en proyectos de ingeniería y seguir expandiendo mi especialización profesional.':
        'I am a Master Builder and advanced Civil Engineering student (UTN-FRC), with technical training focused on structural analysis, documentation management, and infrastructure control. With an analytical profile and passionate about technical rigor, calculation, and solving construction problems. I seek to join a technical team where I can apply my operational capacity in engineering projects and continue expanding my professional specialization.',
        
        '— Franco Adrián Carlos, MMO · Estudiante de Ingeniería Civil': '— Franco Adrián Carlos, MMO · Civil Engineering Student',
        
        // Sección Currículum
        'Trayectoria': 'Career Path',
        'Curriculum · Resumido': 'Resume · Summary',
        'Formación': 'Education',
        'Experiencia': 'Experience',
        'Habilidades': 'Skills',
        
        // Timeline formación
        'Ingeniería Civil · Universidad Tecnológica Nacional (UTN-FRC)': 'Civil Engineering · National Technological University (UTN-FRC)',
        '2023 – Actualidad · 4to año en curso': '2023 – Present · 4th Year in Progress',
        'Formación orientada al cálculo estructural, infraestructuras hidráulicas y viales, con sólido rigor técnico.':
        'Training focused on structural calculation, hydraulic and road infrastructure, with solid technical rigor.',
        
        'Maestro Mayor de Obras': 'Master Builder',
        'I.P.E.T. N°339 · Villa Giardino': 'I.P.E.T. N°339 · Villa Giardino',
        'Título técnico nacional. Formación integral en diseño de estructuras, instalaciones y dirección de obras civiles.':
        'National technical degree. Comprehensive training in structure design, installations, and civil works management.',
        
        'Inglés Técnico y Comunicacional': 'Technical and Communicational English',
        'Nivel Avanzado': 'Advanced Level',
        'Capacidad para interpretación de manuales técnicos, normativas internacionales y comunicación fluida.':
        'Ability to interpret technical manuals, international regulations, and fluent communication.',
        
        // Timeline experiencia
        'Participación Técnica · Municipalidad de La Falda': 'Technical Participation · Municipality of La Falda',
        'Control de planos y documentación técnica en la Dirección de Obras Públicas. Relevamientos y apoyo en gestión de infraestructura urbana.':
        'Control of plans and technical documentation in the Public Works Directorate. Surveys and support in urban infrastructure management.',
        
        'Desarrollo Técnico · UTN Córdoba': 'Technical Development · UTN Córdoba',
        '2023 – Actualidad': '2023 – Present',
        'Elaboración de memorias de cálculo, cómputos métricos detallados y presupuestos estimativos en proyectos de simulación académica profesional.':
        'Preparation of calculation reports, detailed metric computations, and estimated budgets in professional academic simulation projects.',
        
        'Prácticas Técnicas · IPET N°339': 'Technical Practices · IPET N°339',
        'Supervisión de prácticas constructivas, diseño de planos bajo normativa edilicia y ejecución de relevamientos de campo.':
        'Supervision of construction practices, plan design under building regulations, and execution of field surveys.',
        
        // Habilidades
        'Avanzado': 'Advanced',
        'Intermedio': 'Intermediate',
        'Software y Técnica': 'Software & Technical',
        'Normativa y Gestión': 'Regulations & Management',
        'Ingeniería': 'Engineering',
        'Aptitudes': 'Aptitudes',
        '⚙️': '⚙️',
        
        'AutoCAD (2D/3D)': 'AutoCAD (2D/3D)',
        'Microsoft Excel (Avanzado)': 'Microsoft Excel (Advanced)',
        'Cómputos Métricos': 'Metric Computations',
        'Interpretación de Planos': 'Blueprint Reading',
        'Reglamentaciones Edilicias': 'Building Regulations',
        'Fiscalización de Obra': 'Works Inspection',
        'Microsoft Project': 'Microsoft Project',
        'Cálculo Estructural': 'Structural Calculation',
        'Presupuestos': 'Budgeting',
        'Análisis de Datos': 'Data Analysis',
        'Informes Técnicos': 'Technical Reports',
        'Rigor Técnico': 'Technical Rigor',
        'Resolución de Problemas': 'Problem Solving',
        'Capacidad Analítica': 'Analytical Capacity',
        'Trabajo Colaborativo': 'Teamwork',
        'Adaptabilidad': 'Adaptability',
        'Responsabilidad': 'Responsibility',
        'Organización': 'Organization',
        
        // Contacto
        'Conectemos': 'Let\'s Connect',
        'Contacto': 'Contact',
        'Email': 'Email',
        'Teléfono': 'Phone',
        'Copiar': 'Copy',
        'Ciudad de Córdoba, Argentina': 'Córdoba City, Argentina',
        'Disponibilidad para nuevos proyectos': 'Available for new projects',
        'CV e Informes disponibles': 'CV & Reports available',
        
        // Footer
        '© 2026 Rodrigo Emanuel San Martin Bustos · Técnico Económico en ERSeP · Estudiante de Economía · Apasionado por el Software y Datos':
        '© 2026 Rodrigo Emanuel San Martin Bustos · Economic Technician at ERSeP · Economics Student · Passionate about Software & Data',
        
        // Modal CV
        'Currículum Vitae · Franco Adrián Carlos': 'Curriculum Vitae · Franco Adrián Carlos',
        '📘 Formación Académica': '📘 Academic Background',
        '🏛️ Experiencia Profesional': '🏛️ Professional Experience',
        '🖥️ Habilidades Técnicas': '🖥️ Technical Skills',
        '🌍 Idiomas': '🌍 Languages',
        'Cerrar': 'Close',
        
        // Botón
        'Switch to English': 'Cambiar a Español',
    };

    // ===== ESTADO =====
    let currentLang = 'es';
    const langSwitch = document.getElementById('langSwitch');
    
    if (!langSwitch) {
        console.warn('Lang switch button not found in DOM');
        return;
    }

    // ===== FUNCIÓN PRINCIPAL DE TRADUCCIÓN =====
    function translatePage(targetLang) {
        const allElements = document.querySelectorAll('h1, h2, h3, h4, p, span, a, button, .floating-label, .contact-label-modern, .contact-value-modern, .date, .skills-title, .skill-tag, .about-title, .about-name, .about-sign, .section-badge, .cv-content h4, .cv-content p, .location-badge, .availability-badge, .portfolio-badge, .letter-body p, .letter-body h4, .letter-head p, .modal-card h3, .btn-pdf-nota, .close-modal');
        
        allElements.forEach(element => {
            // Saltar elementos que no deben traducirse
            if (element.closest('#langSwitch')) return;
            if (element.classList.contains('lang-text')) return;
            if (element.tagName === 'I') return;
            
            const originalText = element.childNodes;
            
            originalText.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent.trim();
                    
                    if (targetLang === 'en') {
                        // Traducir al inglés
                        for (const [es, en] of Object.entries(translations)) {
                            if (text.includes(es)) {
                                node.textContent = node.textContent.replace(es, en);
                                break;
                            }
                        }
                    } else {
                        // Traducir al español (revertir)
                        for (const [es, en] of Object.entries(translations)) {
                            if (text === en || text.includes(en)) {
                                node.textContent = node.textContent.replace(en, es);
                                break;
                            }
                        }
                    }
                }
            });
        });
        
        // Actualizar atributos específicos
        updateSpecificAttributes(targetLang);
        
        // Actualizar título del botón de idioma
        if (targetLang === 'en') {
            langSwitch.title = 'Cambiar a Español';
            langSwitch.querySelector('.lang-text').textContent = 'EN';
            langSwitch.classList.add('active');
        } else {
            langSwitch.title = 'Switch to English';
            langSwitch.querySelector('.lang-text').textContent = 'ES';
            langSwitch.classList.remove('active');
        }
        
        // Actualizar lang del HTML
        document.documentElement.lang = targetLang;
        currentLang = targetLang;
        
        // Guardar preferencia
        localStorage.setItem('preferredLang', targetLang);
    }

    function updateSpecificAttributes(targetLang) {
        // Actualizar placeholders y atributos data
        const contactItems = document.querySelectorAll('.contact-item-modern');
        contactItems.forEach(item => {
            const copySpan = item.querySelector('.contact-copy-modern span');
            if (copySpan) {
                copySpan.textContent = targetLang === 'en' ? 'Copy' : 'Copiar';
            }
        });
        
        // Actualizar el modal de CV si está abierto
        const cvModal = document.getElementById('cvModal');
        if (cvModal && cvModal.style.display !== 'none') {
            const closeBtn = cvModal.querySelector('.close-modal');
            if (closeBtn) {
                closeBtn.textContent = targetLang === 'en' ? 'Close' : 'Cerrar';
            }
        }
    }

    // ===== EVENT LISTENER =====
    langSwitch.addEventListener('click', function() {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        translatePage(newLang);
        
        // Pequeña animación de feedback
        const inner = this.querySelector('.lang-switch-inner');
        inner.style.transform = 'scale(0.9)';
        setTimeout(() => {
            inner.style.transform = '';
        }, 150);
    });

    // ===== INICIALIZACIÓN =====
    // Verificar preferencia guardada
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && savedLang !== currentLang) {
        // Aplicar después de que la página cargue completamente
        if (document.readyState === 'complete') {
            setTimeout(() => translatePage(savedLang), 100);
        } else {
            window.addEventListener('load', () => {
                setTimeout(() => translatePage(savedLang), 100);
            });
        }
    }

    console.log('🌐 Language switch system initialized (ES ↔ EN)');
})();

// ====================
// BOTÓN FLOTANTE - SECCIÓN ACTIVA
// ====================

document.addEventListener('DOMContentLoaded', function() {
    const floatingItems = document.querySelectorAll('.floating-item');
    const sections = document.querySelectorAll('section[id]');
    const floatingNav = document.querySelector('.floating-nav');
    
    // Función para detectar qué sección está visible
    function highlightActiveSection() {
        let scrollPosition = window.scrollY + 120; // Offset para mejor detección
        
        let activeSection = null;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSection = section.getAttribute('id');
            }
        });
        
        // Remover clase active de todos los items
        floatingItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Agregar clase active al item correspondiente
        if (activeSection) {
            const activeItem = document.querySelector(`.floating-item[href="#${activeSection}"]`);
            if (activeItem) {
                activeItem.classList.add('active');
                
                // Opcional: Actualizar el texto del botón principal
                const mainLabel = document.querySelector('.floating-label');
                const activeText = activeItem.querySelector('span').textContent;
                if (mainLabel && activeText !== 'Índice') {
                    // mainLabel.textContent = activeText; // Descomentar si quieres que muestre la sección actual
                }
            }
        }
    }
    
    // Escuchar evento scroll
    window.addEventListener('scroll', highlightActiveSection);
    
    // Ejecutar al cargar
    highlightActiveSection();
    
    // Scroll suave al hacer clic
    floatingItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

    function showToast() {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }
    
    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast();
    }
});


if (closePdfModalBtn) closePdfModalBtn.addEventListener('click', cerrarPdfModal);
if (closePdfModalBtn2) closePdfModalBtn2.addEventListener('click', cerrarPdfModal);
if (pdfModal) pdfModal.addEventListener('click', (e) => { if (e.target === pdfModal) cerrarPdfModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && pdfModal?.classList.contains('active')) cerrarPdfModal(); });
document.getElementById('verPdfNotaBtn')?.addEventListener('click', () => window.open('pdfs/nota_rectorado.pdf', '_blank'));
document.getElementById('verPdfCvBtn')?.addEventListener('click', () => window.open('pdfs/cv_completo.pdf', '_blank'));
window.verPDF = verPDF;
window.verPDFSpread = verPDFSpread;

