import { useState } from "react";
import Article from "../models/Article";
import ArticleModalComponent from "./ArticleModalComponent";
import { useGlobalContext } from "../context/GlobalContext";

export default function ArticleComponent({ article }: { article: Article }) {

    const { state, dispatch } = useGlobalContext();
    const [showModal, setShowModal] = useState<boolean>(false);

    return(

        <>
            <div onClick={() => setShowModal(true)} className="p-3 flex flex-col items-center max-w-screen-lg mb-5 border border-2 rounded cursor-pointer">
                <h3 className="font-bold text-5xl text-center" style={{ color: state.theme === "light" ? "black": "white" }}>{article.title}</h3>
                <img className="my-3" width={750} src={article.urlToImage} alt="Article image" />
                <p className="text-center" style={{ color: state.theme === "light" ? "black": "white" }}>
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