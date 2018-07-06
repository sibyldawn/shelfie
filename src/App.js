import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import axios from 'axios';
import {Route,Link,Switch} from 'react-router-dom';
import routes from './routes';

const baseUrl='/api/inventory';


class App extends Component {
  constructor(props){
    super(props)

    this.state={
      inventory: [],
    };
  }
 
  componentDidMount() {
    axios.get(`${baseUrl}`).then(response => {  
  
      console.log(response.data);
      this.setState({
        inventory: response.data
      })
    })
  }

  getUpdatedInventory = (updated) => {
    this.setState({
      inventory: updated
    })

  }

  render() {
    const inventory = this.state.inventory.map( r => {
      return <div className ="wrap" key={r.id}>
              <div className="gallery" >
              <img src={r.image_url} alt="product" className="pics"/>
              </div>

              <div className="label-containerFlex">
              <div id="name">{r.name}</div>
                    
                {/* <Edit id={r.id} 
                name={r.name}
                url={r.url}
                image={r.image}
                getUpdatedInventory={this.getUpdatedInventory}
                />
                <Delete id={r.id}
                  action={() => this.deleteRecipe(r.id)}
                /> */}
    </div>
  </div>
    })

    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div className="Body-Flex">BODY 
         <Form/>
           
        </div>
      </div>
    );
  }
}

export default App;
