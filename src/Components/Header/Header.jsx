import logo from '../../logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <header className='heading'>
        <img src={logo} className='header-logo' alt='logo' />
        <h2>React Form Validation Demo</h2>
      </header>
    </div>
  );
};

export default Header;
