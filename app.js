
/*make the carousel move the slides*/ 
const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const numVisibleItems = 5;

nextBtn.addEventListener('click', () => {
  const totalItems = slider.children.length;
  if (currentIndex < totalItems - numVisibleItems) {
    currentIndex++;
    slideSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slideSlider();
  }
});

function slideSlider() {
  const translatePercentage = -currentIndex * (100 / numVisibleItems);
  slider.style.transform = `translateX(${translatePercentage}%)`;
}

 /*make wholesale-btn interactive */
document.addEventListener('DOMContentLoaded', function() {
  const wholesaleBtn = document.querySelector('.wholesale-btn');
  const serviceOptionsContainer = document.querySelector('.service-options');

  wholesaleBtn.addEventListener('click', function() {
      serviceOptionsContainer.style.display = (serviceOptionsContainer.style.display === 'flex') ? 'none' : 'flex';
  });
});

/*make bars icon interactive and show dhe side-menu*/ 
const bars  = document.querySelector('.bars');
const wholesaleBtn = document.querySelector('.left-mobile .wholesale-btn'); 

bars.onclick = function (){
  
  const leftMobile = document.querySelector('.left-mobile');
  leftMobile.classList.toggle('active'); 

  const wholesaleMobileBtn = document.querySelector('.wholesale-btn-mobile');
  const leftMobileDropdownContainer = document.querySelector('.dropdown');

  wholesaleMobileBtn.addEventListener('click', function() {
    leftMobileDropdownContainer.style.display = (leftMobileDropdownContainer.style.display === 'flex') ? 'none' : 'flex';
  });

}

/*make tatto-btn interactive*/ 
const tattooMobileBtn = document.querySelector('.tattoo-btn-mobile');
const leftMobileDropdown2Container = document.querySelector('.dropdown2');

tattooMobileBtn.addEventListener('click', function() {
  leftMobileDropdown2Container.style.display = (leftMobileDropdown2Container.style.display === 'flex') ? 'none' : 'flex';
});

/*display-carousel-items*/ 
const carouselItems=[
  {
      id:1,
      alt:'carouselimage 1',
      img: 'images/productsImg.png',
      name: 'Product1 name',
      price:55,
      
  },
  {
      id:2,
      alt:'carouselimage 1',
      img: 'images/productsImg.png',
      name: 'Product2 name',
      price:60,
      
  },
  {
      id:3,
      alt:'carouselimage 1',
      img: 'images/productsImg.png',
      name: 'Product3 name',
      price:70,
      
  },
  {
      id:4,
      alt:'carouselimage 1',
      img: 'images/productsImg.png',
      name: 'Product4 name',
      price:60,
      
  },
  {
      id:5,
      alt:'carouselimage 1',
      img: 'images/productsImg.png',
      name: 'Product5 name',
      price:65,
      
  },
  {
      id:6,
      alt:'carouselimage 1',
      img: 'images/productsImg.png',
      name: 'Product6 name',
      price:80,
      
  },
  {
      id:7,
      alt:'carouselimage 1',
      img: 'images/productsImg.png',
      name: 'Product7 name',
      price:80,
      
  }
];

let carouselHtml = '';
let sliderDisplay = document.querySelector('.slider');
carouselItems.forEach((carouselItem)=>{

    carouselHtml += `
      <div class="slide">
          <img src="${carouselItem.img}" alt="${carouselItem.alt}">
          <div class="info">
            <p class="name">${carouselItem.name} </p>
            <p class="price">$${carouselItem.price}</p>
          </div>
      </div>
`;
});
sliderDisplay.innerHTML = carouselHtml;
