'use client'

import { Typography, Container, Box } from "@mui/material"

export default function Home() {
    return (
        <Box bgcolor={'green'}>
            <Container component={'footer'}>
                <Typography variant="h1" component={'h2'}>Footer Section</Typography>
            </Container>
        </Box>

    )
}
