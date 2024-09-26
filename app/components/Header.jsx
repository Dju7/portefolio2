
function Header() {
  return (
    <header className="flex fixed z-40 justify-between items-center mx-auto  w-full h-16 px-8 text-white">
        <div>
            <a href="#home"><h2 className="text-3xl font-bold">Portefolio.</h2></a>
        </div>
        <div className= "flex gap-6 text-lg">
     
        <a href="#about" className="cursor-pointer hover:text-red-200">ABOUT</a>
        <a href="#projects" className="cursor-pointer hover:text-red-200">PROJECTS</a>
        </div>
      
    </header>
  )
}

export default Header
