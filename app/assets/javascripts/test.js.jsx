var Test = React.createClass({

  render: function() {
    return (
      <div>
        Hello from React
      </div>
    );
  }
});


// ReactDOM.render(
//   <CommentBox url="/api/comments" pollInterval={2000} />,
//   document.getElementById('content')
// );

// $(function() {
//   React.renderComponent(
//     document.getElementById('content')
//   );
// })

var element = React.createElement(Test);

// where to put element the class renders
$(function() {
  ReactDOM.render(element, document.querySelector('#content'));
});