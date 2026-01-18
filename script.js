// @ts-nocheck

const PROFILE_IMAGE_URL = "mypic.jpg";

// Initialize Lucide icons
if (window.lucide) {
    window.lucide.createIcons();
}

// Projects Data - Updated with GitHub Links
const projects = [
    {
        title: "Responsive Web Application",
        description: "Modern web app built with HTML, CSS, and JavaScript featuring dynamic user interface",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
        link: "https://aitsam-cmyk.github.io/clinicalPsycologist/" 
    },
    {
        title: "Calculator",
        description: "This Calculator is built using HTML, CSS, and JavaScript. It features a clean and intuitive user interface, allowing users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.",
        tech: ["script.js", "Html", "CSS"],
        image: "proj_pic1.PNG",
        link: "https://aitsam-cmyk.github.io/Calculator/"
    },
    {
        title: "Bussiness Website",
        description: "This is a business website built using HTML, CSS, and JavaScript. It features a professional design with multiple sections including Home, Available cars, Sold cars, Editor login, and Contact.",
        tech: ["js", "Html", "CSS"],
        image: "proj_pic2.PNG",
        link: "https://aitsam-cmyk.github.io/car-modify/"
    },
    {
        title: "Mobile Application",
        description: "Cross-platform mobile app with intuitive UI and smooth functionality",
        tech: ["Java", "Mobile Dev", "SQLite"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
        link: "https://github.com/aitsam-cmyk"
    }
];

// Skills Data 
const skills = [
    { name: "Java Programming", level: 85 },
    { name: "Python Development", level: 60 },
    { name: "Frontend Development (HTML/CSS/JS)", level: 90 },
    { name: "Database Management (SQLite)", level: 40 },
    { name: "Mobile App Development (java)", level: 65 }
];

// Load Projects - Updated redirect logic
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(function(project) {
        return `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay"></div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(function(tech) { return `<span class="tech-tag">${tech}</span>`; }).join('')}
                </div>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                    View Project
                    <i data-lucide="external-link"></i>
                </a>
            </div>
        </div>
        `;
    }).join('');
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Load Skills
function loadSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = skills.map(function(skill) {
        return `
        <div class="skill-card">
            <div class="skill-header">
                <div class="skill-icon">
                    <i data-lucide="code"></i>
                </div>
                <div class="skill-info">
                    <h3 class="skill-name">${skill.name}</h3>
                    <div class="skill-bar-bg">
                        <div class="skill-bar" style="width: ${skill.level}%"></div>
                    </div>
                </div>
                <span class="skill-percentage">${skill.level}%</span>
            </div>
        </div>
        `;
    }).join('');
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Navigation Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const href = anchor.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Chatbot Functionality
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatbotMessages');

let messages = [
    { role: 'assistant', content: "Hi! I'm Aitsam's AI assistant. Ask me anything about his skills, projects, or experience!" }
];

function renderMessages() {
    if (!chatMessages) return;
    
    chatMessages.innerHTML = messages.map(function(msg) {
        return `
            <div class="message ${msg.role}">
                ${msg.content}
            </div>
        `;
    }).join('');
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingIndicator() {
    if (!chatMessages) return null;
    
    const indicator = document.createElement('div');
    indicator.className = 'message assistant typing-indicator';
    indicator.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return indicator;
}

function getBotResponse(userInput) {
    const lowerInput = String(userInput).toLowerCase();
    
    const responses = {
        skills: "Aitsam is proficient in Java, Python, HTML, CSS, JavaScript, Node.js, and SQLite. He specializes in frontend development with strong backend capabilities and mobile app development!",
        education: "Aitsam is studying Software Engineering at COMSATS University. He completed his matriculation at APS School Akora Khattak and intermediate at Concordia College Nowshera.",
        projects: "Aitsam has worked on responsive web applications, database management systems with Node.js, mobile applications using Java, and Python automation tools.",
        contact: "You can reach Aitsam at aitsamalis@gmail.com or +92 333 9164417. Feel free to connect via the contact form on this website!",
        default: "That's a great question! Aitsam is a talented Software Engineering student with expertise in web and mobile development. Would you like to know about his skills, education, or projects?"
    };

    if (lowerInput.includes('skill') || lowerInput.includes('technology') || lowerInput.includes('know')) {
        return responses.skills;
    } else if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('university')) {
        return responses.education;
    } else if (lowerInput.includes('project') || lowerInput.includes('work') || lowerInput.includes('built')) {
        return responses.projects;
    } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
        return responses.contact;
    }
    
    return responses.default;
}

function sendMessage() {
    if (!chatInput) return;
    
    const inputValue = chatInput.value;
    if (!inputValue || inputValue.trim() === '') return;

    messages.push({ role: 'user', content: inputValue });
    renderMessages();
    chatInput.value = '';

    const typingIndicator = addTypingIndicator();

    setTimeout(function() {
        if (typingIndicator) {
            typingIndicator.remove();
        }
        const response = getBotResponse(inputValue);
        messages.push({ role: 'assistant', content: response });
        renderMessages();
    }, 1000);
}

if (chatbotBtn) {
    chatbotBtn.addEventListener('click', function() {
        if (!chatbotWindow) return;
        
        chatbotWindow.classList.toggle('active');
        if (chatbotWindow.classList.contains('active')) {
            renderMessages();
        }
    });
}

if (chatbotClose) {
    chatbotClose.addEventListener('click', function() {
        if (!chatbotWindow) return;
        chatbotWindow.classList.remove('active');
    });
}

if (chatSend) {
    chatSend.addEventListener('click', sendMessage);
}

if (chatInput) {
    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        const currentDisplay = navMenu.style.display;
        navMenu.style.display = currentDisplay === 'flex' ? 'none' : 'flex';
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    loadSkills();
    renderMessages();
    
    // Load profile image if URL is provided
    if (PROFILE_IMAGE_URL && PROFILE_IMAGE_URL !== "") {
        const imgElement = document.getElementById('profileImg');
        const iconElement = document.getElementById('defaultIcon');
        
        if (imgElement && iconElement) {
            imgElement.src = PROFILE_IMAGE_URL;
            imgElement.style.display = 'block';
            iconElement.style.display = 'none';
        }
    }
});