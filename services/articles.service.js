import Article from '../models/article.model.js';

class ArticleService {
    async create(data){
        const newArticle = await Article.create(data);
        return newArticle
    }

    async findBySlug(id){
        const articleId = await Article.findOne({ slug: id });
        return articleId;
    }

    async fetchAll(){
        const allArticles = await Article.find().sort({
            createdAt: 'desc'
        });
        return allArticles;
    }

    async delete(id){
        const deleteArticle = await Article.findByIdAndDelete(id);
        return deleteArticle;
    }
};

export default new ArticleService(); 