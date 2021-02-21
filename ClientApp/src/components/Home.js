import React from 'react';
import { connect } from 'react-redux';
import { Carousel, Jumbotron } from 'react-bootstrap';
import { Alert } from 'react-bootstrap'
import "./Home.css"

const Home = props => (
  <div style={{marginTop:"3em"}}>
    <Jumbotron>
      {/* <div className="mainText">Sonali Kumari</div> */}
      <div >
      <Carousel >
        <Carousel.Item className="sonali-crousel">
          <img
            className="d-block w-100"
            src="/2.jpeg"
            alt="First slide"
            style={{width:"100%", height:"100%"}}
          />
          <Carousel.Caption className="color-pink">
            <h2>Beautiful</h2>
            <p style={{fontWeight:"bold"}}> It’s that heart of gold, & stardust soul that make you beautiful. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="sonali-crousel">
          <img
            className="d-block w-100"
            src="/3.jpeg"
            alt="Second slide"
            style={{width:"100%", height:"100%"}}
          />

          <Carousel.Caption className="color-pink">
            <h2> Smart </h2>
            <p style={{fontWeight:"bold"}}> A wise girl knows her limits, a smart girl knows that she has none. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="sonali-crousel">
          <img
            className="d-block w-100"
            src="/4.jpeg"
            alt="Third slide"
            style={{width:"100%", height:"100%"}}
          />

          <Carousel.Caption className="color-pink">
            <h2> Passionate </h2>
            <p style={{fontWeight:"bold"}}> There is no passion to be found playing small in settling for a life that is less than the one you are capable of living </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div className="details">
        <Alert key={1} variant={"success"}>
          <h3>Sofware Engineer</h3>
          <div><span>Birth Day</span> : <span>20 March</span></div>
          <div><span>Email</span> : <span>singh0320sonali@gmail.com</span></div>
          <div><span>Language</span> : <span>English</span>, <span>Hindi</span>, <span>Maithili</span></div>
          <div>
            <span>Hobbies</span> :
            <ul>
              <li>
                Badminton
              </li>
              <li>
                Listening Songs
              </li>
              <li>
                Cooking
              </li>
              <li>
                Watching TV Series
              </li>
            </ul>
          </div>
        </Alert>
      </div>
    </Jumbotron>
  </div>
);

export default connect()(Home);
