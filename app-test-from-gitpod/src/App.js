import React from 'react';
import Carousal from './components/carousal/index'
import images from './components/json-data/images'

function App() {
  return (
    <div className="App">
     <Carousal images={images}/>
    </div>
  );
}

export default App;
