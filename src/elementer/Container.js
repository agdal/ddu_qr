import React, {  useState } from 'react'
import {Container, Card, CardContent, makeStyles, TextField, Grid, Button} from '@material-ui/core';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';


function Contain() {
    const [imageUrl, setImageUrl] = useState('');
    const [text, setText] = useState('');
    const classes = useStlyes();

    const opretQr = async () => {
        try {
            const response = await QRCode.toDataURL(text);
            setImageUrl(response);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (

            <div>
                <Container className={classes.container}>
                    <Card className={classes.cad1}>
                    <h2 className={classes.title}>Pant Donation til FN </h2>
                    <CardContent>
                       <Grid container spacing={2}>
                            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                                <TextField className={classes.txt} defaultValue="1 DKK" onChange={(e) => setText(e.target.value)}/>
                                <Button className={classes.but} variant="contained" color="primary" onClick={() => opretQr()}>Opret QR</Button>
                                <br />
                                <br />
                                <br />
                                {imageUrl ? ( <img src={imageUrl} alt="img"/>): null}
                            </Grid>
                            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                                
                            </Grid>  
                        </Grid> 
                    </CardContent>
                    </Card>
                </Container>
            </div>
    )
};


const useStlyes = makeStyles((theme) => ({
    container: {
        marginTop: 50
    },
    cad1: {
        marginTop: 10
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#3f51b5',
        color: '#fff',
        padding: 7,
        marginTop: 0
    },
    but: {
        marginTop: -5,
        marginBottom: 5
    },
    txt: {
        width: 180
    }
}));

export default Contain
