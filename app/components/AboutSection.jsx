'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const headingRef = useRef(null);
  const articleRefs = useRef([]);
  const portrait = useRef()

  useEffect(() => {
    if (!headingRef.current || !articleRefs.current[0] || !portrait.current) return;

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

    const articleContent = articleRefs.current[0].querySelectorAll('p, h3, button'); 
    gsap.fromTo(
      articleContent,
      { y: 100, x:-200, opacity: 0 },
      { 
        y: 0, 
        x:0,
        opacity: 1, 
        duration: 0.7, 
        stagger: 0.2, // Délai pour chaque élément
        ease: 'power2.out',
        scrollTrigger: {
          trigger: articleRefs.current[0], // Utilisez le premier article comme trigger
          start: 'top 80%', 
          toggleActions: 'play none none reverse'
        }
      }
    );
    gsap.fromTo(portrait.current, 
      {  opacity: 0 },
      { 
        delay: 0.4,
        opacity: 1, 
        duration: 1.5, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: portrait.current, 
          start: 'top 80%', 
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section id="about" className="relative h-screen w-full pt-20 text-sky-600 overflew-hidden">
        <h1 ref={headingRef} className="animateTxt leading-[.8] text-sky-600 text-right text-[10vw] font-bold mr-20">ABOUT ME</h1>
       
        <div className="absolute z-30 mt-20 w-full h-fit flex flex-col-reverse lg:flex-row justify-center items-center bg-[#24223B]">
            <div className="h-[60vh] w-[95%] lg:w-[45%] flex flex-col justify-center items-start ">
            <article ref={el => (articleRefs.current[0] = el)} className='h-[50vh] w-[90%] text-white p-4 text-xl'>
                <p className='text-lg lg:text-2xl'>Hi,<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus atque facilis quaerat enim maxime quidem porro. Quibusdam, accusantium. Excepturi quam, doloribus distinctio sed earum nemo modi a veniam id doloremque?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quia ad, voluptas blanditiis natus cupiditate ratione quod nesciunt consequatur voluptatum non officiis dolore nam, commodi rerum, eaque cum sed veritatis.
                </p>
                <div className='h-10 w-full flex justify-start items-center my-6 gap-4'>
                  <button className='h-full w-[25%]  bg-blue-400 p-1 flex justify-center items-center rounded-lg'>Download CV</button>
                </div>
                <h3 className='text-4xl text-blue-200 mb-2'>SKILLS</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt exercitationem unde totam aliquid officia repellendus modi, quas facere autem aut minima dolor, distinctio esse voluptatum voluptas ipsam, cupiditate nisi accusantium!</p>


              </article>

            </div>
            <div className="h-[30vh] lg:h-[60vh] w-[95%] lg:w-[45%] flex flex-col justify-center items-start ">
              <article ref={portrait} className='h-[20vh] lg:h-[50vh] w-[90%] bg-blue-200 '>


              </article>
              <div className=' mt-4 w-[90%] h-14 flex justify-between items-center text-xl'>
                <p>06.45.22.42.70</p>
                <p>jlien7@gmail.com</p>
                  <div className='flex gap-2 text-white text-2xl'>
                    <FaGithubSquare />
                    <FaLinkedin />
                    <FaSquareXTwitter />
                  </div>
              </div>
            </div>

        </div>
  </section>
  )
}

export default AboutSection
