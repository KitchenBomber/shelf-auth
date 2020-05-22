const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    const shelfItem = `SELECT * FROM "item";`
    pool.query(shelfItem)
    .then((response) =>{
        res.send(response.rows)
    }).catch((error) =>{
        console.log('error in router.get', error);
        res.sendStatus(200); // For testing only, can be removed
    })
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    const shelfItem = `INSERT INTO "item"("description", "image_url", "user_id")
    VALUES ($1, $2, $3);`;
    console.log('!!!!!!!!!!!', req.body)
    const values = [req.body.description, req.body.image_url, req.user.id];
    pool.query(shelfItem, values)
    .then((response) =>{
       res.sendStatus(201)
    })
    .catch((error) =>{
        console.log('error in router POST', error);
    })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    //console.log(req.params.id)
    //const shelfItem = `DELETE FROM "item" WHERE "id" = $1;`;
    //pool.query(shelfItem, [req.params.id])
    //.then((response) =>{
        //res.sendStatus(200);
    //})
    //.catch((error) =>{
        //console.log('error deleting item from DB', error);
        //res.sendStatus(500);
    //})
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;