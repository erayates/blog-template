'use client';

import { useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'

export default function SwitchTheme() {
  const [theme, setTheme] = useState<string | null>('');

  const handleSwitchTheme = (): void => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.theme === 'dark' ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark');
    setTheme(localStorage.getItem('theme'));
  };

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
    const html = document.documentElement;
    localStorage.getItem('theme') === 'dark' && html.classList.add('dark');
    
  }, [])

  return (
    <button className='switch-theme text-[20px] mx-8 py-2 px-8 hover:scale-105 text-white transition bg-dark dark:bg-white dark:text-[#121212] rounded-2xl' onClick={() => handleSwitchTheme()}>
      {theme === 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
    </button>
  );
}
