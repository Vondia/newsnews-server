// to run the server use --> npx nodemon server.js
const { response } = require("express");
const express = require("express");
const app = express();
const data = require("./data.json");
const port = 4000;

console.log(data);
app.get("/articles", (request, response) => {
  response.send(data.articles);
});

app.get("/articles/:id", (request, response) => {
  const id = request.params.id;
  const singleArticle = data.articles.find((article) => article.id === id);
  response.send(singleArticle);
});

app.get("/articles/:id/comments", (request, response) => {
  const id = request.params.id;
  const articleComments = data.comments.filter(
    (comment) => comment.articleId === id
  );
  response.send(articleComments);
});
app.get("/categories/:categoryId/articles", (request, response) => {
  const categoryId = request.params.categoryId;
  const articleCategories = data.articles.filter(
    (article) => article.categoryId === categoryId
  );
  response.send(articleCategories);
});

app.listen(port, () => console.log(`listening: ${port}`));
