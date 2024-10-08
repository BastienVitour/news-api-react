import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import clsx from "clsx";

export default function SearchBarComponent() {

    const handleSubmit = async (e: any) => {
        e.preventDefault();

    }

    const searchBar = useRef(null);

    useEffect(() => {
        searchBar.current.focus();
    }, []);

    const { state, dispatch } = useGlobalContext();

    return(

        <form onSubmit={handleSubmit} className="w-100 p-4 flex">
            <input placeholder="Rechercher des mot clés" ref={searchBar} className={clsx({"w-[100%] h-10 border rounded px-3": true, "bg-white text-black border-black": state.theme==="light", "bg-black text-white border-white": state.theme==="dark"})} />
            <button className={clsx({"border rounded px-3": true, "bg-white text-black border-black": state.theme==="light", "bg-black text-white border-white": state.theme==="dark"})} type="submit">Rechercher</button>
        </form>

    );

}