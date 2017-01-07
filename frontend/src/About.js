import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="row-with-vertical-alignment">
            <Col md={8}>
              <h2>About</h2>
              <p className="lead">I am a senior software developer who enjoys teaching others, building teams, and solving interesting problems with well-crafted software.</p>
              <p>I still enjoy writing code, but I am most happy and effective when I am enabling my team to succeed and improve. I love to start with an inspiring mission, to work together as a team to come up with ideas, and finally to make those ideas a reality.</p>
              <p>My pseudonym, <strong>chesshacker</strong>, comes from two of my favorite activities, playing chess and developing software. I also enjoy teaching chess, and frequently volunteer in the community. For fun, I like to combine these passions and write chess-related software programs, some of which are featured on this site.</p>
            </Col>
            <Col md={4} className="col-bottom text-center">
              <Image src="https://photos.smugmug.com/photos/i-QRdxvrc/0/S/i-QRdxvrc-S.jpg" />
            </Col>
          </Row>
        </Grid>
        <div className="contrasting-container">
          <Grid>
            <Row>
              <Col md={5}>
                <Image src="https://photos.smugmug.com/photos/i-jmHnX7p/0/S/i-jmHnX7p-S.jpg" style={{marginTop:'66px', border: '1px solid black'}} responsive />
              </Col>
              <Col md={7}>
                <h2>Experience</h2>
                <p className="lead">My breadth of experience is one of my greatest strengths.</p>
                <p>I started my journey developing database-intensive business applications and websites. Then I spent a decade working with real-time, safety-critical software in autonomous trucks, missiles and planes. Three years ago, I returned to the private sector and to my roots, developing web applications. During my career, I have worked on everything from short one-person projects to massive multi-billion dollar programs. My roles varied included individual software developer, team leader, systems engineer and subject matter expert responsible for the entire software development process. Technologies have ranged from old VAX systems running Fortran to Docker containers running microservices, each one presenting opportunities to expand my skill set. I have also had the benefit and pleasure of working with and learning from so many incredibly talented developers, leaders and world-class experts along the way.</p>
              </Col>
            </Row>
          </Grid>
        </div>
        <Grid>
          <Row>
            <Col md={12}>
              <h2>Testimonials</h2>
            </Col>
            <Col md={6}>
              <p className="testimonial-lead">February 2016: From Rackspace Product Manager, <a target="_blank" href="https://www.linkedin.com/in/trentgillaspie">Trent Gillaspie</a>:</p>
              <p>I have had the pleasure of working with Steve at Rackspace over our past 1.5 years together, where I have been a Product Manager and he has lead our software development efforts.</p>
              <p><mark>Simply put, Steve is a brilliant and caring individual, always seeking the bigger meaning of his work. He is thorough in the code he delivers, and is always willing to go above and beyond to ensure the rest of the development team is getting what they need to be successful. As a developer, Steve is a rare combination of "in the weeds" and 50,000-foot strategic thinking. I have had plenty of conversations with him about specific lines of code and the way something works, immediately followed by strategic conversations around the direction of our work as a company, opportunities to better serve our customers, and new and unique ways to think about problems. Steve loves to learn, teach, share, and mentor, and his leadership within the intern program at Rackspace only serves to emphasize the quality of his character.</mark></p>
              <p>While we are no longer on the same product, it has been a pleasure working with Steve, and I would certainly recommend his work to anyone looking to add top-notch dev work to their team. I hope we get the chance to work more closely together in projects down the road. And, I hear he's very hard to beat in chess (I play checkers. Otherwise, I would have lost to him myself.)</p>
            </Col>
            <Col md={6}>
              <p className="testimonial-lead">Novmeber 2013: From Northrop Grumman's Vehicle Management System Team Lead to the Navy Triton MQ-4C Program Manager:</p>
              <p>Sir,<br />
                If appropriate please forward my recommendation for recognition of Steve Ortiz (NAVAIR TAE) to the Captain.</p>
              <p><mark>Recommendation:</mark></p>
              <ul>
                <li><mark>Double-rum ration.</mark></li>
                <li><mark>Short leave, paid.</mark></li>
              </ul>
              <p>Justification:<br />
              Steve Ortiz identified a potential workaround to... <em>redacted issue and summary of workaround.</em> This new workaround has been accepted by NAVAIR as a path for returning to flight.</p>
              <p><mark>Although Steve has already made significant contributions to Triton, this time his discovery is allowing us to continue envelope expansion at a critical time in our program (OTB/OTS). I suspect he has saved the program a significant amount of money.</mark></p>
              <p><mark>For those of us who work with him regularly, his dedication and professionalism are examples for all to follow.</mark></p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default About;
