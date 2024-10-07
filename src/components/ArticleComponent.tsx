import Article from "../models/Article";

export default function ArticleComponent({ article }: { article: Article }) {

    return(

        <div>
            <h3>{article.title}</h3>
            <p>
                {article.description}
            </p>
            <img width={1000} src={article.urlToImage} alt="Article image" />
            {article.publishedAt}
        </div>

    );

}