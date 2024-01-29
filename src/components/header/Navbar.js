import React from 'react'
import { Logo, language } from '../../utils/constant';

const Navbar = () => {

  return (
    <div className="fixed top-0 z-10 w-full flex m-5 h-5 transition-all duration-[0.5s] ease-in">
      <div className="flex items-center">
        <div className="fixed right-5">
          <Logo />
          <div className='flex gap-2'>
            <select className="sm:w-14 md:w-20 object-contain border rounded-sm border-black sm:text-sm bg-transparent">
              {language.map((lang) => (
                <option>{lang.name}</option>
              ))}
            </select>
            <button className="bg-red-600 text-white px-1 rounded-sm">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
