const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios')

//const getCharById = (req, res) =>{
//    const { id } = req.params;
//
//    axios(`${URL}/${id}`)//por default hace el get
//    .then(response => response.data)
//    .then(({status, name, species, origin, image, gender}) =>{
//       if(name){
//           const character={
//                id,
//                status,
//                name,
//                species,
//                origin,
//                image,
//                gender
//            }
//
//            return res.status(200).json(character)
//        }
//        return res.status(400).send('not found')
//    })
//    .catch(error => res.status(500).send(error.message))
//} 

const getCharById = async (req, res) =>{
    try{
        const { id } = req.params;

        const { data } = await axios(`${URL}/${id}`)
        const {status, name, species, origin, image, gender} = data
        if(!name) throw new Error(`Faltan datos del personaje con ID: ${id} `)
           const character={
                id,
                status,
                name,
                species,
                origin,
                image,
                gender
            }
        return res.status(200).json(character)
         
       // return res.status(400).send('not found')
    }
    catch(error){
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.message)
    }
}

module.exports ={
    getCharById
}