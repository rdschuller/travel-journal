import globe from '../assets/globe.png'

export default function Navbar() {
    return (
      <nav className='w-full bg-teal-400 px-8 py-6 drop-shadow-md flex gap-2 justify-center font-quicksand text-2xl'>
        <img src={globe} alt="airbnb logo" className='w-8'/>
        <h1>world hikes.</h1>
      </nav>
    )
  }
  