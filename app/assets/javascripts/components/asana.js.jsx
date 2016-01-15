// Generate single asana
var Asana = React.createClass({
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

// Generate single user-created asana
var YourAsana = React.createClass({

    // create URL for editing asana
    getInitialState: function() {
        return {
            editLink: "/asanas/" + this.props.asana.id
        }
    },

    render: function() {
        // (Asana.render plus with additional enclosing class, edit button, and link)
        return (
            <div className="your-asana-card asana-card">
                <a href={this.state.editLink}>
        		<img src={this.props.asana.img_url}  />
                <div className="card-text" id={this.props.asana.id}>
            		<div className="sanskrit">{this.props.asana.sanskrit_name}</div>
            		<div className="english">{this.props.asana.english_name}</div>
                    <span className="helper">Edit</span>
                </div>
                </a>
            </div>
        );
    }

});