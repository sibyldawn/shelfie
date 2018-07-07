import React, { Component } from 'react';
import axios from 'axios';
import './Form.css'



const baseUrl='/api/inventory';

export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            name:'',
            price: 0,
            imageUrl: 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg'
        }
        this.addProduct = this.addProduct.bind(this);
    }

    addProduct() {
        let newProduct = {
          name: this.state.name,
          price: this.state.price,
          imageUrl: this.state.price
        };
        axios.post(`${baseUrl}`, newProduct).then(response =>{
            console.log('newProduct',response.data)
            this.props.getUpdatedInventory(response.data)
        })
    
      }
    handleChange = (key, value) => {

        this.setState({
            [key]: value
        })
    }

    resetForm = () => {
        this.setState({
                name:'',
                price: 0,
                imageUrl: "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg",   
        })
    }

    render() {
        console.log(this.state.name);
        return (
        <div className="form">
            <div className="image"><img src="http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"/></div>
            <input name="name" placeholder="name"
            onChange={(e)=>this.handleChange(e.target.name, e.target.value)}/><br/>
            <input name="price" placeholder="price"
            onChange={(e)=>this.handleChange(e.target.price,e.target.value)}/><br/>
            <input name="imageUrl" placeholder="image URL"
            onChange={(e)=>this.handleChange(e.target.imageUrl,e.target.value)}/><br/>
            <button onClick={this.resetForm}>Cancel</button>
            <button onClick={this.props.addProductFn}>Add to Inventory</button>
            
        </div> )
    }
}