// import React from 'react'
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Antonine</span>
                <span className='text-slate-700'>Nikki</span>
            </h1>
            
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input 
                type='text' 
                placeholder='Search' 
                className='bg-transparent focus:outline-none w-24 sm:w-64'/> 
                <FaSearch className='text-slate-500'/>   
            </form>
            <ul className='flex gap-4'>
                {/* link to home page */}
                <Link to='/'>
                <li 
                className='hidden sm:inline text-slate-700 hover:underline'>
                    Home
                </li>
                </Link>
                
                {/* link to about page */}
                <Link to='/about'>
                <li 
                className='hidden sm:inline text-slate-700 hover:underline'>
                    About
                </li>
                </Link>

                {/* link to sign in page */}
                <Link to='/sign-in'>
                <li 
                className='hidden sm:inline text-slate-700 hover:underline'>
                    Sign In
                </li>
                </Link>
            </ul>
        </div>
        
    </header>
  )
}
