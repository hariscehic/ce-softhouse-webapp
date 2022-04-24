import {Card, CardContent} from "@mui/material";

const OfferingCard = ({content, index}) => {

    const getColor = (index) => {
        const colors = ['#334F68', '#819C9F', '#DC8045', '#E6BAAB'];
        let indexNumber = index;
        if(index > 4) {
            while(indexNumber > 4) {
                indexNumber -= 4;
            }
            return colors[indexNumber - 1];
        }
        return colors[index - 1];
    }

    return (
        <Card sx={{width: '25%', backgroundColor: getColor(index), maxHeight: '500px', margin: '10px'}} key={content?._id}>
            <CardContent sx={{color: 'white', padding: '45px 27px'}}>
                <h1>{content?.header}</h1>
                <h3>{content?.body}</h3>
            </CardContent>
        </Card>
    )
};

export default OfferingCard;
