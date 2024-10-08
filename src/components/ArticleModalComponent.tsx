import { useRef } from "react";
import Article from "../models/Article";
import { useGlobalContext } from "../context/GlobalContext";
import clsx from "clsx";

export default function ArticleModalComponent({ article }: { article: Article }) {

	const { state, dispatch } = useGlobalContext();

	const modal = useRef(null);
	const modalBackground = useRef(null);
	
    return(

        <dialog ref={modal} className={clsx({ "w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center": true, "bg-gray-100": state.theme==="light", "bg-gray-900": state.theme==="dark"})}>
            <div onClick={() => dispatch({ type: "TOGGLE_MODAL", payload: undefined })} ref={modalBackground} className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-black opacity-50">
            </div>
            <div className={clsx({ "max-w-screen-xl border border-2 rounded flex flex-col items-center z-10": true, "bg-gray-100": state.theme==="light", "bg-gray-900": state.theme==="dark" })}>
                <h3 className={clsx({"font-bold text-5xl text-center": true, "text-gray-900": state.theme==="light", "text-gray-100": state.theme==="dark"})}>{article.title}</h3>
                <img className="my-3" width={750} src={article.urlToImage} alt="Article image" />
                <p className={clsx({"text-center": true, "text-gray-900": state.theme==="light", "text-gray-100": state.theme==="dark"})}>
                    {article.content}
                </p>
            </div>
        </dialog>

    );

}