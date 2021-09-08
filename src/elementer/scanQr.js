import React, {  useState } from 'react';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';
import {Container, Card, CardContent, makeStyles, TextField, Grid, Button} from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  

function ScanQr(props){
    const classes = useStyles();
    const [scanResultWebCam, setScanResultWebCam] = useState('');

    const handleErrorWebCam = (error) => {
        console.log(error);
    }

    const handleScan = (result) => {
        if (result){
            setScanResultWebCam(result);
        }
    }

    return(
        <div>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <h3 className="websca">Scan din QR kode!</h3>
            <QrReader
            delay={300}
            style={{width: '100%'}}
            onError={handleErrorWebCam}
            onScan={handleScan} />
            <h3 className="websca">Resultat fra webcam scan: {scanResultWebCam}</h3>
            <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Vælg verdensmål</InputLabel>
        <Select
          native
        >
          <option aria-label="None" value="" />
          <option value={1}>Verdensmål 1</option>
          <option value={2}>Verdensmål 2</option>
          <option value={3}>Verdensmål 3</option>
          <option value={4}>Verdensmål 4</option>
          <option value={5}>Verdensmål 5</option>
          <option value={6}>Verdensmål 6</option>
          <option value={7}>Verdensmål 7</option>
          <option value={8}>Verdensmål 8</option>
          <option value={9}>Verdensmål 9</option>
          <option value={10}>Verdensmål 10</option>
          <option value={11}>Verdensmål 11</option>
          <option value={12}>Verdensmål 12</option>
          <option value={13}>Verdensmål 13</option>
          <option value={14}>Verdensmål 14</option>
          <option value={15}>Verdensmål 15</option>
          <option value={16}>Verdensmål 16</option>
          <option value={17}>Verdensmål 17</option>
        </Select>
        <Button className="butnav5" variant="contained" color="primary" href="/">Doner</Button>
      </FormControl>
        </Grid>
        </div>
    );
}

export default ScanQr;