module.exports = {
    create: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { name, price, image_url } = req.body;
  
      dbInstance.create_product( {name, price, image_url} )
        .then( () => res.status(200).send(product) )
        .catch( err => {
          res.status(500).send({errorMessage: "ERROR"});
          console.log(err)
        } );
    },
  
    getOne: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;
  
      dbInstance.read_product( id )
        .then( product => res.status(200).send( product ) )
        .catch( err => {
          res.status(500).send({errorMessage: "ERROR"});
          console.log(err)
        } );
    },
  
    getAll: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_products()
        .then( inventory => res.status(200).send( inventory ) )
        .catch( err => {
          res.status(500).send({errorMessage: "ERROR"});
          console.log(err)
        } );
    },
  
    update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const product = req.body;
        const {id} = req.params;
        dbInstance.update_product(
            {
                id: id,
                name: product.name,
                price: product.price,
                image_url: product.image_url,
                
            }
        ).then((newProduct)=>{
                response.json(newProduct[0]);
            }).catch(error => {
                console.log('error',error);
                response.status(500).send('There was an error on the server.')
            })
    },
  
    delete: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;
      console.log('hit',id);
      dbInstance.delete_product(id)
        .then( () => res.sendStatus(200) )
        .catch( err => {
          res.status(500).send({errorMessage: err});
          console.log(err)
        } );
    }
  };