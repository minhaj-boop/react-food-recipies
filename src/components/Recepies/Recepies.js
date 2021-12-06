import { Avatar, Button, Card, CardHeader, CardMedia, Container, Grid, IconButton, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Recepies = () => {
    const [recepies, setRecipies] = useState([]);
    const [searchText, setSearchText] = useState('');

    const history = useHistory();

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.meals);
                setRecipies(data.meals);
            });
    }, [searchText])

    const handleSearchField = e => {
        setSearchText(e.target.value);
    }


    const handleBtnClick = (id) => {
        history.push(`/recepie/${id}`);
    }

    return (
        <Container fixed>
            <Box>
                <Box
                    component="form"
                    sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        p: 1,
                        m: 1,
                        borderRadius: 1,
                        textAlign: 'center',
                        fontSize: '1rem',
                        fontWeight: '700'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField onChange={handleSearchField} id="standard-basic" label="Search recipies" variant="standard" />
                </Box>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {recepies.map(meal => (
                        <Grid item xs={2} sm={4} md={4} key={meal.idMeal} recepie={meal}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                        </IconButton>
                                    }
                                    title={meal.strMeal}
                                    subheader={meal.strArea}
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={meal.strMealThumb}
                                    alt="Paella dish"
                                />
                                <Button
                                    onClick={() => handleBtnClick(meal.idMeal)} variant="outlined" size="small">
                                    View Details
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>

    );
};

export default Recepies;