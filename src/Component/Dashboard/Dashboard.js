import React, { Component } from 'react';
import axios from 'axios';
const baseUrl='/api/inventory';

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            inventory: [],
            name: '',
            price: 0,
            imageUrl: 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg'
        }
    }

    componentDidMount(){
        axios.get(`${baseUrl}`).then(response=>{
            this.setState({
                inventory: response.data
            })
        })
    }
    render() {
        const inventory = this.state.inventory.map( r => {
            return <div className ="wrap" key={r.id}>
                    <div className="gallery" >
                    <img src={r.image_url} alt="product"/>
                    </div>
      
                    <div className="label-containerFlex">
                    <div id="name">{r.name}</div>
                    <div id="price">{r.price}</div>
                          
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
        <div>    
            <div className="dashboard">
                <div>{inventory}</div>
            </div>
        </div>
        );
    }
}