

var AsanaForm = React.createClass({

	// getInitialState: function() {
 //      return { asana: this.props.newAsana };
 //  },

  render: function() {
  	
      return (
				<div>
					<div className="input-group">
					  <span className="input-group-addon" id="sizing-addon3">Asana Name: Sanskrit</span>
					  <input type="text" className="form-control asana-add" aria-describedby="sizing-addon3" id="sanskrit" />
          </div><div className="input-group">
            <span className="input-group-addon" id="sizing-addon3">Asana Name: English</span>
            <input type="text" className="form-control asana-add" aria-describedby="sizing-addon3" id="english" />
					</div><div className="input-group">
            <span className="input-group-addon" id="sizing-addon3">URL for Asana Image</span>
            <input type="text" className="form-control asana-add" aria-describedby="sizing-addon3" id="img" />
          </div>
          
				</div>
      );
  }

});

var CreateAsana = React.createClass({

  getInitialState: function() {
    return { current_user: this.props.current_user };
  },

  // componentDidMount: function() {
  //   this.runAjax;
  // },

  // runAjax: function() {}
  //   $("#save_new").on("click", function() {
  //     $.ajax({
  //       url: 'http://localhost:3000/asanas/yours',
  //       type: "POST",
  //       data: { asana: {
  //         sanskrit_name: $("#sanskrit").val(),
  //         english_name: $("#english").val(),
  //         img_url: $("#img").val(),
  //         user_id: 2
  //       }},
  //       dataType: 'json'
  //     }).done(function() {
  //       console.log("Success")
  //     }).fail(function() {
  //       console.log("Error")
  //     })
  //   })

  render: function() {
    // console.log(current_user)
    // this.componentDidMount;
    return  <div><button id="save_new">Save</button></div>
  }  

})