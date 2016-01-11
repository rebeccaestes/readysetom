var Asana = React.createClass({
    render: function() {
        return (
            <div className="card">
            		<img src={this.props.asana.img_url} />
            		<div className="sanskrit">{this.props.asana.sanskrit_name}</div>
            		<div className="english">{this.props.asana.english_name}</div>
            </div>
        );
    }
});