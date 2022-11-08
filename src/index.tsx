import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header' 
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import reportWebVitals from './reportWebVitals';
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(
//   <React.StrictMode>
//     <Header/>
//     <Menu/>
//     <About/>
//     <Portfolio/>
//     <Contact/>
//     <Footer/>
//   </React.StrictMode>
// );

root.render(
  <React.Fragment>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
