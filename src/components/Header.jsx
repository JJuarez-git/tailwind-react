import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         open: false
      }
   }

   render() {
      return (
         <header className="sticky top-0 bg-gray-100">
            <div className="py-4 px-4 flex justify-between sm:justify-start items-center relative">
               <h1 className="font-bold mr-6 text-xl">
                  <Link to="/">Beta</Link>
               </h1>
               <nav className={`${(this.state.open) ? 'block' : 'hidden sm:block'} nav`}>
                  <ul className="space-y-3 sm:space-y-0">
                     <li className="nav-item">
                        <Link to="/services">Services</Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/blog">Blog</Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/about-us">About us</Link>
                     </li>
                  </ul>
               </nav>
               <span className="material-icons inline-block sm:hidden cursor-pointer" onClick={() => {this.setState({open: !this.state.open})}}>
                  {(this.state.open) ? 'close' : 'menu'}
               </span>
            </div>
         </header>
      );
   };
}