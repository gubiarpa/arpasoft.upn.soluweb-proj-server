const { request, response } = require('express');
const { Aplication } = require('../models');
const { ObjectId } = require('mongoose').Types;

const aplicationGet = async(req = request, res = response) => {

    try {

        const { from = 0, limit = 5 } = req.query;
        const query = { state: true };
    
        const [totalRows, aplications] = await Promise.all([
            Aplication.countDocuments(),
            Aplication.find().skip(from).limit(limit)
        ]);
    
        res.json({
            totalRows,
            aplications
        });

    } catch (error) {
        console.error('Can not get list of psalms');
        console.error(error);
        res.status(400).send('Something broke!');
    }
}

const aplicationPost = async(req = request, res = response) => {

    try {
        
        const { name } = req.body;
        const aplication = new Aplication({ name });
        
        const esMongoId = ObjectId.isValid( name );
        if ( esMongoId ) {
            const aplication = await Aplication.findById(name);
            return res.json({
                results: ( aplication ) ? [ aplication ] : []
            })
        }
        
        const regex = new RegExp( name, 'i' );
    
        const aplications = await Psalm.find({
            $or: [ 
                { name: regex },  
            ]
        });
    
        if (aplications.length != 0) {
            return res.json({
                msg: 'Aplication already exists'
            });
        }
    
        await aplication.save();
      
        res.json({
            msg: 'Aplication saved'
        });      

    } catch (error) {
        console.error('Can not create a psalm');
        console.error(error);
        res.status(400).send('Something broke!');
    }    

}

module.exports = {
    aplicationGet,
    aplicationPost,
}
