import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// details description of courses
const Cart = ({topics}) => {
    const {_id, title, author, details, image_url, total_view, rating} = topics;
    return (
        <Card className="mb-5">
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <Image
                 roundedCircle
                 className='me-2'
                 src={author?.img}
                 style={{height: '60px'}}
                ></Image>
                <div>
                    <p className='mb-0'>{author?.name}</p>
                    <p>{author?.published_date}</p>
                </div>
            </div>
            <div>
             <FaBookmark className='me-2'></FaBookmark>
             <FaShareAlt></FaShareAlt>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {
                details.length > 250 ?
                <>{details.slice(0, 250) + '...'} <Link to={`/topics/${_id}`}>Read More</Link></>
                :
                details
            }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
            <div>
                <FaStar className='text-warning me-2'></FaStar>
                <span>{rating?.number}</span>
            </div>
            <div>
                <FaEye className='me-2'></FaEye>
                <span>{total_view}</span>
            </div>
        </Card.Footer>
      </Card>
    );
};

export default Cart;