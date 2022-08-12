import Article from '../models/article.model.js';

class ArticleService {
    async create(data){
        const newArticle = await Article.create(data);
        return newArticle
    }

    async findById(id){
        const articleId = await Article.findById(id);
        return articleId;
    }

    async fetchAll(){
        const allArticles = await Article.find();
        return allArticles;
    }
};

export default new ArticleService(); 