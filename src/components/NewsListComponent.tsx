import { useGlobalContext } from "../context/GlobalContext";
import Article from "../models/Article";
import ArticleComponent from "./ArticleComponent";

export default function NewsListComponent({ news } : { news: Article[] }) {

    const { state, dispatch } = useGlobalContext();

    return (
        <div className="flex flex-col items-center" style={{ backgroundColor: state.theme === "light" ? "white": "black" }}>
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