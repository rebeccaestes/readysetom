

var AsanaForm = React.createClass({

	// getInitialState: function() {
 //      return { asana: this.props.newAsana };
 //  },

  render: function() {
  	
      return (
				<div>
					<div className="input-group">
					  <span className="input-group-addon" id="sizing-addon3">Asana Name: Sanskrit</span>
					  <input type="text" className="form-control asana-add" aria-describedby="sizing-addon3" name="sanskrit" />
          </div><div className="input-group">
            <span className="input-group-addon" id="sizing-addon3">Asana Name: English</span>
            <input type="text" className="form-control asana-add" aria-describedby="sizing-addon3" name="english" />
					</div><div className="input-group">
            <span className="input-group-addon" id="sizing-addon3">URL for Asana Image</span>
            <input type="text" className="form-control asana-add" aria-describedby="sizing-addon3" name="img" />
          </div>
          
				</div>
      );
  }

});

var CreateAsana = React.createClass({

  getInitialState: function() {
      return { asanas: this.props.current_user };
  },

  render: function() {
    $("#save_new").on("click", function() {
      $.ajax({
        url: 'http://localhost:3000/asanas/yours',
        type: "POST",
        data: { asana: {
          sanskrit_name: $(["name='sanskrit'"]).val(),
          english_name: $(["name='english'"]).val(),
          img_url: $(["name='img'"]).val(),
          user_id: current_user
        }},
        dataType: 'json'
      }).done(function() {
        console.log("Success")
      }).fail(function() {
        console.log("Error")
      })
    })

    return  <div><button id="save_new">Save</button></div>
  }

})