import React, { useState, useEffect } from 'react';
import { Container, Wrapper, FlexCenteredWrapper, Button } from '../../styled/common';
import { CardsContainer, Card, LectorImg, LectorImgColor, LectorName, LectorInfo, Title, TitleContainer, LectorImgContainer } from './Lectors.elements';
import axios from 'axios';

function Lectors({}) {
    const [lecturer, setLecturer] = useState([]);

    useEffect(() => {
        axios
        .get('/api/lecturers')
        .then((res) => {
            setLecturer(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

    },[]);

    return (
        <Container lightGrey>
            <FlexCenteredWrapper>
                <TitleContainer>
                    <Title>Lektoři Nutri Akademie</Title>
                </TitleContainer>
                <CardsContainer>
                    {lecturer.map((lector) => 
                    <Card key={lector.id}>
                        
                        <LectorImgContainer>
                            <LectorImg src={lector.image} >
                                
                            </LectorImg>
                            
                        </LectorImgContainer>
                        <LectorName>{lector.name}</LectorName>
                        <LectorInfo>{lector.title}</LectorInfo>
                    </Card>
                    )}
                </CardsContainer>
                <Button>VŠICHNI NUTRI LEKTOŘI</Button>
            </FlexCenteredWrapper>
        </Container>
    )
}

export default Lectors

