$(function () {
	var carouselbox = $('.carouselbox')
	console.log(carouselbox)

	new Swiper('.swiper-container', {
      // slidesPerView: 5,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 20,
      loop:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on:{
      	slideChange: function () {
      		console.log(arguments)
      		console.log(this.realIndex)
      	}
      }
    });
})