import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap';
import Bar from './navBar' 
import Yumbo from './jumbo'
import Card from './component/card'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Footer from './component/footer';

class App extends Component{
  render(){
      return (
        <div className="app">
          <Bar />
          <Yumbo />
          <div class="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-lg-4 mr-0">
                <Card
                  name="Gonzalo"
                  description="First place as a student in 4geeks with props and bootstarp getting on fire in 4geeks and more and the end of the proyect !! "
                  url="https://via.placeholder.com/500x325.png"
                  boton="Que wua!"
                />
              </div>
              <div className="col-md-6 col-sm-12 col-lg-4">
                <Card
                  name="Miguel"
                  description="Me dedico al desarrollo de software porque me gustan las ilimitadas posibilidades que brinda. Me considero una persona autodidacta, a la cual "
                  url="https://via.placeholder.com/500x325.png"
                  boton="Perro!"
                />
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4">
                <Card
                  name="Jonathan"
                  description="Ingeniero de sistemas, egresado de la Universidad Santa María en Venezuela, especialista en soporte ti, sistemas CCTV, redes informáticas"
                  url="https://via.placeholder.com/500x325.png"
                  boton="Gato"
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
}
}
ReactDOM.render(<App />, document.getElementById("root"));
