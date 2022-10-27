import React from 'react';

const Home = () => {
    return (
        <div className="mt-5 bg-success">
      <div className="main-container d-flex container justify-content-between align-items-center">
        <div className="register-image image-fluid w-100  ">
          <img
            className="w-100 img-fluid image-fluid mr-3"
            src="https://media.istockphoto.com/photos/young-woman-working-from-home-picture-id1221479375?k=20&m=1221479375&s=612x612&w=0&h=ZqilVW8KSLi0c8yi1bdCibkSzFvI6LPNORKWeElVxnI="
            alt=""
          />
        </div>
        <div className="register-form  w-100 ml-4 bg-primary">
            <h1>Welcome to My Interactive Learning Website</h1>
        </div>

      
      </div>
    </div>
    );
};

export default Home;