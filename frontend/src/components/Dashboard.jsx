import {Box, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";
import {addContent} from "../services";

const Dashboard = () => {
    const [type, setType] = useState("");
    const [header, setHeader] = useState("");
    const [body, setBody] = useState("");

    const resetAll = () => {
        setType("");
        setHeader("");
        setBody("");
    }

    const handleSave = async () => {
        const result = await addContent({
            type,
            header,
            body
        });

        console.log(result);
        if(result?.status === 200) {
            resetAll();
        }
    }

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                pt: 9,
                display: 'flex',
                flexDirection: 'column',
                height: 'fit-content',
            }}
        >
            <Box sx={{
                gridTemplate: '750px 1fr',
                display: 'grid',
                gridAutoFlow: 'column',
                gridTemplateColumns: '1000px',
                overflow: 'auto',
                paddingRight: '15px',
                paddingLeft: '90px',
            }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', gap: '20px'
                }}>
                    <FormControl sx={{m: 1, width: '150px'}}>
                        <InputLabel id="demo-simple-select-autowidth-label">Select type</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            autoWidth
                            label="Select type"
                        >
                            <MenuItem value="body">Body</MenuItem>
                            <MenuItem value="offering">Offering</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="outlined-basic1" label="Title" variant="outlined" value={header}
                               onChange={(e) => setHeader(e.target.value)}/>
                    <TextField id="outlined-basic2" label="Content" variant="outlined" value={body}
                               onChange={(e) => setBody(e.target.value)}/>
                    <Box display="flex" justifyContent="flex-end"> <Button variant="contained"
                                                                           onClick={handleSave}>Save</Button></Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
