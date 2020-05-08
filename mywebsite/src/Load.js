import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Load() {
    return (
        <div style={{ 
        width: "100%", 
        height: "100vh", 
        }}>
            <CircularProgress color="secondary" style={{
                zIndex: "999",
                position: "relative",
                top: "50%",
                left: "50%",
            }}/>
        </div>
    )
}