import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio';
import { useEffect } from 'react';


function App() {

  const progress = document.querySelector('.progress-bars-wrapper') as any | null;
  const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];
  const progressPercent = document.querySelectorAll(".progress-percent") as any | null;
  const navbar = document.querySelector('#navbar') as HTMLElement;
  let navbarOffsetTop = navbar?.offsetTop as number;

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
    navbarOffsetTop = navbar?.offsetTop;

    if (scrollY > navbarOffsetTop) {
      navbar?.classList.add("sticky");
    } else {
      navbar?.classList.remove("sticky");
    }

    if (window.pageYOffset + window.innerHeight >= progress?.offsetTop) {
      progressPercent.forEach((el: any, i: any) => {
        el.style.width = `${progressBarPercents[i]}%`;
        el.previousElementSibling.firstElementChild.textContent =
          progressBarPercents[i];
      });
    }

  }, [scrollY]);
  return (

    <React.StrictMode>
      <Header />
      <Menu />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </React.StrictMode>


  );
}

export default App;
