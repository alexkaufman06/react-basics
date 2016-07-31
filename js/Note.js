// 4.4 is NEXT

var Note = React.createClass({
  getInitialState: function() {
    return {editing: false};
  },
  edit: function() {
    this.setState({editing: true});
  },
  save: function() {
    var val = this.refs.newText.getDOMNode().value;
    alert("New note:" + val);
    this.setState({editing: false});
  },
  remove: function() {
    alert('removing note');
  },
  renderDisplay: function() {
    return (
      <div className="note">
        <p className="text-center">{this.props.children}</p>
        <span>
          <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil"/>
          <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"/>
        </span>
      </div>
    );
  },
  renderForm: function() {
    return (
      <div className="note">
        <textarea ref="newText" className="form-control" defaultValue={this.props.children}></textarea>
        <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
      </div>
    );
  },
  render: function() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
});

var Board = React.createClass({
  propTypes: {
    count: function(props, propName) {
      if (typeof prop[propName] !== "number") {
        return new Error('The count property must be a number!');
      }
      if (prop[propName] > 100) {
        return new Error('Creating ' + prop[propName] + ' note is ridonculous');
      }
    }
  },
  getInitialState: function() {
    return {
      // object with key of notes
      notes: [
        'Clean toilet',
        'Daily bowel movement',
        'Feed Mr. Bojangles',
        'Weave baskets'
      ]
    };
  },
  render: function() {
    return (
      <div className="board">
        {this.state.notes.map(function(note, i){
          return (
            <Note key={i}>{note}</Note>
          );
        })}
      </div>
    );
  }
});

React.render(<Board count={10}/>,
  document.getElementById('react-container')
);
