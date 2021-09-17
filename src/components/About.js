import React from 'react'

function About() {
  return (
    <React.Fragment>
      <h3>About US</h3>

      <div className="container card grey lighten-3 pa2">
        <h5>Our Values</h5>

        <ul class="values">
          <li>1. A growth mind set</li>
          <li>2. Always be positive!</li>
          <li>3. Respect each others different view points and experiences</li>
          <li>
            4. Every team member to have the oppertunity to share their vision
            and concerns
          </li>
          <li>5. Environmental responsibility.</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default About
