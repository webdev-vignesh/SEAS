import BgLogo from '../assets/home_bg.png';

function HomePage() {
    return (
      <div className="HomePage" style={{ height: '80vh'}}>
        <img src={BgLogo} style={{ height: '80vh' , width: '100%', marginLeft: 'auto', marginRight: 'auto'}}/>
      </div>
    );
  }
  
  export default HomePage;
  