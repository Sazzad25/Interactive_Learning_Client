import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Category from '../Category/Category';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg="4">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="8">
                    <Category></Category>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;