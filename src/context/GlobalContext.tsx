import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import Article from "../models/Article";

interface GlobalState {
    theme: string;
    modalShown: boolean;
    articles: Article[];
    searchTerm: string;
}

interface GlobalAction {
    type: string;
    payload: any;
}

const initialState: GlobalState = {
    theme: "light",
    modalShown: false,
    articles: [],
    searchTerm: ""
}

function reducer(state: GlobalState, action: GlobalAction) {
	switch(action.type) {
		case "SWITCH_THEME":
			return { 
                ...state,
                theme: action.payload
            };
		case "TOGGLE_MODAL":
			return {
                ...state,
                modalShown: !state.modalShown 
            };
		case "CHANGE_SEARCH_TERM":
			return {
                ...state,
                searchTerm: action.payload
            };
        case "SET_ARTICLES":            
            return {
                ...state,
                articles: action.payload
            }
		default:
			throw new Error();
	}
}

interface GlobalContextType {
    state: GlobalState;
    dispatch: Dispatch<GlobalAction>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export default function GlobalContextProvider({ children }: { children: ReactNode }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (

        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>

    );

}

export function useGlobalContext() {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    return context;
}