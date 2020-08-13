import React, { Component } from "react";
import ReactDOM from "react-dom";
import Carousel from 'react-bootstrap/Carousel';



class CatalogosTissini extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Categoria: [],
            Productos: [],
            SubCategorias: [],
            isLoading: false,
            idC: props.match.params.idC,
            urlApp: "https://api.tissini.app"
        }
    }
      


      
      componentDidMount() {
        this.setState({ isLoading: true });
        
        fetch('https://api.tissini.app/api/v2/categories/'+this.state.idC+'/products')
        .then(data => data.json())
        .then((data) => {
          this.setState({ Categoria: data.categories, isLoading: false, Productos: data.products, SubCategorias: data.categories.categories });
        })
        .catch(console.log)
      }

      render () {
        const categoria = this.state.Categoria;
        const subCategorias = this.state.SubCategorias;
        const productos = this.state.Productos;
        const isLoading = this.state.isLoading;
        
               
          //console.log(categoria);
          //console.log(productos);
          //console.log(subCategorias);

        if (isLoading) {
          return <p>Cargando ...</p>;
        };
        
        return (
        <div>
           <center>
           <h1>Categoria</h1>
          <div className="card" style={{height:"254px", width:"500px", margin:"10px"}}>
              <div className="card-body" style={{backgroundPosition: "center center", backgroundImage: "url("+this.state.urlApp+categoria.image+")" }}>
                
              </div>
            
          </div>
          </center>
          <center>
          <h2>Sub Categorias</h2>
          
          <div className="card" style={{height:"254px", width:"500px", margin:"10px"}}>

            <Carousel>
            {subCategorias.map((contact, key) => (

            <Carousel.Item key={key}>
                <img
                  className="d-block w-100"
                  src={this.state.urlApp + contact.image}
                  alt="First slide"
                />
             </Carousel.Item>

                        
            ))}

            </Carousel>

          </div>
          </center>
          <center>
          <h2>Productos</h2>
                    
            {productos.map((contact, key) => (
                    <div key={key} className="card float-left" style={{height:"120px", width:"240px", margin:"10px"}}>
                    <div className="card-body" style={{backgroundSize:"cover" ,backgroundPosition: "center center", backgroundImage: "url("+this.state.urlApp+contact.images[0]+")" }}>
                    {contact.name}                    
                    </div>
                    </div>
            ))}

          </center>
       
        
        </div>
         );
          
      }
};


export default CatalogosTissini;

//const wrapper = document.getElementById("container");
//wrapper ? ReactDOM.render(<CatalogosTissini idC="2"/>, wrapper) : false;