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
            imgUrl: ''
        }
    }

    addProduct() {
        let newProduct = {
          name: this.name.value,
          price: this.price.value,
          image: this.imageUrl.value
        };
        axios.post(`${baseUrl}`, newProduct).then(response =>{
            this.props.getUpdatedInventory(response.data)
        })
    
      }
    handleChange = (key, value) => {

        this.setState({
            [key]: value
        })
    }

    render() {
        return (
    <div>
     <div className ="forms">
                      <input placeholder="IM HERE!!!"/>
           
       </div>
    </div>
        );
    }
}