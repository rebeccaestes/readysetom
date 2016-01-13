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

  test: function() {
    console.log(asanas)
    return (
      <p>Sign in or sign up to add your own asana.</p>
    );
  }

});

var YourAsanasList = React.createClass({

  getInitialState: function() {
      return { asanas: this.props.initialAsanas };
  },

  render: function() {
    var asanas = this.state.asanas.map(function(asana) {
      return <YourAsana key={asana.id} asana={asana} />;
    })
    return (
      <div className="asanas">
        {asanas}
      </div>
    );
  },

  test: function() {
    console.log(asanas)
    return (
      <p>Sign in or sign up to add your own asana.</p>
    );
  }

});

var AsanasListUser = React.createClass({
   render: function() {
    return (
      <p><a href="/asanas/new">Create your own asana!</a></p>
    );
  }

})

var AsanasListNoUser = React.createClass({

   render: function() {
    return (
      <p><a href="/users/sign_in">Sign in</a> or <a href="/users/sign_in">sign up</a> to add your own asana.</p>
    );
  }

})

