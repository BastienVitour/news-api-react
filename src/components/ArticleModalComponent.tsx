import Article from "../models/Article";

export default function ArticleModalComponent({ article }: { article: Article }) {

    return(

        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center">
            <div className="w-[100vw] h-[100vh] fixed top-0 left-0  bg-black opacity-50">
            </div>
            <div className="max-w-screen-xl border border-2 rounded bg-white flex flex-col items-center z-10">
                <h3 className="font-bold text-5xl text-center">{article.title}</h3>
                <img className="my-3" width={750} src={article.urlToImage} alt="Article image" />
                <p className="text-center">
                    {article.content}
                </p>
            </div>
        </div>

    );

}