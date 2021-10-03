const AuthorController = require("../controllers/author.controller");
const Author = require("../models/author.model");

module.exports = app => {
    app.get("/api/authors/all", AuthorController.findAllAuthors);
    app.post("/api/authors/create", AuthorController.createAuthor);
    app.get("/api/authors/:_id", AuthorController.findSingleAuthor);
    app.delete("/api/authors/:_id/delete", AuthorController.deleteSingleAuthor);
    app.patch("/api/authors/:_id/update", AuthorController.updateSingleAuthor);
    // app.put("/api/authors/:_id/addTopping", AuthorController.addTopping);
}