var Asana = React.createClass({
    render: function() {
        return (
            <div className="asana-card">
            		<img src={this.props.asana.img_url} />
            		<div className="sanskrit">{this.props.asana.sanskrit_name}</div>
            		<div className="english">{this.props.asana.english_name}</div>
            </div>
        );
    }
});

var YourAsana = React.createClass({
    render: function() {
        var thisUrl = this.props.asana.id + "/edit/";
        console.log(thisUrl)

        return (
            <div className="asana-card">
                <a href={this.props.asana.id}>
        		<img src={this.props.asana.img_url} />
        		<div className="sanskrit">{this.props.asana.sanskrit_name}</div>
        		<div className="english">{this.props.asana.english_name}</div>
                </a>
            </div>
        );
    },

    componentDidMount: function() {

    }
});