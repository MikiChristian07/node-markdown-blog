import _ from 'lodash';
import ArticleService from '../services/articles.service.js';

class ArticleController{
    async createArticle(req, res){
        const data = {
            title: req.body.title,
            description: req.body.description,
            markdown: req.body.markdown,
        };
        
        try{
            const newArticle = await ArticleService.create(data);
            res.redirect(`/articles/${newArticle.id}`);
        } catch (e) {
            res.render('articles/new', { article: data })
        }
    }

    async getArticles(req, res){
        const allArticles = await ArticleService.fetchAll(req.params.id)
    }

    async articleById(req, res){
        const article = await ArticleService.findById(req.params.id);
        
        if (_.isEmpty(article)){
            res.redirect('/')
        }
        res.render('articles/show', { article: article })
    }
};

export default new ArticleController();