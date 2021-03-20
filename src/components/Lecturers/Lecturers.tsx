import React, { useState, useEffect } from 'react';
import { Container, Wrapper, Button, TitleContainer, Title } from '../../styled/common';
import { CardsContainer, Card, LecturerImg, LecturerName, LecturerInfo, LecturerImgContainer, LecturerImgColor } from './Lecturers.elements';
import axios from 'axios';

function Lecturers({}) {
    const [lecturerData, setLecturerData] = useState([])

    const initialLimit = 8
    const [limit, setLimit] = useState(initialLimit)

    const showMoreItems = () => {
        setLimit(limit + 8);
    };

    useEffect(() => {
        axios
        .get('/api/lecturers')
        .then((res) => {
            setLecturerData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

    },[]);

    let nutriLecturerData = lecturerData.filter(e => e.program == 'nutri')

    return (
        <Container lightGrey>
            <Wrapper>
                <TitleContainer>
                    <Title>Lektoři Nutri Akademie</Title>
                </TitleContainer>
                <CardsContainer>
                    {nutriLecturerData.slice(0,limit).map((lecturer) => 
                    <Card key={lecturer.id}>
                        <LecturerImgColor className="hoverLecturer"/>
                        <LecturerImgContainer>
                            <LecturerImg src={lecturer.image}/> >    
                        </LecturerImgContainer>
                        <LecturerName>{lecturer.name}</LecturerName>
                        <LecturerInfo>{lecturer.title}</LecturerInfo>
                    </Card>
                    )}
                </CardsContainer>
                {limit<15 &&
                <Button onClick={showMoreItems}> DALŠÍ NUTRI LEKTOŘI</Button>
                }
            </Wrapper>
        </Container>
    )
}

export default Lecturers

