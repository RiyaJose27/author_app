const Author = require("../models/author.model");

module.exports.findAllAuthors = (req,res) => {
    console.log("hey it's me, the find all function!");

    Author.find({})
        .then(allAuthors => res.json({results: allAuthors}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({results: newAuthor}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.findSingleAuthor = (req,res) => {
    Author.findOne({_id: req.params._id})
        .then(singleAuthor => res.json({results: singleAuthor}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.deleteSingleAuthor = (req,res) => {
    Author.deleteOne({_id: req.params._id})
        .then(results => res.json({results: results}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.updateSingleAuthor = (req,res) => {
    Author.updateOne({_id:req.params._id},
        req.body,
        {runValidators: true})
        .then(singleAuthor => res.json({results: singleAuthor}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

// module.exports.addTopping = (req,res) => {
//     Author.updateOne({_id: req.params._id},
//         {$push: {toppings: req.body.topping}})
//         .then(singleAuthor => res.json({results: singleAuthor}))
//         .catch(err => res.json({message: "that didn't quite work", err}))
// }
