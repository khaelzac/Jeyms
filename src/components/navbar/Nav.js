import './Nav.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;

      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addListener(handleResize);
    setIsMobile(mediaQuery.matches);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeListener(handleResize);
    };
  }, []);
  return (
    <>
      <nav className={`nav-section ${scrolled ? 'nav-shadow' : ''}`}>
        <div className='nav-container'>
          <h1>Jms.</h1>
          {isMobile && <div onClick={handleCollapse} className="burger"><span>☰</span></div>}
          {!isMobile &&
            <div className='nav-collapse'>
              <Link to="/">Home<span className='span-hover'></span></Link>
              <Link to='/About'>About<span className='span-hover'></span></Link>
              <Link to='Services'>Services<span className='span-hover'></span></Link>
              <Link to='Contact'>Contact<span className='span-hover'></span></Link>
            </div>
          }
        </div>
        {isCollapse &&
          <div className='nav-collapse nav-col'>
            <div className='collapse-wrapper'>
              <Link to="/">Home<span className='span-hover'></span></Link>
              <Link to='/About'>About<span className='span-hover'></span></Link>
              <Link to='Services'>Services<span className='span-hover'></span></Link>
              <Link to='Contact'>Contact<span className='span-hover'></span></Link>
            </div>
          </div>
        }
      </nav>

    </>
  );
}

export default Nav;