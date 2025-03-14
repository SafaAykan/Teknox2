const data = [
    { image: '/ödev/nav/image1.jpg', description: 'Windows 10 yolun sonuna gelmek üzere ...', url: '/ödev/makaleler/m1.html', url2: '/ödev/makaleler/m1.html' },
    { image: '/ödev/nav/image2.jpg', description: "Samsung Yeni Giriş Segmenti Telefonu A16'yı Tanıttı.", url: '/ödev/makaleler/m2.html', url2: '/ödev/makaleler/m2.html' },
    { image: '/ödev/nav/image3.jpg', description: 'Samsung Galaxy S24 FE inceleme: En iyilerden biri, ama en iyisi mi?', url: '/ödev/makaleler/m3.html', url2: '/ödev/makaleler/m3.html' },
    { image: '/ödev/nav/image4.jpg', description: 'Windows 11 Android desteğini kaybediyor!', url: '/ödev/makaleler/m1.html',  url2: '/ödev/makaleler/m4.html' },
    { image: '/ödev/nav/image5.jpg', description: 'Mac Mini M4 Tanıtıldı! İşte Fiyatı ve Özellikleri ...', url: '/ödev/makaleler/m5.html', url2: '/ödev/makaleler/m5.html' }
];

const imageElement = document.getElementById('imgchange');
const descriptionElement = document.getElementById('description');
const nextbutton = document.getElementById('rightBtn');
const backbutton = document.getElementById("leftBtn");
const goUrl = document.getElementById('mUrl');
const goUrl2 = document.getElementById('mUrl2');

let index = 0;

// Resmi ve açıklamayı değiştiren fonksiyon
function updateContent() {
    imageElement.src = data[index].image; // Yeni resim
    descriptionElement.textContent = data[index].description; // Yeni açıklama
    goUrl.href = data[index].url;
    goUrl2.href = data[index].url2;
}

// Süreyle resim ve açıklama değiştirme (5 saniyede bir)
setInterval(updateContent, 5000);

nextbutton.addEventListener('click', () => {
    index = (index + 1) % data.length; // Dizinin sonuna gelince başa döner
    updateContent();
});
backbutton.addEventListener('click', () => {
    index = (index - 1 + data.length) % data.length; // Dizinin başına gelince sona döner
    updateContent();
});

// Belirli bir süreyle geçiş yap
function autoSlide() {
    index = (index + 1) % data.length;
    updateContent();
}

// Otomatik geçişi başlat
let autoSlideInterval = setInterval(autoSlide, 10000); // Her 5 saniyede bir geçiş yap

// Otomatik geçişi sıfırlayan fonksiyon
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Mevcut intervali durdur
    autoSlideInterval = setInterval(autoSlide, 10000); // Yeni interval başlat
}

const scrollButton = document.getElementById("scrollToTop");
scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Yumuşak kaydırma
    });
});