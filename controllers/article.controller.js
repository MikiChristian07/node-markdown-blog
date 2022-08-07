import ArticleService from '../services/articles.service.js';

class ArticleController{
    async createArticle(req, res){
        const data = {
            title: req.body.title,
            description: req.body.description,
            markdown: req.body.markdown,
        };

        const newArticle = await ArticleService.create(data);

        if(!newArticle) {
            res.status(500).send({
                success: false,
                message: 'Cannot post this article'
            })
        }
        res.redirect(`/articles/${newArticle.id}`);
        res.render('articles/new');
    }
};

export default new ArticleController();