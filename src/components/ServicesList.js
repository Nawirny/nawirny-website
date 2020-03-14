import React from 'react';
import Grid from '@material-ui/core/Grid';

import ServicesCard from './ServiceCard';

const ServicesList = () => {
    const proServices = [{title:'Hello', description:'decri1', image :"/images/blockchain-logo.jpg"},
                         {title:'Hello2', description:'decri2', image :"/images/gis.png"} 
                        ];
    return (
        <div>
            
            <Grid container spacing={1} style={{ padding: 24 }}>
                {proServices.map(service => (
                    <Grid item xs={12} sm={6} lg={4} xl={3} key={service.title}>
                        <ServicesCard service={service}/>
                    </Grid>
                ))}
            </Grid>

        </div>
    );

}

export default ServicesList;