var Test = React.createClass({

  render: function() {
    return (
      <h3>
        The premiere yoga sequence builder on the interwebs
      </h3>
    );
  }
});

var element = React.createElement(Test);

$(function() {
  ReactDOM.render(element, document.querySelector('#content'));
});