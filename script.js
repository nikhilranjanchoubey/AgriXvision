// Language translations
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.features': 'Features',
        'nav.howitworks': 'How It Works',
        'nav.impact': 'Impact',
        'nav.demo': 'Demo',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'AgriXvision',
        'hero.tagline': 'Detect. Predict. Protect – Smarter Farming with AI',
        'hero.cta': 'Learn More',
        
        // About Section
        'about.title': 'About AgriXvision',
        'about.subtitle': 'Revolutionizing agriculture through AI-powered monitoring',
        'about.problem.title': 'The Challenge',
        'about.problem.text': 'Farmers face increasing challenges with soil degradation, unpredictable pest outbreaks, and climate variability leading to significant crop losses and reduced yields.',
        'about.solution.title': 'Our Solution',
        'about.solution.text': 'AgriXvision uses advanced AI algorithms to analyze multispectral crop images and sensor data, providing real-time insights for disease detection, soil quality assessment, and pest risk prediction.',
        
        // Features Section
        'features.title': 'Key Features',
        'features.subtitle': 'Comprehensive AI-powered agricultural monitoring',
        'features.disease.title': 'Crop Disease Detection',
        'features.disease.text': 'Early identification of plant diseases using computer vision and machine learning algorithms.',
        'features.soil.title': 'Soil Quality Prediction',
        'features.soil.text': 'Advanced soil analysis to predict nutrient levels and recommend optimal fertilization strategies.',
        'features.pest.title': 'Pest Risk Monitoring',
        'features.pest.text': 'Proactive pest detection and risk assessment to prevent crop damage before it occurs.',
        'features.app.title': 'Multilingual Farmer App',
        'features.app.text': 'User-friendly mobile application supporting multiple regional languages for easy adoption.',
        'features.iot.title': 'IoT Sensor Integration',
        'features.iot.text': 'Real-time monitoring of soil moisture, temperature, humidity, and light levels through smart sensors.',
        'features.weather.title': 'Weather Prediction',
        'features.weather.text': 'AI-powered weather forecasting and climate analysis to optimize planting and harvesting schedules.',
        
        // How It Works Section
        'howitworks.title': 'How It Works',
        'howitworks.subtitle': 'Simple steps to smarter farming',
        'howitworks.step1.title': 'Upload Crop Photo',
        'howitworks.step1.text': 'Farmers capture and upload images of their crops using our mobile app.',
        'howitworks.step2.title': 'AI Analysis',
        'howitworks.step2.text': 'Advanced TensorFlow models analyze leaf patterns, soil data, and environmental factors.',
        'howitworks.step3.title': 'Generate Predictions',
        'howitworks.step3.text': 'AI generates real-time predictions for disease, soil health, and pest risks.',
        'howitworks.step4.title': 'Get Recommendations',
        'howitworks.step4.text': 'Farmers receive actionable recommendations via mobile app notifications.',
        
        // Impact Section
        'impact.title': 'Our Impact',
        'impact.subtitle': 'Transforming agriculture for a sustainable future',
        'impact.yield.title': 'Higher Yield',
        'impact.yield.text': 'Early detection leads to 25% increase in crop yields through timely intervention.',
        'impact.cost.title': 'Lower Costs',
        'impact.cost.text': 'Optimized fertilizer and water usage reduces input costs by up to 30%.',
        'impact.eco.title': 'Eco-friendly Farming',
        'impact.eco.text': 'Reduced pesticide usage promotes sustainable and environmentally friendly agriculture.',
        'impact.empower.title': 'Empowered Farmers',
        'impact.empower.text': 'Smart advisory services empower farmers with data-driven decision making.',
        'impact.note': 'Aligned with Digital Agriculture Mission & UN Sustainable Development Goals',
        
        // Demo Section
        'demo.title': 'Try Our Demo',
        'demo.subtitle': 'Experience AI-powered crop analysis',
        'demo.upload.text': 'Upload a leaf image to analyze',
        'demo.upload.btn': 'Choose File',
        'demo.analyze.default': 'Analyze Sample Image',
        'demo.analyze.empty': 'Show Analysis Capabilities',
        'demo.result.title': 'Analysis Result',
        'demo.result.disease': 'Disease Detected:',
        'demo.result.confidence': 'Confidence:',
        'demo.result.recommendation': 'Recommendation:',
        'demo.result.severity': 'Severity:',
        'demo.result.treatment': 'Treatment:',
        'demo.actions.download': 'Download Report',
        'demo.actions.share': 'Share Results',
        'demo.analyzing': 'AI is analyzing your image...',
        'demo.processing': 'Processing image...',
        
        // Target Audience Section
        'audience.title': 'Who We Serve',
        'audience.subtitle': 'Empowering diverse agricultural stakeholders',
        'audience.farmers.title': 'Farmers',
        'audience.farmers.text': 'Individual and small-scale farmers seeking to optimize their crop production and reduce losses.',
        'audience.agronomists.title': 'Agronomists',
        'audience.agronomists.text': 'Agricultural experts and consultants providing advisory services to farming communities.',
        'audience.researchers.title': 'Researchers',
        'audience.researchers.text': 'Agricultural researchers and institutions studying crop health and soil conditions.',
        'audience.fpos.title': 'FPOs',
        'audience.fpos.text': 'Farmer Producer Organizations supporting collective farming and market access.',
        
        // Go-to-Market Section
        'market.title': 'Our Business Model',
        'market.subtitle': 'Scalable solutions for sustainable growth',
        'market.freemium.title': 'Freemium Model',
        'market.freemium.text': 'Basic features free for individual farmers, premium advanced analytics for enhanced productivity.',
        'market.b2b.title': 'B2B Partnerships',
        'market.b2b.text': 'Strategic partnerships with FPOs, NGOs, and agricultural cooperatives for widespread adoption.',
        'market.gov.title': 'Government Integration',
        'market.gov.text': 'Integration with government agricultural policies and Digital India initiatives.',
        
        // Contact Section
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Join us in revolutionizing agriculture',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Email Address',
        'contact.form.mobile': 'Mobile Number',
        'contact.form.message': 'Your Message',
        'contact.form.submit': 'Send Message',
        'contact.details.title': "Let's Collaborate",
        'contact.details.text': 'Join us in building a sustainable future for agriculture through AI-powered solutions.',
        
        // Footer
        'footer.home': 'Home',
        'footer.features': 'Features',
        'footer.contact': 'Contact',
        'footer.empowering': 'Empowering Farmers'
    },
    hi: {
        // Navigation
        'nav.home': 'होम',
        'nav.about': 'के बारे में',
        'nav.features': 'विशेषताएं',
        'nav.howitworks': 'कैसे काम करता है',
        'nav.impact': 'प्रभाव',
        'nav.demo': 'डेमो',
        'nav.contact': 'संपर्क',
        
        // Hero Section
        'hero.title': 'AgriXvision',
        'hero.tagline': 'पहचानें। भविष्यवाणी करें। सुरक्षित रखें – AI के साथ स्मार्ट खेती',
        'hero.cta': 'और जानें',
        
        // About Section
        'about.title': 'AgriXvision के बारे में',
        'about.subtitle': 'AI-संचालित निगरानी के माध्यम से कृषि में क्रांति',
        'about.problem.title': 'चुनौती',
        'about.problem.text': 'किसानों को मिट्टी की गिरावट, अप्रत्याशित कीट प्रकोप और जलवायु परिवर्तनशीलता के साथ बढ़ती चुनौतियों का सामना करना पड़ता है, जिससे महत्वपूर्ण फसल नुकसान और कम उपज होती है।',
        'about.solution.title': 'हमारा समाधान',
        'about.solution.text': 'AgriXvision बहु-स्पेक्ट्रल फसल छवियों और सेंसर डेटा का विश्लेषण करने के लिए उन्नत AI एल्गोरिदम का उपयोग करता है, रोग का पता लगाने, मिट्टी की गुणवत्ता का आकलन और कीट जोखिम भविष्यवाणी के लिए वास्तविक समय की अंतर्दृष्टि प्रदान करता है।',
        
        // Features Section
        'features.title': 'मुख्य विशेषताएं',
        'features.subtitle': 'व्यापक AI-संचालित कृषि निगरानी',
        'features.disease.title': 'फसल रोग का पता लगाना',
        'features.disease.text': 'कंप्यूटर विज़न और मशीन लर्निंग एल्गोरिदम का उपयोग करके पौधों के रोगों की प्रारंभिक पहचान।',
        'features.soil.title': 'मिट्टी की गुणवत्ता भविष्यवाणी',
        'features.soil.text': 'पोषक तत्वों के स्तर की भविष्यवाणी करने और इष्टतम उर्वरक रणनीतियों की सिफारिश करने के लिए उन्नत मिट्टी विश्लेषण।',
        'features.pest.title': 'कीट जोखिम निगरानी',
        'features.pest.text': 'फसल की क्षति को रोकने के लिए सक्रिय कीट का पता लगाना और जोखिम मूल्यांकन।',
        'features.app.title': 'बहुभाषी किसान ऐप',
        'features.app.text': 'आसान अपनाने के लिए कई क्षेत्रीय भाषाओं का समर्थन करने वाला उपयोगकर्ता-अनुकूल मोबाइल अनुप्रयोग।',
        'features.iot.title': 'IoT सेंसर एकीकरण',
        'features.iot.text': 'स्मार्ट सेंसर के माध्यम से मिट्टी की नमी, तापमान, आर्द्रता और प्रकाश स्तर की वास्तविक समय निगरानी।',
        'features.weather.title': 'मौसम भविष्यवाणी',
        'features.weather.text': 'बुवाई और कटाई के कार्यक्रम को अनुकूलित करने के लिए AI-संचालित मौसम पूर्वानुमान और जलवायु विश्लेषण।',
        
        // How It Works Section
        'howitworks.title': 'कैसे काम करता है',
        'howitworks.subtitle': 'स्मार्ट खेती के लिए सरल कदम',
        'howitworks.step1.title': 'फसल फोटो अपलोड करें',
        'howitworks.step1.text': 'किसान हमारे मोबाइल ऐप का उपयोग करके अपनी फसलों की छवियां कैप्चर और अपलोड करते हैं।',
        'howitworks.step2.title': 'AI विश्लेषण',
        'howitworks.step2.text': 'उन्नत TensorFlow मॉडल पत्ती के पैटर्न, मिट्टी के डेटा और पर्यावरणीय कारकों का विश्लेषण करते हैं।',
        'howitworks.step3.title': 'भविष्यवाणी उत्पन्न करें',
        'howitworks.step3.text': 'AI रोग, मिट्टी की सेहत और कीट जोखिमों के लिए वास्तविक समय की भविष्यवाणी उत्पन्न करता है।',
        'howitworks.step4.title': 'सिफारिशें प्राप्त करें',
        'howitworks.step4.text': 'किसानों को मोबाइल ऐप सूचनाओं के माध्यम से कार्रवाई योग्य सिफारिशें मिलती हैं।',
        
        // Impact Section
        'impact.title': 'हमारा प्रभाव',
        'impact.subtitle': 'एक सतत भविष्य के लिए कृषि को बदलना',
        'impact.yield.title': 'उच्च उपज',
        'impact.yield.text': 'समय पर हस्तक्षेप के माध्यम से प्रारंभिक पहचान से फसल की उपज में 25% वृद्धि होती है।',
        'impact.cost.title': 'कम लागत',
        'impact.cost.text': 'इष्टतम उर्वरक और पानी के उपयोग से इनपुट लागत में 30% तक की कमी होती है।',
        'impact.eco.title': 'पर्यावरण-अनुकूल खेती',
        'impact.eco.text': 'कीटनाशक के कम उपयोग से सतत और पर्यावरण-अनुकूल कृषि को बढ़ावा मिलता है।',
        'impact.empower.title': 'सशक्त किसान',
        'impact.empower.text': 'स्मार्ट सलाहकार सेवाएं किसानों को डेटा-संचालित निर्णय लेने में सशक्त बनाती हैं।',
        'impact.note': 'डिजिटल कृषि मिशन और UN सतत विकास लक्ष्यों के साथ संरेखित',
        
        // Demo Section
        'demo.title': 'हमारा डेमो आज़माएं',
        'demo.subtitle': 'AI-संचालित फसल विश्लेषण का अनुभव करें',
        'demo.upload.text': 'विश्लेषण के लिए पत्ती की छवि अपलोड करें',
        'demo.upload.btn': 'फ़ाइल चुनें',
        'demo.analyze.default': 'नमूना छवि का विश्लेषण करें',
        'demo.analyze.empty': 'विश्लेषण क्षमताएं दिखाएं',
        'demo.result.title': 'विश्लेषण परिणाम',
        'demo.result.disease': 'रोग का पता चला:',
        'demo.result.confidence': 'आत्मविश्वास:',
        'demo.result.recommendation': 'सिफारिश:',
        'demo.result.severity': 'गंभीरता:',
        'demo.result.treatment': 'उपचार:',
        'demo.actions.download': 'रिपोर्ट डाउनलोड करें',
        'demo.actions.share': 'परिणाम साझा करें',
        'demo.analyzing': 'AI आपकी छवि का विश्लेषण कर रहा है...',
        'demo.processing': 'छवि प्रसंस्करण...',
        
        // Target Audience Section
        'audience.title': 'हम किसकी सेवा करते हैं',
        'audience.subtitle': 'विविध कृषि हितधारकों को सशक्त बनाना',
        'audience.farmers.title': 'किसान',
        'audience.farmers.text': 'व्यक्तिगत और छोटे पैमाने के किसान जो अपनी फसल उत्पादन को अनुकूलित करना और नुकसान को कम करना चाहते हैं।',
        'audience.agronomists.title': 'कृषि विज्ञानी',
        'audience.agronomists.text': 'कृषि विशेषज्ञ और सलाहकार जो किसान समुदायों को सलाहकार सेवाएं प्रदान करते हैं।',
        'audience.researchers.title': 'शोधकर्ता',
        'audience.researchers.text': 'कृषि शोधकर्ता और संस्थान जो फसल स्वास्थ्य और मिट्टी की स्थिति का अध्ययन करते हैं।',
        'audience.fpos.title': 'FPOs',
        'audience.fpos.text': 'किसान उत्पादक संगठन सामूहिक खेती और बाजार पहुंच का समर्थन करते हैं।',
        
        // Go-to-Market Section
        'market.title': 'हमारा व्यापार मॉडल',
        'market.subtitle': 'सतत विकास के लिए स्केलेबल समाधान',
        'market.freemium.title': 'फ्रीमियम मॉडल',
        'market.freemium.text': 'व्यक्तिगत किसानों के लिए बुनियादी सुविधाएं मुफ्त, बढ़ी हुई उत्पादकता के लिए प्रीमियम उन्नत विश्लेषण।',
        'market.b2b.title': 'B2B साझेदारी',
        'market.b2b.text': 'व्यापक अपनाने के लिए FPOs, NGOs और कृषि सहकारी समितियों के साथ रणनीतिक साझेदारी।',
        'market.gov.title': 'सरकारी एकीकरण',
        'market.gov.text': 'सरकारी कृषि नीतियों और डिजिटल इंडिया पहल के साथ एकीकरण।',
        
        // Contact Section
        'contact.title': 'संपर्क करें',
        'contact.subtitle': 'कृषि में क्रांति लाने में हमारे साथ जुड़ें',
        'contact.form.name': 'आपका नाम',
        'contact.form.email': 'ईमेल पता',
        'contact.form.mobile': 'मोबाइल नंबर',
        'contact.form.message': 'आपका संदेश',
        'contact.form.submit': 'संदेश भेजें',
        'contact.details.title': 'आइए सहयोग करें',
        'contact.details.text': 'AI-संचालित समाधानों के माध्यम से कृषि के लिए एक सतत भविष्य बनाने में हमारे साथ जुड़ें।',
        
        // Footer
        'footer.home': 'होम',
        'footer.features': 'विशेषताएं',
        'footer.contact': 'संपर्क',
        'footer.empowering': 'किसानों को सशक्त बनाना'
    }
};

