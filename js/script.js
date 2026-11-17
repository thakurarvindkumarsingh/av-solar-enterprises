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

// Advanced Solar Subsidy & Savings Calculator
function calculateSolar() {
    const billInput = document.getElementById('billInput');
    const billDisplay = document.getElementById('billDisplay');
    
    if (!billInput) return;

    const bill = parseInt(billInput.value);
    billDisplay.innerText = '₹' + bill.toLocaleString() + ' /mo';

    let size = "1 kW";
    let units = "120 Units";
    let gross = 65000;
    let subsidy = 30000;
    let savings = 1100;
    let payback = "3.2 Years";

    if (bill <= 2000) {
        size = "1 kW";
        units = "120 Units";
        gross = 65000;
        subsidy = 30000;
        savings = 1150;
        payback = "2.8 Years";
    } else if (bill <= 4000) {
        size = "2 kW";
        units = "240 Units";
        gross = 125000;
        subsidy = 60000;
        savings = 2400;
        payback = "2.6 Years";
    } else if (bill <= 7000) {
        size = "3 kW";
        units = "360 Units";
        gross = 180000;
        subsidy = 78000;
        savings = 3800;
        payback = "2.4 Years";
    } else if (bill <= 11000) {
        size = "5 kW";
        units = "600 Units";
        gross = 285000;
        subsidy = 78000;
        savings = 6200;
        payback = "2.9 Years";
    } else {
        size = "8 kW - 10 kW";
        units = "1,000+ Units";
        gross = 450000;
        subsidy = 78000;
        savings = 10500;
        payback = "3.1 Years";
    }

    let net = gross - subsidy;

    document.getElementById('recSize').innerText = size;
    document.getElementById('recUnits').innerText = units;
    document.getElementById('grossCost').innerText = '₹' + gross.toLocaleString();
    document.getElementById('estSubsidy').innerText = '- ₹' + subsidy.toLocaleString();
    document.getElementById('netCost').innerText = '₹' + net.toLocaleString();
    document.getElementById('estSavings').innerText = '₹' + savings.toLocaleString() + ' /mo';
    document.getElementById('paybackPeriod').innerText = '~' + payback;
}

// Initialize calculator on load
window.addEventListener('DOMContentLoaded', () => {
    calculateSolar();
});

// Gallery Filter Tabs
function filterGallery(category) {
    const buttons = document.querySelectorAll('.gallery-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active', 'bg-solarGreen', 'text-white');
        btn.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-300');
    });
    
    event.target.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-300');
    event.target.classList.add('active', 'bg-solarGreen', 'text-white');

    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Form Handler with Dual WhatsApp / Email Options
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('formName').value;
    const phone = document.getElementById('formPhone').value;
    const email = document.getElementById('formEmail').value || 'Not provided';
    const bill = document.getElementById('formBill').value;
    const system = document.getElementById('formSystem').value;
    const mode = document.getElementById('formMode').value;
    const address = document.getElementById('formAddress').value;

    document.getElementById('formSuccess').classList.remove('hidden');

    const msg = `Hello AV Solar Enterprises,\n\nI want a solar quotation & site survey.\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMonthly Bill: ${bill}\nRequirement: ${system}\nAddress: ${address}`;

    setTimeout(() => {
        if (mode === 'whatsapp') {
            const encoded = encodeURIComponent(msg);
            window.open(`https://wa.me/919580325626?text=${encoded}`, '_blank');
        } else {
            window.location.href = `mailto:avsolarenterprises@gmail.com?subject=New Solar Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg)}`;
        }
    }, 1000);
}