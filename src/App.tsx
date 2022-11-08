import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header' 
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import reportWebVitals from './reportWebVitals';
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio';
import {useRef, useEffect} from 'react';

// const navbar =  document.querySelector('.navbar') as HTMLElement | null;  
//  const box = document.querySelector('.container') as HTMLDivElement | null;
//  console.log("box?.innerHTML");

// //  var test=useEffect(() => {
// //   const searchQuery = document.querySelector(".navbar").value;
// //   console.log(searchQuery);
// // }, []);
//  console.log(box?.innerHTML);
// const input = document.querySelector('#navbar') as HTMLElement | null;

// if (input != null) {
//   console.log("input");
//   console.log(input); // 👉️ "Initial value"
// }

// const navbarOffsetTop =box?.offsetTop as number ;
// // console.log(navbarOffsetTop)
//  console.log(navbar)
// const sections = document.querySelectorAll("section");
// const navbarLinks =document.querySelector('.navbar-link') as any | null;  
// const progress = document.querySelector('.progress-bars-wrapper') as any | null; 
// const progressBarPercents = [97, 89, 85, 87, 80, 70, 50] ;
// const progressPercent=document.querySelectorAll(".progress-percent")  as any | null;

// window.addEventListener("scroll", () => {
//   mainFn();
// });

// const mainFn = () => {
 
//   if (window.pageYOffset >= navbarOffsetTop) {
//     // console.log("navbarOffsetTop")
//     // console.log(navbarOffsetTop)
//     navbar?.classList.add("sticky");
//   } else {
//       // console.log(window.pageYOffset)
//         // console.log("window.pageYOffset")
//         // console.log(navbarOffsetTop)
//         // console.log(navbar)
//     navbar?.classList.remove("sticky");
//   }

//   sections.forEach((section, i) => {
//     if (window.pageYOffset >= section.offsetTop - 10) {
//       navbarLinks?.forEach((navbarLink:any) => {
//         navbarLink.classList.remove("change");
//       });
//       navbarLinks[i].classList.add("change")
//     }
//   });

//   if (window.pageYOffset + window.innerHeight >= progress?.offsetTop) {
//     progressPercent.forEach((el:any, i:any) => {
//       el.style.width = `${progressBarPercents[i]}%`;
//       el.previousElementSibling.firstElementChild.textContent =
//         progressBarPercents[i];
//     });
//   }
// };



window.addEventListener("resize", () => {
  window.location.reload();
});
function App() {

  const ref = useRef(null);
  const sections = document.querySelectorAll("section") ;
  const navbarLinks =document.querySelector('.navbar-link') as any | null;  
  const progress = document.querySelector('.progress-bars-wrapper') as any | null; 
  const progressBarPercents = [97, 89, 85, 87, 80, 70, 50] ;
  const progressPercent=document.querySelectorAll(".progress-percent")  as any | null;
  const navbar = document.querySelector('#navbar') as HTMLElement;
  let navbarOffsetTop =navbar?.offsetTop as number;

  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });


  useEffect(() => {
    console.log("effect:" + navbarOffsetTop);
    console.log("scrolly:" + scrollY);

    //  window.addEventListener("scroll", () => {
    //   mainFn();
    // });
    navbarOffsetTop = navbar?.offsetTop;

    if (scrollY >= navbarOffsetTop) {    
      navbar?.classList.add("sticky");
    } else {    
      navbar?.classList.remove("sticky");
    } 
  }, [scrollY]);
  return (

  <React.StrictMode>
    <Header/>
    <Menu/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </React.StrictMode>


  );
}

export default App;
