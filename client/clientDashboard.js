const slides = [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1521305916504-4a1121188589",
  "https://images.unsplash.com/photo-1544025162-d76694265947",
  "https://images.unsplash.com/photo-1541542684-9f3b6b5c6b4b"
];

let currentSlide = 0;
const slideshow = document.getElementById("slideshow");

function showSlide() {
  if (!slideshow) return;
  slideshow.style.backgroundImage = `url(${slides[currentSlide]})`;
  currentSlide = (currentSlide + 1) % slides.length;
}

showSlide();
setInterval(showSlide, 3000);

// Navigation handlers
const cartBtn = document.getElementById('cartBtn');
const messagesBtn = document.getElementById('messagesBtn');
const profileBtn = document.getElementById('profileBtn');
const storesBtn = document.getElementById('storesBtn');
const deliveryBtn = document.getElementById('deliveryBtn');
const pickupBtn = document.getElementById('pickupBtn');

if (cartBtn) cartBtn.addEventListener('click', () => { window.location.href = 'cart.html'; });
if (messagesBtn) messagesBtn.addEventListener('click', () => { window.location.href = 'messages.html'; });
if (profileBtn) profileBtn.addEventListener('click', () => { window.location.href = 'profile.html'; });
if (storesBtn) storesBtn.addEventListener('click', () => { window.location.href = 'stores.html'; });
if (deliveryBtn) deliveryBtn.addEventListener('click', () => { window.location.href = 'delivery.html'; });
if (pickupBtn) pickupBtn.addEventListener('click', () => { window.location.href = 'pickup.html'; });

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function performSearch() {
  const q = (searchInput?.value || '').toLowerCase().trim();
  const cards = Array.from(document.querySelectorAll('.food-card'));
  if (!q) { cards.forEach(c => c.style.display = 'block'); return; }
  cards.forEach(card => {
    const title = (card.querySelector('h3')?.textContent || '').toLowerCase();
    const shop = (card.querySelector('p')?.textContent || '').toLowerCase();
    if (title.includes(q) || shop.includes(q)) card.style.display = 'block'; else card.style.display = 'none';
  });
}

if (searchBtn) searchBtn.addEventListener('click', performSearch);
if (searchInput) searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') performSearch(); });

// Riders / runners rendering (recommended by rating)
const riders = [
  { name: 'Jomar', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', rating: 4.9 },
  { name: 'Ana', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', rating: 4.8 },
  { name: 'Rex', avatar: 'https://randomuser.me/api/portraits/men/65.jpg', rating: 4.7 },
  { name: 'Maya', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', rating: 4.5 },
  { name: 'Tito', avatar: 'https://randomuser.me/api/portraits/men/12.jpg', rating: 4.3 }
];

function renderRiders() {
  const container = document.getElementById('ridersContainer');
  if (!container) return;
  const recommended = riders.filter(r => r.rating >= 4.5).sort((a,b)=>b.rating-a.rating);
  recommended.forEach(r => {
    const div = document.createElement('div');
    div.className = 'rider-card';
    div.innerHTML = `<img src="${r.avatar}" alt="${r.name}"><div><strong>${r.name}</strong><div style="color:var(--text-muted);font-size:13px">Rating ${r.rating}</div></div>`;
    container.appendChild(div);
  });
}

renderRiders();
