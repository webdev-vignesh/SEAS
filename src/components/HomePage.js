import BgImage from '../assets/home_bg.png';

function HomePage() {
    return (
      <div id="home">
        <img src={BgImage} alt="home" className="h-[100vh] w-[100%]" />
      </div>
    );
  }
  
  export default HomePage;
  