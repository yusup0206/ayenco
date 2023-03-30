let controller;
let slideScene;
let pageScene;

function animateSlides() {
  controller = new ScrollMagic.Controller();

  const sliders = document.querySelectorAll('.slide');

  sliders.forEach((slide) => {
    const textOpacity = slide.querySelector('.text-opacity');
    const imgWrapper = slide.querySelector('.img-wrapper');
    const img = slide.querySelector('.img');
    const text = slide.querySelector('.text');
    const left = slide.querySelector('.left');

    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: 'power2.inOut' },
    });

    slideTl.fromTo(
      textOpacity,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1 },
      '-=0.5'
    );

    slideTl.fromTo(
      imgWrapper,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1 }
    );
    slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, '-=1');
    slideTl.fromTo(
      text,
      { x: '150%', opacity: 0 },
      { x: '0%', opacity: 1 },
      '-=0.75'
    );
    slideTl.fromTo(
      left,
      { x: '-150%', opacity: 0 },
      { x: '0%', opacity: 1 },
      '-=1'
    );

    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.9,
      reverse: false,
    })
      .setTween(slideTl)
      // .addIndicators({
      //   colorStart: 'red',
      //   colorTrigger: 'red',
      //   name: 'slide',
      // })
      .addTo(controller);
  });
}

animateSlides();
