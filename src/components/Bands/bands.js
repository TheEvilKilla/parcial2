import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';
import Band from '../Band/band';

function Bands({id}) {
    const [bands, setBands] = useState([]);
    useEffect(() => {
        const URL =
            "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setBands(data);
            });
    }, []);

    const printOldest = () => {
        let mayor = 0;
        let name = '';
        bands.map(e => {
            if (2022 - (e.foundation_year) > mayor) {
                mayor = 2022 - (e.foundation_year);
                name = e.name;
            }
        })
        return (<p>La banda mas antigua es {name} y fue fundada hace {mayor} años</p>);
    }

    return (
        <div style={{
            marginTop: '70px',
            marginInline: '70px'
        }}>
            <Element.Col style={{
                maxWidth: '620px'
            }}>
                <Element.Row>
                    <Element.Table striped>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Pais</th>
                                <th scope="col">Genero</th>
                                <th scope="col">Fundacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bands.map((e, i) => (
                                <Band key={i} band={e} />
                            ))}
                        </tbody>
                    </Element.Table>
                </Element.Row>
                <Element.Row>
                    {
                        printOldest()
                    }
                </Element.Row>
            </Element.Col>
        </div>
    );
} export default Bands;