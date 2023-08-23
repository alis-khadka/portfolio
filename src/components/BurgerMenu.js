import './BurgerMenu.scss';

function BurgerMenu(props) {
  const handleClick = (event) => {
    if (event.currentTarget.classList.contains('openned')) {
      event.currentTarget.classList.remove('openned');
    } else {
      event.currentTarget.classList.add('openned');
    }
  };

  const handleMenuClick = (event) => {
    props[
      event.currentTarget.getAttribute('data-section-ref')
    ].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='burger-menu' className='open' onClick={handleClick}>
      <span className='cls'></span>
      <span>
        <ul className='sub-menu '>
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
      </span>
      <span className='cls'></span>
    </div>
  );
}

export default BurgerMenu;