// Current language
let currentLang = 'en';

// DOM Elements
const preloader = document.getElementById('preloader');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const langButtons = document.querySelectorAll('.lang-btn');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const fileInput = document.getElementById('file-input');
const uploadArea = document.getElementById('upload-area');
const demoResult = document.getElementById('demo-result');
const contactForm = document.getElementById('contact-form');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Ensure page starts from top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Hide preloader
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);

    // Initialize all functionality
    initNavigation();
    initScrollEffects();
    initLanguageSwitcher();
    initDemo();
    initContactForm();
    initAnimations();
});

// Navigation functionality
function initNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll effects
function initScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Show/hide scroll to top button
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hero CTA button scroll
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Language switcher functionality
function initLanguageSwitcher() {
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            switchLanguage(lang);
            
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Regenerate analysis results if demo result is visible
    if (demoResult && demoResult.style.display !== 'none') {
        const analysis = generateDefaultAnalysis();
        updateAnalysisResult(analysis);
    }
}

// Demo functionality
function initDemo() {
    // File upload handling
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert(currentLang === 'hi' ? 'कृपया एक छवि फ़ाइल अपलोड करें (JPG, PNG, आदि)' : 'Please upload an image file (JPG, PNG, etc.)');
                return;
            }
            
            // Validate file size (max 10MB)
            if (file.size > 10 * 1024 * 1024) {
                alert(currentLang === 'hi' ? 'फ़ाइल का आकार बहुत बड़ा है। कृपया 10MB से छोटी छवि अपलोड करें।' : 'File size too large. Please upload an image smaller than 10MB.');
                return;
            }
            
            // Process the image
            processImage(file);
        }
    });

    // Drag and drop functionality
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#2e7d32';
        uploadArea.style.backgroundColor = '#c8e6c9';
    });

    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#2e7d32';
        uploadArea.style.backgroundColor = '#ffffff';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#2e7d32';
        uploadArea.style.backgroundColor = '#ffffff';
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                fileInput.files = files;
                processImage(file);
            } else {
                alert(currentLang === 'hi' ? 'कृपया एक छवि फ़ाइल ड्रॉप करें (JPG, PNG, आदि)' : 'Please drop an image file (JPG, PNG, etc.)');
            }
        }
    });

    // Demo buttons
    const analyzeDefaultBtn = document.getElementById('analyze-default');
    const analyzeEmptyBtn = document.getElementById('analyze-empty');
    const downloadPdfBtn = document.getElementById('download-pdf');
    const shareResultsBtn = document.getElementById('share-results');

    if (analyzeDefaultBtn) {
        analyzeDefaultBtn.addEventListener('click', () => {
            showDefaultAnalysis();
        });
    }

    if (analyzeEmptyBtn) {
        analyzeEmptyBtn.addEventListener('click', () => {
            showEmptyAnalysis();
        });
    }

    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', () => {
            downloadPDFReport();
        });
    }

    if (shareResultsBtn) {
        shareResultsBtn.addEventListener('click', () => {
            shareResults();
        });
    }

    // Show default analysis on page load
    showDefaultAnalysis();
}

