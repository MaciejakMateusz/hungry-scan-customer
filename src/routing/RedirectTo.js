import {useEffect} from "react";

export const RedirectTo = ({module}) => {
    useEffect(() => {
        switch (module) {
            case "menu":
                window.location.href = '/menu';
                break;
            default:
                window.location.href = '/menu';
        }
    }, [module]);
    return null;
}