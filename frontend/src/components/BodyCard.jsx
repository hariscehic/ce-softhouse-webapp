import {Card, CardContent} from "@mui/material";


const BodyCard = ({content}) => {


    return (
        <Card sx={{maxWidth: '500px', backgroundColor: '#FFFFFFBF', maxHeight: '500px'}} key={content?._id}>
            <CardContent sx={{color: '#334f68', padding: '50px'}}>
                <h1>{content?.header}</h1>
                <h3>{content?.body}</h3>
            </CardContent>
        </Card>
    )
};

export default BodyCard;
