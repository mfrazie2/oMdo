var React = require('react');
var Link = require('react-router').Link;
var styleable = require('react-styleable').default
var css = require('../styles/question.css');
var dispatch = require('../store/store').dispatch;
console.log(typeof styleable)

var currentIndex = currentIndex || 0;

function Question(props) {
  console.log(props);
  return(
    <div className={props.css.root}>
      <button className={props.css.prev} onClick={props.onPrev}>last question</button>
      <span className={props.css.currentQuestion}>Question</span>
      <button className={props.css.next} onClick={props.onNext}>next question</button>
    </div>
  )
}


// function getChild(props, currentIndex) {
//   return React.Children.map(props.children, function(element, i){
//     if (currentIndex === i){
//       return element;
//     }
//   })
// }

// function Question(props) {
//   console.log(props);
//   return(
//     <div className={props.css.root}>
//       <button className={props.css.prev} onClick={getChild(props, currentIndex-1)}>last question</button>
//       <span className={props.css.currentQuestion}>{getChild(props, currentIndex)}</span>
//       <button className={props.css.next} onClick={getChild(props, currentIndex+1)}>next question</button>
//     </div>
//   )
// }


module.exports = styleable(css)(Question)