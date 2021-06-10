import logo from '../../logo.svg';
import '../../SCSS/main.scss';

const Header = () => {
  return (
    <div className='Header'>
      <header className='Header-header'>
        <img src={logo} className='Header-logo' alt='logo' />
        <h2>React Form Validation Demo</h2>
      </header>
    </div>
  );
};

export default Header;
