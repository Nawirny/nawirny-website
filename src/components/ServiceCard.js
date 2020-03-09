import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ServiceCard = (props) => {
    return (
        <div>
            <Card>
                <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                    image={props.service.image}
                    title={props.service.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="caption" component="h1">
                        {props.service.title}
                    </Typography>
                    <Typography component="p">
                        {props.service.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        More details
                        </Button>
                </CardActions>
            </Card>
        </div>
    );

}

export default ServiceCard;