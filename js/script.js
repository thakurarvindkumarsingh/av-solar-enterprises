// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Smooth Section Reveal on Scroll Intersection
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.hero-section');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Initialize calculator on load
    calculateSolar();
});

// Advanced Solar Subsidy & Savings Calculator with updated Central + State Subsidy and Units
function calculateSolar() {
    const billInput = document.getElementById('billInput');
    const billDisplay = document.getElementById('billDisplay');

    if (!billInput || !billDisplay) return;

    const bill = parseInt(billInput.value, 10);
    billDisplay.innerText = '₹' + bill.toLocaleString('en-IN') + ' /mo';

    let size = '1 kW';
    let units = '120 - 150 Units';
    let gross = 65000;
    let centralSubsidy = 30000;
    let stateSubsidy = 15000;
    let savings = 1000;
    let payback = '2.3 Years';

    if (bill <= 2000) {
        size = '1 kW';
        units = '120 - 150 Units';
        gross = 65000;
        centralSubsidy = 30000;
        stateSubsidy = 15000;
        savings = 1000;
        payback = '2.3 Years';
    } else if (bill <= 4000) {
        size = '2 kW';
        units = '240 - 300 Units';
        gross = 125000;
        centralSubsidy = 60000;
        stateSubsidy = 30000;
        savings = 2000;
        payback = '2.2 Years';
    } else if (bill <= 7000) {
        size = '3 kW';
        units = '360 - 450 Units';
        gross = 180000;
        centralSubsidy = 78000;
        stateSubsidy = 30000;
        savings = 3000;
        payback = '2.0 Years';
    } else if (bill <= 11000) {
        size = '5 kW';
        units = '600 - 750 Units';
        gross = 285000;
        centralSubsidy = 78000;
        stateSubsidy = 30000;
        savings = 5000;
        payback = '2.4 Years';
    } else {
        size = '8 kW - 10 kW';
        units = '1,000 - 1,200+ Units';
        gross = 450000;
        centralSubsidy = 78000;
        stateSubsidy = 30000;
        savings = 8500;
        payback = '2.8 Years';
    }

    const totalSubsidy = centralSubsidy + stateSubsidy;
    const net = gross - totalSubsidy;

    document.getElementById('recSize').innerText = size;
    document.getElementById('recUnits').innerText = units;
    document.getElementById('grossCost').innerText = '₹' + gross.toLocaleString('en-IN');
    document.getElementById('estSubsidy').innerText = '- ₹' + totalSubsidy.toLocaleString('en-IN') + ' (Central + State)';
    document.getElementById('netCost').innerText = '₹' + net.toLocaleString('en-IN');
    document.getElementById('estSavings').innerText = '₹' + savings.toLocaleString('en-IN') + ' /mo';
    document.getElementById('paybackPeriod').innerText = '~' + payback;
}

// Gallery Filter Tabs
function filterGallery(category, activeBtn) {
    const buttons = document.querySelectorAll('.gallery-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active', 'bg-solarGreen', 'text-white');
        btn.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-300');
    });

    if (activeBtn) {
        activeBtn.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-300');
        activeBtn.classList.add('active', 'bg-solarGreen', 'text-white');
    }

    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Form Handler with WhatsApp / Call Options
function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = document.getElementById('formName').value.trim();
    const phone = document.getElementById('formPhone').value.trim();
    const bill = document.getElementById('formBill').value;
    const system = document.getElementById('formSystem').value;
    const mode = document.getElementById('formMode').value;
    const address = document.getElementById('formAddress').value.trim();
    const successBox = document.getElementById('formSuccess');

    const msg =
        `Hello AV Solar Enterprises,\n\n` +
        `I want a solar quotation & site survey.\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Monthly Bill: ${bill}\n` +
        `Requirement: ${system}\n` +
        `Address: ${address}`;

    const waUrl = `https://wa.me/919555261054?text=${encodeURIComponent(msg)}`;
    successBox.classList.remove('hidden');

    if (mode === 'whatsapp') {
        successBox.innerHTML =
            `Opening WhatsApp for <strong>+91 9555261054</strong>... ` +
            `<a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="underline font-bold">Click here if WhatsApp doesn't open</a>.`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
    } else {
        successBox.innerHTML =
            `Thank you, <strong>${name}</strong>! Our team will call you on <strong>${phone}</strong>, or you can call ` +
            `<a href="tel:+919555261054" class="underline font-bold">+91 9555261054</a> directly.`;
        window.location.href = 'tel:+919555261054';
    }

    form.reset();
}
