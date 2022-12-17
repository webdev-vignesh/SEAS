import Logo from '../assets/logo.png';

function NavBar() {
    return (
      <div className="Navbar" style={{ height: '15vh'}}>
        <div>
            <img src={Logo} alt='logo' style={{height: 80}} />
        </div>
      </div>
    );
  }
  
  export default NavBar;
  