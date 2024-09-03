import React from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";

const NavBar = () => {
    const router = useRouter();
    const [value, setValue] = React.useState(router.pathname);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        router.push(newValue);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Matrix Math Game
                </Typography>
                <Tabs value={value} onChange={handleChange} textColor="inherit">
                    <Tab label="Home" value="/" />
                    <Tab label="Contact" value="/contact" />
                    <Tab label="About Us" value="/about" />
                    <Tab label="Career" value="/career" />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;