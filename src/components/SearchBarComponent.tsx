import { useEffect, useRef } from "react";

export default function SearchBarComponent() {

    const handleSubmit = async (e: any) => {
        e.preventDefault();

    }

    const searchBar = useRef(null);

    useEffect(() => {
        searchBar.current.focus();
    }, []);

    return(

        <form onSubmit={handleSubmit} className="w-100 m-4 flex">
            <input placeholder="Rechercher des mot clés" ref={searchBar} className="w-[100%] h-10 border border-black rounded" />
            <button className="border rounded px-3" type="submit">Rechercher</button>
        </form>

    );

}