'use client'
import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SplitType from "split-type"

export default function MainTextSection() {
  const mainText = useRef(null);
  const mainText2 = useRef(null);
  const homeImg = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    const text = new SplitType(mainText.current, { types: 'chars' });
    const text2 = new SplitType(mainText2.current, { types: 'words' });

    setIsVisible(true); // Rendre les éléments visibles au moment de l'animation

    tl.from(text.chars, {
      delay: 0.2,
      stagger: {
        amount: 0.4,
      },
      y: 20,
      opacity: 0,
    })
    .from(text2.words, {
      stagger: {
        amount: 0.4,
      },
      y: 5,
      opacity: 0,
    })
    .from(homeImg.current.children, {
      height: 0,
      stagger: {
        amount: 0.4,
      },
    }, "<");
  }, []);

  return (
    <section id="home" className="w-full h-fit px-5 flex flex-col justify-between items-center">
      <div className={`flex items-center justify-center pt-20 w-fit flex-col gap-2 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className="leading-[.8] text-blue-200 text-left text-[25vw] font-bold" ref={mainText}>* JULIEN</h1>
        <p className="text-sm md:text-[3vw] text-red-200 w-full text-right mt-2 xl:mt-8 mr-10" ref={mainText2}>Junior Web Developer</p>
      </div>
      <div className={`mt-20 w-full grid grid-cols-5 pb-5 gap-4 items-end ${!isVisible ? 'opacity-0' : 'opacity-100'}`} ref={homeImg}>
        <div className="col-span-3 h-[25vh] sm:h-[40vh] ">
          <img 
            src="/fond1.jpg" 
            className="w-full h-full object-cover object-center"
            alt='image'
          />
        </div>
        <div className="col-span-5 lg:col-span-2 h-[30vh]  ">
          <img 
            src="/fond1.jpg"
            className="w-full h-full object-cover object-center"
            alt='image'
          />
        </div>
      </div>
    </section>
  );
}