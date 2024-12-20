import { TextField, Box } from "@mui/material";
import "../../styles/login.css"

export function LoginFields({username, setUsername, password, setPassword, name, setName}){
    return(
        // pulls attributes from the parent LoginGroup in order to make the Text Fields responsive
        <Box className="login-fields">
            <TextField label="Name" value={name} onChange={(e) => {setName(e.target.value)}}></TextField>
            <TextField label="Username" value={username} onChange={(e) => {setUsername(e.target.value)}}></TextField>
            <TextField label="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}></TextField>
        </Box>
    );
}