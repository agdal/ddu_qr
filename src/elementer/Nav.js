import React from 'react';
import {Button} from '@material-ui/core'

function Nav(){
    return(
        <nav>
            <ul className="nav-links">
            <li><Button className="butnav1" variant="contained" color="default" href="/">Hjem</Button></li>
                <li><Button className="butnav1" variant="contained" color="default" href="/opretqr">Opret QR</Button></li>
                <li><Button className="butnav2" variant="contained" color="default" href="/scanqrcode">Scan QR</Button></li>
            </ul>
        </nav>
    );
}

export default Nav;