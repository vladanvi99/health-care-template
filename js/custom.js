
jQuery('.bannerslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3000,
    dots: true,
    arrows: false,
    infinite: true
});
jQuery('.ourServices-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnDotsHover:false,
  autoplaySpeed:3000,
  dots: true,
  arrows: true,
  infinite: true
});

jQuery('.ourExpert-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3000,
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     infinite: true,
        //     dots: true
        //   }
        // },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
jQuery('.ourHospital-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnDotsHover:false,
  autoplaySpeed:3000,
  dots: true,
  arrows: false,
  infinite: true,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
