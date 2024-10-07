import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

interface GlobalState {
    theme: string;
    modalShown: boolean;
}

interface GlobalAction {
    type: string;
}

const initialState: GlobalState = {
    theme: "light",
    modalShown: false
}

function reducer(state: GlobalState, action: GlobalAction) {
	switch(action.type) {
		case "SWITCH_THEME":
			return { 
                ...state,
                theme: state.theme === "light" ? "dark" : "light" 
            };
		case "TOGGLE_MODAL":
			return {
                ...state,
                modalShown: !state.modalShown 
            };
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