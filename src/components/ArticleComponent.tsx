import { useState } from "react";
import Article from "../models/Article";
import ArticleModalComponent from "./ArticleModalComponent";
import { useGlobalContext } from "../context/GlobalContext";
import clsx from "clsx";

export default function ArticleComponent({ article }: { article: Article }) {

    const { state, dispatch } = useGlobalContext();
    const [showModal, setShowModal] = useState<boolean>(false);

    return(

        <>
            <div onClick={() => setShowModal(true)} className="p-3 flex flex-col items-center max-w-screen-lg mb-5 border border-2 rounded cursor-pointer">
                <h3 className={clsx({"font-bold text-5xl text-center": true, "text-black": state.theme==="light", "text-white": state.theme==="dark"})}>{article.title}</h3>
                <img className="my-3" width={750} src={article.urlToImage} alt="Article image" />
                <p className={clsx({"text-center": true, "text-black": state.theme==="light", "text-white": state.theme==="dark"})}>
                    {article.description}
                </p>
            </div>
            {
                showModal &&
                <ArticleModalComponent article={article} />
            }
        </>

    );

}