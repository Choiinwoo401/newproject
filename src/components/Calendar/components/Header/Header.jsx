import styles from './Header.module.scss';
import HeaderButtons from './HeaderButtons.jsx';
import HeaderSearch from './HeaderSearch.jsx';
import Profileview from '../../../Profile/Profileview';

const Header = ({ quickActive, setQuickActive, searchActive, setSearchActive }) => {
  return (
    <header className={styles.header}>
      <Profileview/>
      <div className={[styles.container, 'container'].join(' ')}>
        <div className={styles.control}>
          <HeaderButtons quickActive={quickActive} setQuickActive={setQuickActive} />

          <HeaderSearch searchActive={searchActive} setSearchActive={setSearchActive} />
        </div>
      </div>
    </header>
  );
};

export default Header;
