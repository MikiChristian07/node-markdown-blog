import Article from '../models/article.model.js';

class ArticleService {
    async create(data){
        const newArticle = await Article.create(data);
        return newArticle
    }
};

export default new ArticleService(); 