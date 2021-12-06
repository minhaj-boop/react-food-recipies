import { Button, Card, CardContent, CardHeader, CardMedia, Container, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';


const Recepie = () => {

    const { idMeal } = useParams();
    const [recepie, setRecepie] = useState({});
    const { strMeal, strArea, strMealThumb, strInstructions } = recepie;
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    // console.log(idMeal);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setRecepie(data.meals[0]);
                setIsLoading(false);
            })
    }, []);

    const handleBtnClick = () => {
        history.goBack();
    }

    return (

        <>
            {
                !isLoading && <Container fixed>
                    <Box sx={{}}>
                        <Card sx={{ height: '100vh' }}>
                            <CardHeader

                                action={
                                    <IconButton aria-label="settings">
                                    </IconButton>
                                }
                                title={strMeal}
                                subheader={strArea}
                            />
                            <CardMedia
                                component="img"
                                height="350"
                                image={strMealThumb}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.dark" fontSize="15px">
                                    {strInstructions}
                                </Typography>
                            </CardContent>
                            <Button
                                onClick={handleBtnClick} variant="outlined" size="small">
                                Back
                            </Button>
                        </Card>
                    </Box>
                </Container>
            }
        </>

    );
};

export default Recepie;