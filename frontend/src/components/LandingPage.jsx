import {useEffect, useState} from "react";
import {getContent} from "../services";
import BodyCard from "./BodyCard";
import Box from "@mui/material/Box";
import OfferingCard from "./OfferingCard";

const LandingPage = () => {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await getContent();
                setContents(result?.data);
            } catch (e) {
                console.log("error", e);
            }
        })();
    }, []);

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                pt: 9,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box sx={{
                gridTemplate: '750px 1fr',
                display: 'grid',
                gridAutoFlow: 'row',
                paddingRight: '15px',
                paddingLeft: '90px',
                gap: '30px'
            }}>
                <Box>
                    {contents?.map((content) => content?.type === 'body' && (
                        <BodyCard content={content}/>
                    ))}
                </Box>
                <Box display="flex">
                    {contents?.map((content, index) => content?.type === 'offering' && (
                        <OfferingCard content={content} index={index}/>
                    ))}
                </Box>
            </Box>
        </Box>

    );
};

export default LandingPage;
