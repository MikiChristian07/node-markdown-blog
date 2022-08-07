import express from 'express';
import articleRoute from './articles.route.js';

const router = express.Router();

router.get('/', (req, res) => {
    const article = [{
        title: 'Some random Title',
        createdAt: new Date(),
        description: 'Some random description...'
    }]
    res.render("articles/index", { article })
})

router.use('/articles', articleRoute)

export default router;