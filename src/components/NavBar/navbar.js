import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import icon from './../../assets/icon.svg'

function NavBar() {
    return (
        <Navbar style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#A6C8CD',
            height: '80px'
        }}>
            <Container style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <img src={icon} style={{
                }} />
                <Navbar.Brand>

                    <text style={{
                        fontWeight: '600',
                        fontSize: '26px'
                    }}>Bandas Musicales
                    </text>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
} export default NavBar;