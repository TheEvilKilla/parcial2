import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import { useParams } from "react-router-dom";
import Bands from '../Bands/bands';

function Detail() {
    const params = useParams();
    const [bands, setDetail] = useState([]);
    useEffect(() => {
        const URL =
            "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-Detail.json";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setDetail(data);
            });
    }, []);

    let detail = bands.filter(e => e.id === params.bandId)
    return (
        <div>
            <Element.Row>
                <Element.Col>
                    <Bands></Bands> 
                </Element.Col>
                <Element.Col>
                    <Element.Card>
                        <img src={detail.image}></img>
                        <h1>{detail.name}</h1>
                        <p>{detail.description}</p>
                    </Element.Card>
                </Element.Col>
            </Element.Row>
        </div>
    );
} export default Detail;