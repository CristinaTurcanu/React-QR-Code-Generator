import React from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from "./components/Header";
import Preview from "./components/Preview";
import Form from "./components/Form";
import { QrProvider } from "./contexts/QrContext";

function App() {
   return (
      <QrProvider>
         <Container maxWidth="lg">
            <Header />
            <Grid container spacing={5} sx={{ mt: 3 }}>
                <Form />
                <Preview />
            </Grid>
         </Container>
      </QrProvider>
   );
}

export default App;
