import './BurgerMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'


function BurgerMenu() {
  return (
    <div className='position-fixed'>
        <FontAwesomeIcon icon={faBurger} />
    </div>
  );
}

export default BurgerMenu;
