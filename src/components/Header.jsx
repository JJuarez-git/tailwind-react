import React from "react";

export class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         open: false
      }
   }
   toggleMenu = () => {
      this.setState({
         open: !this.state.open
      });
   }

   render() {
      return (
         <header className="bg-white shadow-sm sticky top-0">
            <div className="py-4 px-5 flex justify-between sm:justify-start items-center relative">
               <h1 className="font-bold mr-6 text-xl">Beta</h1>
               <nav className={`${(this.state.open) ? 'block' : 'hidden sm:block'} nav`}>
                  <ul className="space-y-3 sm:space-y-0">
                     <li className="nav-item">Services</li>
                     <li className="nav-item">Blog</li>
                     <li className="nav-item">About us</li>
                  </ul>
               </nav>
               <span className="material-icons inline-block sm:hidden cursor-pointer" onClick={this.toggleMenu}>
                  {(this.state.open) ? 'close' : 'menu'}
               </span>
            </div>
         </header>
      );
   };
}