import Article from "../models/Article";
import { useGlobalContext } from "../context/GlobalContext";
import clsx from "clsx";

export default function ArticleComponent({ article }: { article: Article }) {

    const { state, dispatch } = useGlobalContext();

    return(

        <>
            <div onClick={() => dispatch({ type: "TOGGLE_MODAL", payload: article })} className="p-3 flex flex-col items-center max-w-screen-lg mb-5 border border-2 rounded cursor-pointer">
                <h3 className={clsx({"font-bold text-5xl text-center": true, "text-gray-900": state.theme==="light", "text-gray-100": state.theme==="dark"})}>{article.title}</h3>
                <img className="my-3" width={750} src={article.urlToImage} alt="Article image" />
                <p className={clsx({"text-center": true, "text-gray-900": state.theme==="light", "text-gray-100": state.theme==="dark"})}>
                    {article.description}
                </p>
            </div>
        </>

    );

}