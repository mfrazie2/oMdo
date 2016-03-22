var React = require('react');
var styleable = require('react-styleable').default;
var css = require('../styles/about.css');

function About(props) {
  return (
    <div className={props.css.root}>      
        <h1 className={props.css.headers}>About oMdo</h1>

<p>Mood is a fleeting state in life, capable of changing from moment to moment. oMdo is all about helping you get to know yourself. Discover the causes of your ups and downs. Gain insight into your habits and the role they play in how you feel. 
By setting aside a moment each day to engage in mindful self-reflection of your current mood and recording those feelings, you can begin to notice trends in your mood. Spot triggers for your mood changes and develop methods to confront them appropriately. </p>

  <h2 className={props.css.headers}>Meet Our Team</h2>
      <ul className={props.css.list}>
        <li className={props.css.person}>Mike Frazier, Product Owner</li>
        <li className={props.css.person}>John Soo, Scrum Master</li>
        <li className={props.css.person}>Sanford Bradshaw, Development Team</li>
        <li className={props.css.person}>Christopher Patton, Development Team</li>
        <li className={props.css.person}>Liz Sciortino, Development Team</li>
      </ul>

<h2 className={props.css.headers}>Privacy</h2>
<p>oMdo cares about your privacy. The information you choose to share with us will not be distributed, shared or sold. While the database is not protected by SSL or whatever, we feel certain this is not a huge concern unless this app scales like crazy. </p>


<h2 className={props.css.headers}>Disclaimer</h2>
<p>oMdo is not designed to be used as a diagnostic tool. If you feel you need professional assistance, please visit the American Psychological Association to find a psychologist in your area.</p>
    </div>  
  )
}

module.exports = styleable(css)(About);