import express from 'express';
import ArticleController from '../controllers/article.controller.js';

const articleRoute = express.Router();

articleRoute.get('/new', (req, res) => {
    res.render('articles/new');
})

articleRoute.get('/:id', (req, res) => {
    res.send({
        success: true,
        message: 'Saved to the database'
    })
})

articleRoute.post('/new', ArticleController.createArticle);
export default articleRoute;