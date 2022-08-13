import express from 'express';
import articleRoute from './articles.route.js';
import ArticleService from '../services/articles.service.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const article = await ArticleService.fetchAll();
    res.render("articles/index", { article })
})

router.use('/articles', articleRoute)

export default router;