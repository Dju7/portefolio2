'use client'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

function ProjectSection() {
    const headingRef = useRef(null);
    const sliderContainer = useRef()
    const slider = useRef()


    useEffect(() => {
        if (!headingRef.current) return;

    const headingText = headingRef.current.innerText.split('');
    headingRef.current.innerHTML = headingText.map(letter => `<span class="letter">${letter}</span>`).join('');

    // Animation pour le h1 au scroll
    gsap.fromTo(
      headingRef.current.querySelectorAll('.letter'),
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: 'power1.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%', // Lorsque le haut du h1 atteint 80% de l'ecran
          toggleActions: 'play none none reverse'
        }
      }
    );
     
        const sliderChild = document.querySelectorAll(".slider-item")
        const sliderAnimation = gsap.timeline({
            scrollTrigger: { 
                trigger: sliderContainer.current,
                pin: true,
                start: "top top",
                end: "+=400%",
                scrub: 1,
            }
        })

        sliderChild.forEach((item, index) => {
            if (index + 1 < sliderChild.length) {
                sliderAnimation.fromTo(slider.current,
                    {
                        x: -1 * index * item.clientWidth,
                        ease: "none"
                    },
                    {
                        x: -1 * (index + 1) * item.clientWidth,
                        ease: "none"
                    },
                )
            }
        })

        return () => {
            // Clean up all scroll triggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    }, [])

    return (
        <section id="projects" className="relative h-screen w-screen pt-20 text-sky-600 overflow-hidden" ref={sliderContainer}>
            <h1 ref={headingRef} className="animateTxt2 leading-[.8] text-sky-600 text-right text-[10vw] font-bold mr-20">PROJECTS</h1>
            <div className="mt-20 relative w-fit h-fit gap-2 pb-5 flex" ref={slider}>
                {
                    [
                        { title: "Keskonmat" },
                        { title: "Holistique" },
                        { title: "Kasa" },
                        { title: "planner" },
                        { title: "OhMyFood" },
                        { title: "Mastermind" },
                        { title: "TravelDiary" },
                        { title: "Hotlines" },
                        { title: "Kanap" },
                    ].map((each, index) => (
                        <div key={index} className="relative slider-item w-[90vw] h-[65vh] bg-red-200 flex items-center justify-center text-white group overflow-hidden">
                            <div className='h-[50%] w-[50%] bg-blue-800'>

                            </div>
                            <div className='absolute z-20 text-[8vw] bottom-4 left-36 font-bold'>
                            {each.title}
                            </div>
                            <div className='absolute z-30 inset-0 bg-blue-900 bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>

                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ProjectSection