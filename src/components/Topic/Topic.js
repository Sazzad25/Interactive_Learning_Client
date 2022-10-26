import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Topic = () => {
    const news = useLoaderData();
    const {title, image_url, details, category_id} = news;
    return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/checkout/${category_id}`}>
        <Button variant="primary">Get Premium access</Button>
        </Link>
      </Card.Body>
    </Card>
    );
};

export default Topic;