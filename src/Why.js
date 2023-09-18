import React from "react";
import './why.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Button, Figure, Image } from "react-bootstrap";
import { BsPlayCircle } from "react-icons/bs";

import im3 from './Images/im3.png'
import im6 from './Images/im6.png'
import im2 from './Images/im2.png'
import im8 from './Images/im8.png'
import im9 from './Images/im9.png'
import im10 from './Images/im10.png'
import im11 from './Images/im11.png'
import im5 from './Images/im5.png'
import im7 from './Images/im7.png'
import { RiTeamFill } from 'react-icons/ri';
import { FaHandshakeAngle } from 'react-icons/fa6';

const Whysenchola = () => {
  const iconSize = "3rem"; // Adjust the size as needed

  const iconStyle = {
    fontSize: iconSize,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "20px",
  };

  return (
    <div>
       
      <div style={{ backgroundColor: "rgb(252, 214, 143)", marginTop: "-3%" }}>
        
        <Container>
        <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
        marginLeft:"5%" }} ></i>
          <Row className="mt-5">
            <Col className="mt-5">
              <h3 style={{ color: "rgb(1, 96, 1)", fontWeight: "700" }}>
                Best Learning <br></br>Education Platform <br></br>is Senchola
              </h3>
              <p style={{ width: "75%" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Audax
                negotium, dicerem impudens, nisi hoc institut translatum ad
                philosophos nostros esset.
              </p>
              <Button
                style={{
                  backgroundColor: "rgb(1, 96, 1)",
                  borderColor: "gray",
                }}
                className="rounded-5"
              >
                Learn more
              </Button>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <Button
                className=" rounded-5 "
                style={{
                  backgroundColor: "rgb(252, 214, 143)",
                  color: "black",
                  fontWeight: "600",
                  fontSize: "80%",
                  borderColor: "gray",
                }}
                type="submit"
              >
                
                <i class='bx bx-play-circle bx-flip-vertical' style={{ color: 'white', fontSize: "165%" }}  ></i>

                &nbsp;Watch Video
              </Button>
              <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
            marginLeft:"50%" }} ></i>
              <div className='circle2'>
             </div>
            </Col>
            <Col>
              <Figure>
                <Figure.Image
                  style={{
                    width: "40%",
                    marginTop: "30%",
                    marginRight: "2.5%",
                  }}
                  src={im2}
                />
                <span
                  className="rounded-3 pe-0 ps-0"
                  style={{
                    backgroundColor: "rgba(227, 222, 222,0.8)",
                    position: "absolute",
                    marginTop: "20%",
                    marginRight: "20%",
                    marginLeft: "-3%",
                    fontWeight: "500",
                    fontSize: "90%",
                    
                  }}
                >
                  <span style={{ padding: "2%", fontWeight: "600" }}>
                  <i class='bx bx-check' style={{color:'#302e2e', fontSize:"22px",  fontWeight:"800", }} ></i>
                  </span>
                  Build remote teams &nbsp;faster with
                  senchola<br></br>
                  <span style={{ padding: "2%", fontWeight: "600" }}>
                  <i class='bx bx-check' style={{color:'#302e2e', fontSize:"22px",  fontWeight:"800", }} ></i>
                  </span>
                  Expert Trainee
                </span>
                <Figure.Image
                  style={{ width: "40%", matginbottom: "60%" }}
                  src={im3}
                />
              </Figure>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='circle3'>
              </div>
      <div>
      <div className='circle1'>
              </div>
        <Container>
          <Row className="mt-5">
            <Col style={{ width: "45%" }}>
              <h3 style={{ fontWeight: "700", fontSize: "160%" }}>
                Why Senchola <br></br>University?
              </h3>
              <br></br>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                 <i class='bx bx-check-double check-icon'></i>
                </span>
                What we teach is much more relevant for real software careers.
              </p>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                 <i class='bx bx-check-double check-icon'></i>
                </span>
                At Senchola, we look for skillsets and abilities more than for
                paper credentials.
              </p>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                 <i class='bx bx-check-double check-icon'></i>
                </span>
                We do not charge our students any fees.
              </p>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                 <i class='bx bx-check-double check-icon'></i>
                </span>
                After the successful completion of the Intership, you are
                automatically inducted as an employee into Senchola Technologies
                Solution.
              </p>
              <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
        marginLeft:"-1%" }} ></i>
        
            </Col>
            <div className='vl' >

