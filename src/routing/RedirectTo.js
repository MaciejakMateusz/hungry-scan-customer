import {useEffect} from "react";
import {apiHost} from "../apiData";

export const RedirectTo = ({module}) => {
    useEffect(() => {
        switch (module) {
            case "menu":
                window.location.href = `${apiHost}/menu`;
                break;
            default:
                window.location.href = `${apiHost}/menu`;
        }
    }, [module]);
    return null;
}