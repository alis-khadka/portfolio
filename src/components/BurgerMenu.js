import './BurgerMenu.scss';

function BurgerMenu() {
  const handleClick = (event) => {
    if (event.currentTarget.classList.contains('openned')) {
      event.currentTarget.classList.remove('openned');
    } else {
      event.currentTarget.classList.add('openned');
    }
  };

  const handleMenuClick = (event) => {
    document
      .getElementById(event.currentTarget.getAttribute('data-section-id'))
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='burger-menu' className='open' onClick={handleClick}>
      <span className='cls'></span>
      <span>
        <ul className='sub-menu '>
          <li onClick={handleMenuClick} data-section-id='introduction'>
            Home
          </li>
          <li onClick={handleMenuClick} data-section-id='about'>
            About
          </li>
          <li onClick={handleMenuClick} data-section-id='projects'>
            Projects
          </li>
          <li onClick={handleMenuClick} data-section-id='skills'>
            Skills
          </li>
          <li onClick={handleMenuClick} data-section-id='contact'>
            Contact
          </li>
        </ul>
      </span>
      <span className='cls'></span>
    </div>
  );
}

export default BurgerMenu;
