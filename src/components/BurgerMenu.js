import './BurgerMenu.scss';
import { useRef } from 'react';

function BurgerMenu(props) {
  const burgerMenu = useRef(null);

  const handleBurgerMenuVisibility = () => {
    if (burgerMenu.current.classList.contains('openned')) {
      burgerMenu.current.classList.remove('openned');
    } else {
      burgerMenu.current.classList.add('openned');
    }
  };

  const handleMenuClick = (event) => {
    handleBurgerMenuVisibility();

    const sectionRef = event.currentTarget.getAttribute('data-section-ref');
    setTimeout(() => {
      props[sectionRef].current.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  return (
    <div className='open' ref={burgerMenu} >
      <div className='button-container' onClick={handleBurgerMenuVisibility}>
        <span className='cls'></span>
        <span className='cls'></span>
        <span className='cls'></span>
      </div>

      <div className='menu-options'>
        <ul className='sub-menu'>
          <li>
            <div className='d-inline hover-underline-animation' onClick={handleMenuClick} data-section-ref='aboutRef'>
              About
            </div>
          </li>
          <li>
            <div className='d-inline hover-underline-animation' onClick={handleMenuClick} data-section-ref='skillsRef'>
              Skills
            </div>
          </li>
          <li>
            <div className='d-inline hover-underline-animation' onClick={handleMenuClick} data-section-ref='projectsRef'>
              Projects
            </div>
          </li>
          <li>
            <div className='d-inline hover-underline-animation' onClick={handleMenuClick} data-section-ref='contactRef'>
              Contact
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
