import Article from "../models/Article";
import ArticleComponent from "./ArticleComponent";

export default function NewsListComponent({ news } : { news: Article[] }) {

    return (
        <>
            {
                news && news.length > 0 &&
                news.map((article: Article) => {
                    return(
                        <ArticleComponent article={article} />
                    )
                })
            }
        </>
    );

}