var AsanasList = React.createClass({

  getInitialState: function() {
      return { asanas: this.props.initialAsanas };
  },

  render: function() {
    var asanas = this.state.asanas.map(function(asana) {
      return <Asana key={asana.id} asana={asana} />;
    })
    return (
      <div className="asanas">
        {asanas}
      </div>
    );
  },

});

var YourAsanasList = React.createClass({

  getInitialState: function() {
    return { 
      asanas: this.props.initialAsanas,
     };
  },


  componentDidMount: function() {
    this.handleHover();
  },

  render: function() {
    var asanas = this.state.asanas.map(function(asana) {
      return <YourAsana key={asana.id} asana={asana} />;
    })
    return (
      <div><h4 className="list-top"><a href="/asanas/new">Create a new asana</a> or <a href="/asanas">go back to official app asanas ...</a></h4>
        <div className="asanas">
          {asanas}
        </div>
      </div>
    );
  },

});

var AsanasListUser = React.createClass({
   render: function() {
    return (
      <h4 className="list-top"><a href="/your_asanas">View your own asanas</a></h4>
    );
  }

})

var AsanasListNoUser = React.createClass({

   render: function() {
    return (
      <h4 className="list-top"><a href="/users/sign_in">Sign in</a> or <a href="/users/sign_in">sign up</a> to create your own asana.</h4>
    );
  }

})

