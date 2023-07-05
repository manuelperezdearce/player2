'use client'

import { Typography, Container } from "@mui/material"

export default function Home() {
  return (
    <Container component={'main'}>
      <Typography variant="h1" component={'h2'}>Main Section</Typography>
      {
        Array(5).fill(0).map(() => {
          return (
            <Typography variant="h1" component={'h2'}>Card</Typography>
          )
        })
      }
    </Container>
  )
}
