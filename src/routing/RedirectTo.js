import {useEffect} from "react";

export const RedirectTo = ({module}) => {
    useEffect(() => {
        switch (module) {
            case "menu":
                window.location.href = 'http://localhost:3001/menu';
                break;
            default:
                window.location.href = 'http://localhost:3001/menu';
        }
    }, [module]);
    return null;
}