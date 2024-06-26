import React from "react";
import Account from "../Components/Account/Account";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Container } from '@mui/material';
import TopSelling from "../Components/Account/TopSelling";

const drawerWidth = 240;

export default function FollowedSellers() {
    return (
        <>
        <Container style={{display: 'grid', marginBottom: '50px'}}>
        <Box sx={{ display: "flex" }}>
            <Account />
            <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                mt: 5,
            }}
            >
            {/* <Toolbar /> */}

            <div className="w-100 d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center flex-column h-100">
                <svg width="100" height="101" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50.5" r="50" fill="#fff"/><path fill="#CED6E0" d="M19.6 74.87h60.3v5.53H19.6z"/><path fill="#FFB048" d="M76.88 34.16v40.7H24.62v-40.7z"/><path fill="#F2F2F2" d="M45.73 49.24v15.08H29.15V49.24zM70.35 49.24v25.63H55.78V49.24z"/><path d="M24.87 20.1h9.55l-3.01 16.33H19.85l5.02-16.33ZM75.88 20.1h-9.8l2.26 15.74h11.78L75.88 20.1Z" fill="#F90"/><path d="M34.42 20.1h10.3l-.14 15.74H31.4l3.01-15.74Z" fill="#F3F3F3"/><path d="M44.97 20.1h10.3l1.01 15.74H44.22l.75-15.74Z" fill="#F90"/><path d="M55.45 20.1h10.38l2.66 15.74H56.3l-.84-15.74Z" fill="#F3F3F3"/><path d="M20.2 35.9c-.85.28-.44 4.04.76 5.5a5.84 5.84 0 0 0 4.5 2.28c1.68 0 3.3-.82 4.49-2.28 1.19-1.46 1.46-3.43 1.46-5.5h-5.96l-4.34-1.48-.91 1.49Z" fill="#F90"/><path d="M31.4 35.84c0 2.06.93 4.04 2.12 5.5a5.84 5.84 0 0 0 4.5 2.27c1.68 0 3.3-.82 4.49-2.28a8.72 8.72 0 0 0 1.86-5.49H31.41Z" fill="#E8EAE9"/><path d="M44.22 35.84c0 2.06.34 4.04 1.54 5.5a5.84 5.84 0 0 0 4.5 2.27c1.68 0 3.3-.82 4.49-2.28 1.19-1.45 1.53-3.43 1.53-5.49H44.22Z" fill="#F90"/><path d="M56.28 35.84c0 2.06.5 4.04 1.69 5.5a5.84 5.84 0 0 0 4.5 2.27c1.68 0 3.3-.82 4.49-2.28 1.19-1.45 1.5-3.43 1.5-5.49H56.28Z" fill="#E8EAE9"/><path d="M68.6 35.42c-.51-.5.41 4.52 1.6 5.98a5.84 5.84 0 0 0 4.5 2.28c1.68 0 3.3-.82 4.5-2.28 1.19-1.46 1.7-5.47-.3-9.5l-4.2 4-2.34-1.73-3.77 1.25Z" fill="#F90"/></svg>
                <h6 className="mt-3">You don't follow any seller !</h6>
                <p className="mt-2 text-center">
                    All your followed sellers will be displayed here
                </p>
                <a href="#">
                    <Button
                    variant="contained"
                    sx={{
                        fontSize: 18,
                        backgroundColor: "#f68b1e",
                        "&:hover": { backgroundColor: "#e07e1b" },
                    }}
                    >
                    START SHOPPING
                    </Button>
                </a>
                </div>
            </div>
            </Box>
        </Box>
        </Container>
        <TopSelling />
        </>
    );
}