</div>

          
            
            <Col style={{ marginTop: "8%" }}>
                
            <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
        marginLeft:"10%" }} ></i>
              <p>
                
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                 
                  <i class='bx bx-check-double check-icon'></i>
                </span>
                Lorem ipsum dolor sit amet consectetur. Urna vitae 
                <br />fermentum
                nunc sit proin elementumnibh elementum.
              </p>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                    
                  }}
                >
                 <i class='bx bx-check-double check-icon'></i>
                </span>
                Lorem vivamus amet. Eu faucibus mattis sit vestibulum
                <br /> velit ut,
                Varius magna ultricies varius vitae adipiscing imperdiet
               <br /> ridiculus. Ipsum vitae imperdiet turpis luctus. Mi risus sed sed
               <br /> fringilla ligula a. Orci proin arcu egestas et commodo placerat.
              </p>
              <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
                marginLeft:"70%" }} ></i>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="background-image" style={{ marginTop: "18%" }}>
        <Container>
          <Row>
            <Col
              className="card "
              style={{
                // backgroundColor: "rgba(227, 222, 222,0.8)",
                backgroundColor: "white",
                opacity:"0.7",
                boxShadow: "2px 2px 6px black",
                padding: "4%",
                fontWeight: "400",
                width: "220px",
                height: "330px",
                marginTop: "-110px",
                marginRight: "50px",
                borderRadius:"20px"
                // borderRadius:"15px"
              }}
            >
              <div style={iconStyle}>
              <i class='bx bxs-file-blank' style={{ color: '#ee3737', fontSize: "30px", 
                         backgroundColor:"#FA8072", borderRadius:"8px", width:"30px", height:"30px"}}  ></i>
              </div>
              <h3 style={{ fontWeight: "800", fontSize: "105%" }}>
                Breadth and Depth for Immediate Scale
              </h3>
              <p style={{ fontSize: "90%" }}>
                Lorem vivamus amet, Eu faucibus mattis sit vestibulum velit ut.
                Varius magna ultricios varius vitao adipiscing imperdiot
                ridiculus. lpsum vitae imperdiet turpis luctus, Mi risus sed sed
                fringilla ligula a. orci proin arcu egestas et commodo placerat.
              </p>
            </Col>
            <Col
              className="card "
              style={{
                backgroundColor: "white",
                opacity:"0.7",
                boxShadow: "2px 2px 6px black",
                padding: "4%",
                fontWeight: "400",
                // width: "220px",
                height: "330px",
                marginTop: "20px",
                marginRight: "50px",
                borderRadius:"20px"
              }}
            >
              <div style={iconStyle}>
              <i class='bx bx-git-repo-forked' style={{ color: '#2538e3', fontSize: "30px",  width:"30px",
               height:"30px",  backgroundColor:"	#B0E0E6", borderRadius:"8px" }}  ></i>
              </div>
              <h3 style={{ fontWeight: "800", fontSize: "105%" }}>
                Scaleable Managed Outsourcing
              </h3>
              <p style={{ fontSize: "90%" }}>
                Lorem vivamus amet, Eu faucibus mattis sit vestibulum velit ut.
                Varius magna ultricios varius vitao adipiscing imperdiot
                ridiculus. lpsum vitae imperdiet turpis luctus, Mi risus sed sed
                fringilla ligula a. orci proin arcu egestas et commodo placerat.
              </p>
            </Col>
            <Col
              className="card "
              style={{
                backgroundColor: "white",
                opacity:"0.7",
                boxShadow: "2px 2px 6px black",
                padding: "4%",
                fontWeight: "400",
                width: "220px",
                height: "330px",
                marginTop: "-110px",
                marginRight: "50px",
                borderRadius:"20px"
              }}
            >
              <div style={iconStyle}>
              <i class='bx bx-message-detail msg-icon ' style={{ color: '#f17a4b', fontSize: "30px", 
                 width:"30px", height:"30px",  backgroundColor:"#FFE4B5", borderRadius:"8px" }}  ></i>
              </div>
              <h3 style={{ fontWeight: "800", fontSize: "105%" }}>
                Elastic Freelancer Model
              </h3>
              <p style={{ fontSize: "90%" }}>
                Lorem vivamus amet, Eu faucibus mattis sit vestibulum velit ut.
                Varius magna ultricios varius vitao adipiscing imperdiot
                ridiculus. lpsum vitae imperdiet turpis luctus, Mi risus sed sed
                fringilla ligula a. orci proin arcu egestas et commodo placerat.
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              className="card"
              style={{
                backgroundColor: "white",
                opacity:"0.7",
                boxShadow: "2px 2px 6px black",
                padding: "4%",
                fontWeight: "400",
                width: "220px",
                height: "330px",
                marginTop: "-110px",
                marginRight: "50px",
                borderRadius:"20px"
              }}
            >
              <div style={iconStyle}>
              <FaHandshakeAngle style={{ color: 'green', fontSize: "30px", 
                 backgroundColor:"#90EE90", borderRadius:"8px"}} />
              </div>
              <h3 style={{ fontWeight: "800", fontSize: "105%" }}>
                Global Pricing Model
              </h3>
              <p style={{ fontSize: "90%" }}>
                Lorem vivamus amet, Eu faucibus mattis sit vestibulum velit ut.
                Varius magna ultricios varius vitao adipiscing imperdiot
                ridiculus. lpsum vitae imperdiet turpis luctus, Mi risus sed sed
                fringilla ligula a. orci proin arcu egestas et commodo placerat.
              </p>
            </Col>
            <Col
              className="card"
              style={{
                backgroundColor: "white",
                opacity:"0.7",
                boxShadow: "2px 2px 6px black",
                padding: "4%",
                fontWeight: "400",
                width: "220px",
                height: "330px",
                marginTop: "20px",
                marginRight: "50px",
                borderRadius:"20px"
              }}
            >
              <div style={iconStyle}>
              < RiTeamFill style={{ color: '#BA55D3', fontSize: "30px",  
                        backgroundColor:"	#E6E6FA", borderRadius:'8px'}} />
              </div>
              <h3 style={{ fontWeight: "800", fontSize: "105%" }}>
                Jumpstart Your Business
              </h3>
              <p style={{ fontSize: "90%" }}>
                Lorem vivamus amet, Eu faucibus mattis sit vestibulum velit ut.
                Varius magna ultricios varius vitao adipiscing imperdiot
                ridiculus. lpsum vitae imperdiet turpis luctus, Mi risus sed sed
                fringilla ligula a. orci proin arcu egestas et commodo placerat.
              </p>
            </Col>
            <Col
              className="card "
              style={{
                backgroundColor: "white",
                opacity:"0.7",
                boxShadow: "2px 2px 6px black",
                padding: "4%",
                fontWeight: "400",
                width: "220px",
                height: "330px",
                marginTop: "-110px",
                marginRight: "50px",
                borderRadius:"20px"
              }}
            >
              <div style={iconStyle}>
              <i class='bx bx-desktop' style={{ color: ' #e38d25', fontSize: "30px",  width:"30px",
                   backgroundColor:"#F0E68C", borderRadius:"8px" }}  ></i>
              </div>
              <h3 style={{ fontWeight: "800", fontSize: "105%", marginTop: "5px", }}>
                Exclusive Professional Marketplace
              </h3>
              <p style={{ fontSize: "90%",marginTop: "20px", }}>
                Lorem vivamus amet, Eu faucibus mattis sit vestibulum velit ut.
                Varius magna ultricios varius vitao adipiscing imperdiot
                ridiculus. lpsum vitae imperdiet turpis luctus, Mi risus sed sed
                fringilla ligula a. orci proin arcu egestas et commodo placerat.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
        <div className='circle4'>
              </div>
             
          <Row className="mt-5">
          
            <Col>
              <Figure>
                <Figure.Image
                  style={{ width: "80%", marginTop: "25%" }}
                  src={im5}
                />
                <span
                  className="rounded-3 pe-0 ps-0"
                  style={{
                   backgroundColor: "white",
                opacity:"0.7",
                boxShadow: "2px 2px 6px black",
                    position: "absolute",
                    marginTop: "35%",
                    marginLeft: "-13%",
                    marginRight: "56%",
                    fontWeight: "500",
                    fontSize: "90%",
                  }}
                >
                    
                  <span style={{ padding: "2%", fontWeight: "600" }}>
                
                    <i class='bx bx-check' style={{color:'#302e2e', fontSize:"22px",  fontWeight:"800", }} ></i>
                  </span>
                  Build remote teams faster with
                  senchola<br></br>
                  <span style={{ padding: "2%", fontWeight: "600" }}>
                  <i class='bx bx-check' style={{color:'#302e2e', fontSize:"22px",  fontWeight:"800", }} ></i>
                  </span>
                  Expert Trainee
                </span>
              </Figure>
              
            </Col>
            
            <Col style={{ marginTop: "15%" }}>
            <div className='circle5'>
              </div>
              <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
               marginLeft:"-10%" }} ></i>
            
              <h3 style={{ width: "75%", fontWeight: "600" }}>
                Lorem integer dapibus rhoncus fusce nisi augue fringilla.
              </h3>
              
              <p style={{ width: "75%", color: "black" }}>
                Lorem ipsum dolor sit amet consectetur. Cras lacinia ante
                tincidunt donec praesent pellentesque bibendum. Consectetur
                ipsum et id nullam interdum. Lorem vel mauris in a lorem
                scelerisque mi tempor. Dignissim sed sem ac sagittis elit dolor
                nisi egestas. Egestas sagittis sagittis odio nisi urna
                malesuada. Lectus diam id molestie et egestas luctus. Nam
                venenatis integer purus proin nisl.
              </p>
              <i class='bx bx-book-open bx-rotate-90' style={{ color: '#337e33', fontSize: "17px",
        
        marginLeft:"60%" }} ></i>
            </Col>
            
          </Row>
        
        </Container>
      </div>
      
      <div>
        
        <Container>
        
          <h4
            style={{
              marginLeft: "35%",
              marginTop: "0%",
              fontWeight: "800",
              color: "rgb(1, 96, 1)",
            }}
          >
            <div className='circle6'>
             </div>
            RECRUITING TOP TALENTS
          </h4>
          <p style={{ marginLeft: "41.5%", fontWeight: "500" }}>
            RECRUITING TOP TALENTS
          </p>

          <Col>
            <Figure style={{ marginTop: "5%" }}>
              <Figure.Image
                style={{ width: "72%", marginTop: "-26%", marginRight: "1%" }}
                src={im6}
              />
              <Figure.Image
                style={{ width: "24%", marginTop: "-2%" }}
                src={im7}
              />
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                style={{ width: "24%", marginTop: "-25%", marginRight: "1%" }}
                src={im8}
              />
              <Figure.Image
                style={{ width: "47.5%", marginTop: "-48%" }}
                src={im9}
              />
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                style={{ width: "31.5%", marginTop: "-28%", marginLeft: "25%" }}
                src={im10}
              />
              <Figure.Image
                style={{ width: "39%", marginTop: "-33%", marginLeft: "58%" }}
                src={im11}
              />
            </Figure>
          </Col>
          <div className='circle7'>
             </div>
        </Container>
      </div>
    </div>
  );
};

export default Whysenchola;