import { useEffect } from "react";

export const Page = (props) => {
    useEffect(() => {
        document.title = (`Toy house | ${props.title}`) || "";
    }, [props]);

    return document.title
}