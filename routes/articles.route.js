import express from 'express';
import Article from '../models/article.model.js'
import ArticleController from '../controllers/article.controller.js';

const articleRoute = express.Router();

articleRoute.get('/new', (req, res) => {
    res.render('articles/new', {article: new Article()});
})

articleRoute.get('/:id', ArticleController.articleById);

articleRoute.post('/new', ArticleController.createArticle);
export default articleRoute;