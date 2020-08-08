import React, { Component } from "react";
import ReactDOM from "react-dom";

class CategoriasTissini extends Component {
    
    constructor() {
        super();
        this.state = {
            categorias: [],
            isLoading: false
        }
    }
      


      
      componentDidMount() {
        this.setState({ isLoading: true });
        
        fetch('https://api.tissini.app/api/v2/categories')
        .then(data => data.json())
        .then((data) => {
          this.setState({ categorias: data, isLoading: false });
          console.log(this.state.categorias)
        })
        .catch(console.log)
      }

      render () {
        const { categorias, isLoading } = this.state;

        if (isLoading) {
          return <p>Cargando ...</p>;
        };
        
        return (
             <div>
          <center><h1>Categorias</h1></center>
          {categorias.map((contact) => (
            <div>
            <div className="card" style={{height:"254px", width:"500px", margin:"10px"}}>
              <div className="card-body" style={{backgroundPosition: "center center", backgroundImage: "url(https://api.tissini.app"+contact.image+")" }}>
                
              </div>
            
            </div>
                    <div className="card float-left" style={{height:"120px", width:"240px", margin:"10px"}}>
                    <div className="card-body" style={{backgroundSize:"cover" ,backgroundPosition: "center center", backgroundImage: "url(https://api.tissini.app"+contact.categories[0].image+")" }}>
                    </div>
                    </div>

                    <div className="card float-left" style={{height:"120px", width:"240px", margin:"10px"}}>
                    <div className="card-body" style={{backgroundSize:"cover" ,backgroundPosition: "center center", backgroundImage: "url(https://api.tissini.app"+contact.categories[1].image+")" }}>
                    </div>
                    </div>

                    <div className="card float-left" style={{height:"120px", width:"240px", margin:"10px"}}>
                    <div className="card-body" style={{backgroundSize:"cover" ,backgroundPosition: "center center", backgroundImage: "url(https://api.tissini.app"+contact.categories[2].image+")" }}>
                    </div>
                    </div>

                    <div className="card float-left" style={{height:"120px", width:"240px", margin:"10px"}}>
                    <div className="card-body" style={{backgroundSize:"cover" ,backgroundPosition: "center center", backgroundImage: "url(https://api.tissini.app"+contact.categories[3].image+")" }}>
                    </div>
                    </div>
            </div>
          ))}
        </div>
         );
          
      }
};


export default CategoriasTissini;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<CategoriasTissini />, wrapper) : false;