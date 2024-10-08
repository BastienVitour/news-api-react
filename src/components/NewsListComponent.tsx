import Article from "../models/Article";
import ArticleComponent from "./ArticleComponent";

export default function NewsListComponent({ news } : { news: Article[] }) {

    return (
        <div className="flex flex-col items-center">
            {
                news && news.length > 0 &&
                news.map((article: Article, index: number) => {
                    if(article.author !== null && article.description !== "[Removed]") {
                        return(
                            <ArticleComponent article={article} key={index} />
                        )
                    }
                })
            }
        </div>
    );

}