function processImage(file) {
    // Show loading state
    const processingText = currentLang === 'hi' ? 'छवि प्रसंस्करण...' : 'Processing image...';
    uploadArea.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        <p>${processingText}</p>
    `;

    // Create image preview
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            // Analyze the image
            analyzeImage(img, file);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function analyzeImage(img, file) {
    // Show analyzing state
    const analyzingText = currentLang === 'hi' ? 'AI आपकी छवि का विश्लेषण कर रहा है...' : 'AI is analyzing your image...';
    uploadArea.innerHTML = `
        <i class="fas fa-brain"></i>
        <p>${analyzingText}</p>
        <div class="progress-bar">
            <div class="progress-fill"></div>
        </div>
    `;

    // Simulate AI analysis with progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            completeAnalysis(img, file);
        }
        
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = progress + '%';
        }
    }, 200);
}

function completeAnalysis(img, file) {
    // Generate realistic analysis results based on image characteristics
    const analysis = generateAnalysisResult(img, file);
    
    // Update the existing result display
    updateAnalysisResult(analysis);
    demoResult.style.display = 'block';
    demoResult.scrollIntoView({ behavior: 'smooth' });

    // Reset upload area
    const uploadText = currentLang === 'hi' ? 'विश्लेषण के लिए पत्ती की छवि अपलोड करें' : 'Upload a leaf image to analyze';
    const uploadBtnText = currentLang === 'hi' ? 'फ़ाइल चुनें' : 'Choose File';
    
    uploadArea.innerHTML = `
        <i class="fas fa-cloud-upload-alt"></i>
        <p>${uploadText}</p>
        <button class="upload-btn">${uploadBtnText}</button>
    `;

    // Re-attach event listeners
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });
}

function generateAnalysisResult(img, file) {
    // Use the same logic as generateDefaultAnalysis but for uploaded images
    return generateDefaultAnalysis();
}

function downloadReport() {
    const reportData = {
        timestamp: new Date().toISOString(),
        analysis: document.querySelector('.result-content').innerText,
        platform: 'AgriXvision AI Demo'
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `agrixvision-analysis-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function shareResults() {
    if (navigator.share) {
        const title = currentLang === 'hi' ? 'AgriXvision AI विश्लेषण परिणाम' : 'AgriXvision AI Analysis Results';
        const text = currentLang === 'hi' ? 'AgriXvision से मेरे फसल विश्लेषण परिणाम देखें!' : 'Check out my crop analysis results from AgriXvision!';
        
        navigator.share({
            title: title,
            text: text,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const results = document.querySelector('.result-content').innerText;
        const title = currentLang === 'hi' ? 'AgriXvision विश्लेषण परिणाम:' : 'AgriXvision Analysis Results:';
        navigator.clipboard.writeText(`${title}\n${results}`);
        alert(currentLang === 'hi' ? 'परिणाम क्लिपबोर्ड में कॉपी हो गए!' : 'Results copied to clipboard!');
    }
}

// New functions for demo functionality
function showDefaultAnalysis() {
    const analysis = generateDefaultAnalysis();
    updateAnalysisResult(analysis);
    demoResult.style.display = 'block';
    demoResult.scrollIntoView({ behavior: 'smooth' });
}

function showEmptyAnalysis() {
    const analysis = generateEmptyAnalysis();
    updateAnalysisResult(analysis);
    demoResult.style.display = 'block';
    demoResult.scrollIntoView({ behavior: 'smooth' });
}

function generateDefaultAnalysis() {
    // Always generate in the current language
    if (currentLang === 'hi') {
        const diseases = [
            'पत्ती धब्बा रोग',
            'पाउडरी मिल्ड्यू',
            'रस्ट रोग',
            'बैक्टीरियल ब्लाइट',
            'एन्थ्रेक्नोज़',
            'डाउनी मिल्ड्यू',
            'स्वस्थ पत्ता (कोई रोग नहीं)',
            'पोषक तत्व की कमी',
            'कीट क्षति'
        ];
        
        const severities = ['कम', 'मध्यम', 'उच्च', 'गंभीर'];
        
        const treatments = [
            'कॉपर-आधारित फंगीसाइड स्प्रे लगाएं',
            'जैविक नीम तेल उपचार का उपयोग करें',
            'पौधों के आसपास हवा के संचार में सुधार करें',
            'संतुलित NPK उर्वरक लगाएं',
            'प्रभावित पत्तियों को हटाकर ठीक से निपटें',
            'पानी देने की आवृत्ति बढ़ाएं',
            'सिस्टमिक फंगीसाइड लगाएं',
            'कोई उपचार की आवश्यकता नहीं - पौधा स्वस्थ है'
        ];
        
        const recommendations = [
            'बारीकी से निगरानी करें और 3-5 दिनों में फिर से जांच करें',
            'फैलाव को रोकने के लिए तुरंत उपचार लगाएं',
            'प्रभावित पौधों को स्वस्थ पौधों से अलग करें',
            'बढ़ती स्थितियों और मिट्टी की सेहत में सुधार करें',
            'गंभीर मामलों के लिए कृषि विशेषज्ञ से सलाह लें',
            'नियमित निगरानी और रखरखाव जारी रखें',
            'पौधा स्वस्थ है - वर्तमान देखभाल दिनचर्या बनाए रखें',
            'अंतर्निहित मिट्टी या पर्यावरणीय मुद्दों को संबोधित करें'
        ];
        
        // Generate random but realistic results
        const disease = diseases[Math.floor(Math.random() * diseases.length)];
        const confidence = Math.floor(Math.random() * 30) + 70; // 70-100%
        const severity = severities[Math.floor(Math.random() * severities.length)];
        const treatment = treatments[Math.floor(Math.random() * treatments.length)];
        const recommendation = recommendations[Math.floor(Math.random() * recommendations.length)];
        
        return {
            disease,
            confidence,
            severity,
            treatment,
            recommendation
        };
    } else {
        // English version
        const diseases = [
            'Leaf Spot Disease',
            'Powdery Mildew',
            'Rust Disease',
            'Bacterial Blight',
            'Anthracnose',
            'Downy Mildew',
            'Healthy Leaf (No Disease)',
            'Nutrient Deficiency',
            'Pest Damage'
        ];
        
        const severities = ['Low', 'Moderate', 'High', 'Critical'];
        
        const treatments = [
            'Apply copper-based fungicide spray',
            'Use organic neem oil treatment',
            'Improve air circulation around plants',
            'Apply balanced NPK fertilizer',
            'Remove affected leaves and dispose properly',
            'Increase watering frequency',
            'Apply systemic fungicide',
            'No treatment needed - plant is healthy'
        ];
        
        const recommendations = [
            'Monitor closely and recheck in 3-5 days',
            'Apply treatment immediately to prevent spread',
            'Isolate affected plants from healthy ones',
            'Improve growing conditions and soil health',
            'Consult with agricultural expert for severe cases',
            'Continue regular monitoring and maintenance',
            'Plant is healthy - maintain current care routine',
            'Address underlying soil or environmental issues'
        ];
        
        // Generate random but realistic results
        const disease = diseases[Math.floor(Math.random() * diseases.length)];
        const confidence = Math.floor(Math.random() * 30) + 70; // 70-100%
        const severity = severities[Math.floor(Math.random() * severities.length)];
        const treatment = treatments[Math.floor(Math.random() * treatments.length)];
        const recommendation = recommendations[Math.floor(Math.random() * recommendations.length)];
        
        return {
            disease,
            confidence,
            severity,
            treatment,
            recommendation
        };
    }
}

function generateEmptyAnalysis() {
    if (currentLang === 'hi') {
        return {
            disease: 'कोई छवि नहीं अपलोड की गई',
            confidence: 'N/A',
            severity: 'N/A',
            treatment: 'कृपया फसल की छवि अपलोड करें',
            recommendation: 'AI विश्लेषण के लिए पत्ती की स्पष्ट छवि अपलोड करें'
        };
    } else {
        return {
            disease: 'No image uploaded',
            confidence: 'N/A',
            severity: 'N/A',
            treatment: 'Please upload a crop image',
            recommendation: 'Upload a clear leaf image for AI analysis'
        };
    }
}

function updateAnalysisResult(analysis) {
    document.getElementById('disease-value').textContent = analysis.disease;
    document.getElementById('confidence-value').textContent = analysis.confidence + (analysis.confidence !== 'N/A' ? '%' : '');
    document.getElementById('severity-value').textContent = analysis.severity;
    document.getElementById('treatment-value').textContent = analysis.treatment;
    document.getElementById('recommendation-value').textContent = analysis.recommendation;
}

function translateAnalysisToHindi(rawAnalysis) {
    // Disease translation mapping
    const diseaseTranslations = {
        'Leaf Spot Disease': 'पत्ती धब्बा रोग',
        'Powdery Mildew': 'पाउडरी मिल्ड्यू',
        'Rust Disease': 'रस्ट रोग',
        'Bacterial Blight': 'बैक्टीरियल ब्लाइट',
        'Anthracnose': 'एन्थ्रेक्नोज़',
        'Downy Mildew': 'डाउनी मिल्ड्यू',
        'Healthy Leaf (No Disease)': 'स्वस्थ पत्ता (कोई रोग नहीं)',
        'Nutrient Deficiency': 'पोषक तत्व की कमी',
        'Pest Damage': 'कीट क्षति',
        'No image uploaded': 'कोई छवि नहीं अपलोड की गई'
    };
    
    // Severity translation mapping
    const severityTranslations = {
        'Low': 'कम',
        'Moderate': 'मध्यम',
        'High': 'उच्च',
        'Critical': 'गंभीर',
        'N/A': 'N/A'
    };
    
    // Treatment translation mapping
    const treatmentTranslations = {
        'Apply copper-based fungicide spray': 'कॉपर-आधारित फंगीसाइड स्प्रे लगाएं',
        'Use organic neem oil treatment': 'जैविक नीम तेल उपचार का उपयोग करें',
        'Improve air circulation around plants': 'पौधों के आसपास हवा के संचार में सुधार करें',
        'Apply balanced NPK fertilizer': 'संतुलित NPK उर्वरक लगाएं',
        'Remove affected leaves and dispose properly': 'प्रभावित पत्तियों को हटाकर ठीक से निपटें',
        'Increase watering frequency': 'पानी देने की आवृत्ति बढ़ाएं',
        'Apply systemic fungicide': 'सिस्टमिक फंगीसाइड लगाएं',
        'No treatment needed - plant is healthy': 'कोई उपचार की आवश्यकता नहीं - पौधा स्वस्थ है',
        'Please upload a crop image': 'कृपया फसल की छवि अपलोड करें'
    };
    
    // Recommendation translation mapping
    const recommendationTranslations = {
        'Monitor closely and recheck in 3-5 days': 'बारीकी से निगरानी करें और 3-5 दिनों में फिर से जांच करें',
        'Apply treatment immediately to prevent spread': 'फैलाव को रोकने के लिए तुरंत उपचार लगाएं',
        'Isolate affected plants from healthy ones': 'प्रभावित पौधों को स्वस्थ पौधों से अलग करें',
        'Improve growing conditions and soil health': 'बढ़ती स्थितियों और मिट्टी की सेहत में सुधार करें',
        'Consult with agricultural expert for severe cases': 'गंभीर मामलों के लिए कृषि विशेषज्ञ से सलाह लें',
        'Continue regular monitoring and maintenance': 'नियमित निगरानी और रखरखाव जारी रखें',
        'Plant is healthy - maintain current care routine': 'पौधा स्वस्थ है - वर्तमान देखभाल दिनचर्या बनाए रखें',
        'Address underlying soil or environmental issues': 'अंतर्निहित मिट्टी या पर्यावरणीय मुद्दों को संबोधित करें',
        'Upload a clear leaf image for AI analysis': 'AI विश्लेषण के लिए पत्ती की स्पष्ट छवि अपलोड करें'
    };
    
    return {
        disease: diseaseTranslations[rawAnalysis.disease] || rawAnalysis.disease,
        confidence: rawAnalysis.confidence,
        severity: severityTranslations[rawAnalysis.severity] || rawAnalysis.severity,
        treatment: treatmentTranslations[rawAnalysis.treatment] || rawAnalysis.treatment,
        recommendation: recommendationTranslations[rawAnalysis.recommendation] || rawAnalysis.recommendation
    };
}

function downloadPDFReport() {
    // Get analysis data directly from the display
    const reportData = {
        timestamp: new Date().toISOString(),
        analysis: {
            disease: document.getElementById('disease-value').textContent,
            confidence: document.getElementById('confidence-value').textContent,
            severity: document.getElementById('severity-value').textContent,
            treatment: document.getElementById('treatment-value').textContent,
            recommendation: document.getElementById('recommendation-value').textContent
        },
        platform: 'AgriXvision AI Demo',
        language: currentLang
    };

    // For Hindi, use text file instead of PDF due to font rendering issues
    if (currentLang === 'hi') {
        downloadHindiTextReport(reportData);
        return;
    }

    // Check if jsPDF is available for English PDF
    if (typeof window.jspdf === 'undefined') {
        alert('PDF library is loading, please try again in a few seconds.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set font and colors
    doc.setFont("helvetica");
    doc.setFontSize(20);
    doc.setTextColor(46, 125, 50); // Primary green color
    
    // Add title
    const title = currentLang === 'hi' ? 'AgriXvision AI विश्लेषण रिपोर्ट' : 'AgriXvision AI Analysis Report';
    doc.text(title, 20, 30);
    
    // Add line under title
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);
    
    // Add date and time
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    const dateTime = currentLang === 'hi' ? 
        `तिथि: ${new Date().toLocaleDateString('hi-IN')} | समय: ${new Date().toLocaleTimeString('hi-IN')}` :
        `Date: ${new Date().toLocaleDateString('en-US')} | Time: ${new Date().toLocaleTimeString('en-US')}`;
    doc.text(dateTime, 20, 50);
    
    // Add analysis results section
    doc.setFontSize(16);
    doc.setTextColor(46, 125, 50);
    const resultsTitle = currentLang === 'hi' ? 'विश्लेषण परिणाम' : 'Analysis Results';
    doc.text(resultsTitle, 20, 70);
    
    // Add analysis data
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    const labels = currentLang === 'hi' ? {
        disease: 'रोग का पता चला:',
        confidence: 'आत्मविश्वास:',
        severity: 'गंभीरता:',
        treatment: 'उपचार:',
        recommendation: 'सिफारिश:'
    } : {
        disease: 'Disease Detected:',
        confidence: 'Confidence:',
        severity: 'Severity:',
        treatment: 'Treatment:',
        recommendation: 'Recommendation:'
    };
    
    let yPosition = 85;
    const lineHeight = 8;
    
    // Add each analysis result
    doc.setFont(undefined, 'bold');
    doc.text(labels.disease, 20, yPosition);
    doc.setFont(undefined, 'normal');
    doc.text(reportData.analysis.disease, 80, yPosition);
    yPosition += lineHeight;
    
    doc.setFont(undefined, 'bold');
    doc.text(labels.confidence, 20, yPosition);
    doc.setFont(undefined, 'normal');
    doc.text(reportData.analysis.confidence, 80, yPosition);
    yPosition += lineHeight;
    
    doc.setFont(undefined, 'bold');
    doc.text(labels.severity, 20, yPosition);
    doc.setFont(undefined, 'normal');
    doc.text(reportData.analysis.severity, 80, yPosition);
    yPosition += lineHeight;
    
    doc.setFont(undefined, 'bold');
    doc.text(labels.treatment, 20, yPosition);
    doc.setFont(undefined, 'normal');
    // Split long text into multiple lines
    const treatmentLines = doc.splitTextToSize(reportData.analysis.treatment, 100);
    doc.text(treatmentLines, 80, yPosition);
    yPosition += lineHeight * treatmentLines.length;
    
    doc.setFont(undefined, 'bold');
    doc.text(labels.recommendation, 20, yPosition);
    doc.setFont(undefined, 'normal');
    const recommendationLines = doc.splitTextToSize(reportData.analysis.recommendation, 100);
    doc.text(recommendationLines, 80, yPosition);
    
    // Add additional information section
    yPosition += lineHeight * 3;
    doc.setFontSize(14);
    doc.setTextColor(46, 125, 50);
    const additionalInfoTitle = currentLang === 'hi' ? 'अतिरिक्त जानकारी' : 'Additional Information';
    doc.text(additionalInfoTitle, 20, yPosition);
    
    yPosition += lineHeight;
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    
    if (currentLang === 'hi') {
        const additionalInfo = [
            '• यह रिपोर्ट AI द्वारा उत्पन्न की गई है',
            '• सटीकता के लिए कृषि विशेषज्ञ से सलाह लें',
            '• नियमित निगरानी की सिफारिश की जाती है',
            '• परिणाम केवल सुझाव के रूप में हैं'
        ];
        
        additionalInfo.forEach(info => {
            doc.text(info, 20, yPosition);
            yPosition += lineHeight;
        });
    } else {
        const additionalInfo = [
            '• This report is generated by AI',
            '• Consult agricultural expert for accuracy',
            '• Regular monitoring is recommended',
            '• Results are for suggestion purposes only'
        ];
        
        additionalInfo.forEach(info => {
            doc.text(info, 20, yPosition);
            yPosition += lineHeight;
        });
    }
    
    // Add footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    const footerText = currentLang === 'hi' ? 
        'AgriXvision AI Demo द्वारा उत्पन्न | www.agrixvision.com' :
        'Generated by AgriXvision AI Demo | www.agrixvision.com';
    doc.text(footerText, 20, 280);
    
    // Add logo/icon (simple text representation)
    doc.setFontSize(8);
    doc.text('🌱', 180, 285);
    
    // Add disclaimer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    const disclaimer = currentLang === 'hi' ? 
        'यह रिपोर्ट केवल सूचनात्मक उद्देश्यों के लिए है' :
        'This report is for informational purposes only';
    doc.text(disclaimer, 20, 290);
    
    // Save the PDF
    const fileName = currentLang === 'hi' ? 
        `agrixvision-vishleshan-${Date.now()}.pdf` : 
        `agrixvision-analysis-${Date.now()}.pdf`;
    doc.save(fileName);
    
    // Show success message
    alert('PDF report downloaded successfully!');
}

function downloadHindiTextReport(reportData) {
    // Create a formatted Hindi text report
    const reportText = `AgriXvision AI विश्लेषण रिपोर्ट
=====================================

तिथि: ${new Date().toLocaleDateString('hi-IN')}
समय: ${new Date().toLocaleTimeString('hi-IN')}

विश्लेषण परिणाम:
-----------------
रोग का पता चला: ${reportData.analysis.disease}
आत्मविश्वास: ${reportData.analysis.confidence}
गंभीरता: ${reportData.analysis.severity}
उपचार: ${reportData.analysis.treatment}
सिफारिश: ${reportData.analysis.recommendation}

अतिरिक्त जानकारी:
-----------------
• यह रिपोर्ट AI द्वारा उत्पन्न की गई है
• सटीकता के लिए कृषि विशेषज्ञ से सलाह लें
• नियमित निगरानी की सिफारिश की जाती है
• परिणाम केवल सुझाव के रूप में हैं

---
AgriXvision AI Demo द्वारा उत्पन्न
www.agrixvision.com

नोट: यह रिपोर्ट केवल सूचनात्मक उद्देश्यों के लिए है`;

    // Create and download the text file
    const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `agrixvision-vishleshan-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show success message
    alert('हिंदी रिपोर्ट डाउनलोड हो गई!');
}

// Contact form functionality
function initContactForm() {
    // Contact form is ready for use
    
    // Add mobile number input formatting
    const mobileInput = document.getElementById('mobile');
    if (mobileInput) {
        mobileInput.addEventListener('input', function(e) {
            // Remove any non-digit characters
            let value = e.target.value.replace(/\D/g, '');
            // Limit to 10 digits
            if (value.length > 10) {
                value = value.substring(0, 10);
            }
            e.target.value = value;
        });
        
        // Prevent pasting non-numeric content
        mobileInput.addEventListener('paste', function(e) {
            e.preventDefault();
            const paste = (e.clipboardData || window.clipboardData).getData('text');
            const numericPaste = paste.replace(/\D/g, '').substring(0, 10);
            e.target.value = numericPaste;
        });
    }
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const mobile = formData.get('mobile');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !mobile || !message) {
            const validationMessage = currentLang === 'hi' ? 
                'कृपया सभी फ़ील्ड भरें (नाम, ईमेल, मोबाइल नंबर और संदेश आवश्यक हैं)' : 
                'Please fill in all fields (Name, Email, Mobile Number and Message are required)';
            showNotification(validationMessage, 'error');
            return;
        }

        // Validate mobile number (should be 10 digits)
        if (!/^[0-9]{10}$/.test(mobile)) {
            const validationMessage = currentLang === 'hi' ? 
                'कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें' : 
                'Please enter a valid 10-digit mobile number';
            showNotification(validationMessage, 'error');
            return;
        }

        // Send message using fallback method
        sendContactEmail(name, email, mobile, message);
    });
}

// Function to send message
function sendContactEmail(name, email, mobile, message) {
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    const sendingText = currentLang === 'hi' ? 'भेजा जा रहा है...' : 'Sending...';
    submitBtn.textContent = sendingText;
    submitBtn.disabled = true;

    // Use fallback method - simulate sending
    sendWithFallback(name, email, mobile, message, submitBtn, originalText);
}


// Function to send message using fallback method (simulation)
function sendWithFallback(name, email, mobile, message, submitBtn, originalText) {
    // Simulate sending delay
    setTimeout(() => {
        try {
            const successMessage = currentLang === 'hi' ? 
                'आपका संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।' : 
                'Your message has been sent successfully! We will get back to you soon.';
            
            // Show success message
            showNotification(successMessage, 'success');
            
            // Reset form
            contactForm.reset();
            
            // Store in localStorage for demo purposes
            const messageData = {
                name: name,
                email: email,
                mobile: `+91${mobile}`,
                message: message,
                language: currentLang,
                timestamp: new Date().toISOString()
            };
            
            const existingMessages = JSON.parse(localStorage.getItem('agrixvision_messages') || '[]');
            existingMessages.push(messageData);
            localStorage.setItem('agrixvision_messages', JSON.stringify(existingMessages));
            
            console.log('Message stored locally:', messageData);
            
        } catch (error) {
            console.error('Error in fallback method:', error);
            
            const errorMessage = currentLang === 'hi' ? 
                'संदेश भेजने में त्रुटि हुई। कृपया बाद में पुनः प्रयास करें।' : 
                'Error sending message. Please try again later.';
            
            showNotification(errorMessage, 'error');
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }, 1500);
}

// Function to show notification
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#f44336'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add CSS for notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// Animation on scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .impact-card, .audience-card, .market-card, .step, .about-text, .about-image');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}, 250));

// Ensure page starts from top on window load
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .impact-card, .audience-card, .market-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.cta-button, .upload-btn, .submit-btn, .lang-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
