import React from "react";
import Header from "./components/Header";
import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";

export default class App extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         show: true
      }
   }

   componentDidMount() {
      this.setState({show: true})
   }

   componentWillUnmount() {
      this.setState({show: false})
   }

   render() {
      return (
         <div className="App" onWheel={(e) => { console.log(e) }}>
            <Router>
               <Header />
               <main className={`container mx-auto p-4 ${(this.state.show) ? 'showOn' : 'showOff'}`}>
               {/* <main className="container mx-auto p-4"> */}
                  <Switch>
                     <Route path="/services">
                        <Services />
                     </Route>
                     <Route path="/blog">
                        {/* <Blog /> */}
                     </Route>
                     <Route path="/about-us">
                        {/* <About /> */}
                     </Route>
                     <Route path="/">
                        <Home />
                     </Route>
                  </Switch>
               </main>
            </Router>
         </div>
      );
   }
}