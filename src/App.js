import React , {Component} from 'react';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Produit from './components/Produit';
import axios from 'axios';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { produits: []  }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/produits.php')
        .then(res => {
            this.setState({ produits: res.data });
        })
        .catch(function (error) {
            console.log(error);
        })
}

  render() { 
    return (  <div className="col-sm-9 padding-right">
    <Navbar />
    <Slider />
         <div className="features_items">{/*features_items*/}
           <h2 className="title text-center">Features Items</h2>
           {this.state.produits.map((data, i)=> (
             <Produit key={i} produit={data} />
             ))}
        
         </div>{/*features_items*/}
         <div className="category-tab">{/*category-tab*/}
 
           <div className="tab-content">
             <div className="tab-pane fade active in" id="tshirt">
 
             </div>
             <div className="tab-pane fade" id="blazers">
    
 
             </div>
             <div className="tab-pane fade" id="sunglass">
        
       
             </div>
           </div>
         </div>{/*/category-tab*/}
 
       </div> );
  }
}
 
export default App;
