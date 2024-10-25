// navbar fix

window.onscroll =function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}



// Hamburger 

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {

    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});




// swiper
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,               // Tampilkan 3 gambar, termasuk yang di kiri dan kanan
        spaceBetween: 30,               // Jarak antar slide
        centeredSlides: true,           // Slide aktif berada di tengah
        loop: true,                     // Membuat slider berulang tanpa henti
        
        // Menggunakan efek coverflow
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,                 // Rotasi setiap slide
            stretch: 0,                 // Jarak antara slide
            depth: 100,                 // Kedalaman 3D
            modifier: 1,                // Efek penguat
            slideShadows: false,         // Bayangan pada slide
        },
        
         // Autoplay: tambahkan fitur autoplay di sini
        autoplay: {
            delay: 3000,                // Ganti slide setiap 3 detik
            disableOnInteraction: false, // Autoplay tidak akan berhenti saat interaksi dengan slide
        },
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,            // Memungkinkan pengguna mengklik pagination
        }, 
        grabCursor: true,               // Menambahkan efek kursor tangan saat di-klik
        
    });
});


// JavaScript to toggle card expansion on click
document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', function () {
      // Toggle the height of the image
      const img = this.querySelector('img');
      const details = this.querySelector('.card-details');
      if (img.classList.contains('expanded')) {
        img.classList.remove('expanded');
        img.style.height = '6rem'; // Kembali ke ukuran semula
        details.style.display = 'none'; // Sembunyikan detail
      } else {
        img.classList.add('expanded');
        img.style.height = '12rem'; // Ukuran diperbesar
        details.style.display = 'block'; // Tampilkan detail
      }
    });
  });

  
// Function to open the modal and set the image source
function openModal(imageSrc) {
    document.getElementById('modalImage').src = 'dist/img/produk/' + imageSrc;
    document.getElementById('imageModal').classList.remove('hidden');
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById('imageModal').classList.add('hidden');
  }
  
  // Close modal when clicking outside the image
  document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target.id === 'imageModal') {
      closeModal();
    }
  });
  