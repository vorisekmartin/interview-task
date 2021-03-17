import React, { useState, useEffect } from 'react';
import { Container, Wrapper, FlexCenteredWrapper, Button } from '../../styled/common';
import { CardsContainer, Card, LecturerImg, LecturerName, LecturerInfo, Title, TitleContainer, LecturerImgContainer } from './Lecturers.elements';
import axios from 'axios';

function Lecturers({}) {
    const [lecturerData, setLecturerData] = useState([])

    const initialLimit = 8
    const [limit, setLimit] = useState(initialLimit)

    const showMoreItems = () => {
        setLimit(limit + 8);
    };


    /*
    const [loading, setLoading] = useState(false)
    const [lecturers, setLecturers] = useState(() => [])

     const loadMore = useCallback(() => {
        setLoading(true)
        return setTimeout(() => {
            setLecturers((lecturers) => ([...lecturers, ...generateLecturers(8, lecturers.length)]))
            setLoading(() => false)
        },500)
    },[setLecturers, setLoading])

    useEffect(() => {
        const timeout = loadMore()
        return () => clearTimeout(timeout)
    },[]) */

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

    return (
        <Container lightGrey>
            <FlexCenteredWrapper>
                <TitleContainer>
                    <Title>Lektoři Nutri Akademie</Title>
                </TitleContainer>
                <CardsContainer>
                    {lecturerData.slice(0,limit).map((lecturer) => 
                    <Card key={lecturer.id}>
                        
                        <LecturerImgContainer>
                            <LecturerImg src={lecturer.image}/> >    
                        </LecturerImgContainer>
                        <LecturerName>{lecturer.name}</LecturerName>
                        <LecturerInfo>{lecturer.title}</LecturerInfo>
                    </Card>
                    )}
                </CardsContainer>
                <Button onClick={showMoreItems}> VŠICHNI NUTRI LEKTOŘI</Button>
            </FlexCenteredWrapper>
        </Container>
    )
}

export default Lecturers

