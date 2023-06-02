const express = require('express');
const promotionRouter = express.Router();

// Routing methods: takes a path as the first parameter, the second is a callback function taking the parameters req, res, next
promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
    // next() will pass control of the application routing to the next relevant routing method after this one.
})
.get((req, res) => {
    // No need for a next function as this will be the final method.
    res.end('Will send all the promotion campsites to you');
})
.post((req, res) => {
    res.end(`Will add the promotion campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotion campsites');
});

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res) => {
    res.end(`Will send details of the promotion campsite: ${req.params.promotionId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /promotions/${req.params.promotionId}`);
})
.put((req, res) => {
    res.write(`Updating the promotion campsite: ${req.params.promotionId}\n`);
    res.end(`Will update the promotion campsite: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleing promotion campsite: ${req.params.promotionId}`);
});


module.exports = promotionRouter;