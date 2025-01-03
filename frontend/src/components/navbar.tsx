import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => (
    <AppBar color="primary" position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Item Manager
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Navbar;
