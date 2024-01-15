import React from 'react'

const Footer = () => {
  function getCurrentYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear;
  }
  
  const year = getCurrentYear();
  return (
    <footer>
        <div className='flex flex-1 justify-center text-center md:text-start items-center pb-9 mx-auto'>
            <h4 className='dark:text-white light: text-midnight-100 font-bold tracking-wide text-center'>©{year} Daniil Speranskii
                <span> | </span>
                <span>Web Developer. </span>
                <br />
                All rights reserved.
            </h4>
        </div>
    </footer>
  )
}

export default Footer