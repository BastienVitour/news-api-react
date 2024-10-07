import Article from "../models/Article";

export default function ArticleComponent({ article }: { article: Article }) {

    return(

        <div className="p-3 flex flex-col items-center max-w-screen-lg mb-5 border border-2 rounded cursor-pointer">
            <h3 className="font-bold text-5xl text-center">{article.title}</h3>
            <img className="my-3" width={750} src={article.urlToImage} alt="Article image" />
            <p className="text-center">
                {article.content}
            </p>
        </div>

    );

}