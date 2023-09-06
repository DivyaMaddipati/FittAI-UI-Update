// export default App;
// // import React, { useState } from 'react';
// // import './App.css';
// // import { Body } from './Components/Body';
// // import { Shop } from './Components/Shop';
// // import WebcamComponent from './Components/Webcam';
// // import { Header } from './Components/Header';
// // import { BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';

// // function App() {
// //   const [isCamClicked, setIsCamClicked] = useState(false);

// //   const handleButtonClick = () => {
// //     setIsCamClicked(true);
// //   };

// //   return (
// //     <Router>
// //       <div className="App">
// //         <header className="App-header">
// //           <Header /><br></br>
// //           <button className="btn btn-primary center-button"
// //             onClick={handleButtonClick}
// //             disabled={isCamClicked}
// //           >
// //             {isCamClicked ? 'Scanning...' : 'Try New Fit AI'}
// //           </button>
// //         </header>

// //         <BrowserRouter>
// //           <Route path="/shop" component={Shop} />
// //           <Route path="/webcam" component={WebcamComponent} />
// //           <Route path="/" component={Body} />
// //         </BrowserRouter>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;



import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import HeaderF from './Components/HeaderF';
import SignUp from './Components/Signup';
import Gender from './Components/Gender' ;
import Fit from './Components/Fit';
import Entry from "./Components/Entry";
import Webcam from './Components/Webcam';

function App() {

  return (
    <div className="App">

<BrowserRouter>
               {/* <HeaderF />  */}

                <Routes>
                    <Route path="/" element={<SignUp />}/>
                    <Route path="/gender" element={<Gender />} /> 
                    <Route path="/fit" element={<Fit />} />
                    <Route path="/entry" element={<Entry />} />
                    <Route path='/webcam' element={<Webcam />} />
                </Routes>


        </BrowserRouter>
                
    </div>
  );
}

export default App;
