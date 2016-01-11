var AsanasList = React.createClass({

  getInitialState: function() {
      return { asanas: this.props.initialAsanas };
  },

  render: function() {
    var asanas = this.state.asanas.map(function(asana) {
      return <Asana key={asana.id} asana={asana} />;
    })
    return (
      <div>
        <div className="asanas">
          {asanas}
        </div>
      </div>
    );
  }

});

