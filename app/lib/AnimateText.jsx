import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AnimateText = () => {
    const textElement = document.querySelector('.animateTxt');
    
    if (textElement) {
      gsap.fromTo(textElement, {
          y: 400,
          opacity: 0,
      },
      { 
          y: 0,
          opacity: 1,
          delay: 0.7,
          stagger: 0.4,
          duration: 0.4,
          ease: 'SlowMo.easeInOut',
          scrollTrigger: {
              trigger: textElement,
              start: 'top bottom',
              toggleActions: 'play none none reverse',
          }
      });
    } else {
      console.error("L'élément avec la classe 'animateTxt' n'est pas trouvé.");
    }
  };