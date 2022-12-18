import { Icon } from '@iconify/react';

function Drawer() {
    return (
      <div className="Drawer sm:invisible grid col-start-4" style={{ height: '15vh'}}>
        <button className="justify-self-center mb-12"><Icon icon="humbleicons:view-list" height="40" /></button>
      </div>
    );
  }
  
  export default Drawer;
  