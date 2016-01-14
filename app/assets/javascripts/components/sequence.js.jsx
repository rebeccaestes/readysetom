var Sequence = React.createClass({

    getInitialState: function() {
        return {
            asanas: this.props.initialAsanas,
        }
    },

    render: function() {
        return (
            <div className="asana-card">
            	<img src={this.props.asana.img_url} />
                <div className="card-text">
                	<div className="sanskrit">{this.props.asana.sanskrit_name}</div>
                	<div className="english">{this.props.asana.english_name}</div>
                </div>
            </div>
        );
    }
});

var SequenceSelector = React.createClass({

  getInitialState: function() {
      return { 
        asanas: this.props.initialAsanas,
      };
  },

  addAsana: function() {
    var addedAsanas = []
    var self = $(this);
    console.log(this)
    // $(".asana-card").click(function() {
    //   var sanskritName = $(this).find(".sanskrit").text();
    //   addedAsanas.push(sanskritName);
    //   // $(this).find(".card-text").html("<h5>Added!</h5>").fadeIn();
    //   $(this).css("background", "grey");
    //   console.log(addedAsanas);
    // })
  },



  componentDidMount: function() {
    this.addAsana()
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

})