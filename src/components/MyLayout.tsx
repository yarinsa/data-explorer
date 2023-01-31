import { FC } from "react";
import { Grid, Container } from '@mui/material';
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
    return (<Container sx={{ width: '100vw', height: '100vh' }}>
        <Grid>
            <h2>Data Explorer</h2>
        </Grid>
        <Outlet />
    </Container>
    )
}

export default Layout;
