var AsanaName = React.createClass({
    render: function() {
        return (
            <div className="post-header">
                <h2>{this.props.asana.name}</h2>
            </div>
        );
    }
});