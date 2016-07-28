// Next video to watch is "Using state"

var Note = React.createClass({
  edit: function() {
    alert('editing note');
  },
  remove: function() {
    alert('removing note');
  },
  render: function() {
    return (
      <div className="note">
        <p className="text-center">{this.props.children}</p>
        <span>
          <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil"/>
          <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"/>
        </span>
      </div>
    );
  }
});

React.render(<Note>Hello React!</Note>,
  document.getElementById('react-container')
);
