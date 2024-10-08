import { useGlobalContext } from "../context/GlobalContext";
import Article from "../models/Article";
import ArticleComponent from "./ArticleComponent";

export default function NewsListComponent() {

    const { state, dispatch } = useGlobalContext();

    return (
        <div className="flex flex-col items-center">
            {
                state.articles.length > 0 &&
                state.articles.map((article: Article, index: number) => {
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