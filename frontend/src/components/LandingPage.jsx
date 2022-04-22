import { useEffect, useState } from "react";
import { getContent } from "../../services";


const LandingPage = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getContent();
            console.log(result);
            setContent(result?.data);
        })
    }, [])
};

export default LandingPage;