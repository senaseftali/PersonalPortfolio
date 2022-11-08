
import './Menu.css';

function Menu() {
  return (
    <div className="container">
    <nav className="navbar center" id="navbar">
    <a href="#section-1" className="navbar-link">Home</a>
    <a href="#section-2" className="navbar-link">About</a>
    <a href="#section-3" className="navbar-link">Portfolio</a>
    <a href="#section-4" className="navbar-link">Contact</a>
  </nav>
  </div>
  );
}
// const navbar =  document.getElementById('#navbar') as HTMLElement | null;
// const navbarOffsetTop =navbar?.offsetTop as number ;
// console.log(navbarOffsetTop)
// console.log(navbar)
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
//     navbar?.classList.add("sticky");
//   } else {
//     console.log(window.pageYOffset)
//     console.log("window.pageYOffset")
//     console.log(navbarOffsetTop)
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

// mainFn();

// window.addEventListener("resize", () => {
//   window.location.reload();
// });


export default Menu;
