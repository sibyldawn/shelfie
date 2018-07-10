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
    // this.addProduct = this.addProduct.bind(this);
  }
 
  componentDidMount() {
    axios.get(`${baseUrl}`).then(response => {  
  
      console.log(response.data);
      this.setState({
        inventory: response.data
      })
    })
  }
  // addProduct(newProduct) {
  //   let newProduct = {
  //     name: this.name.value,
  //     price: this.price.value,
  //     imageUrl: this.imageUrl.value
  //   };
  //   axios.post(`${baseUrl}`, newProduct).then(response =>{
  //       console.log('newProduct',response.data)
  //       this.getUpdatedInventory(response.data)
  //   })
  // }


  getUpdatedInventory = (updated) => {
    this.setState({
      inventory: updated
    })

  }

  render() {
    return (
      <div className="App">
        <Header/>
        {routes}
      </div>
    );
  }
}

export default App;
