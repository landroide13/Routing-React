import React from 'react'

function About() {
  return (
    <React.Fragment>
      <div className="col s12 offset-s4">
        <h3>About US</h3>

        <div className="card grey lighten-3 pa2">
          <h5>Our Values</h5>

          <ul className="values">
            <li>1. A growth mind set</li>
            <li>2. Always be positive!</li>
            <li>
              3. Respect each others different view points and experiences
            </li>
            <li>
              4. Every team member to have the oppertunity to share their vision
              and concerns
            </li>
            <li>5. Environmental responsibility.</li>
          </ul>
        </div>


        <div className="card grey lighten-3 pa2">
          <h4>Testimonial</h4>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/TTsBOFNLRE0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>


      </div>
    </React.Fragment>
  );
}

export default About
