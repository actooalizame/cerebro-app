UploadForm = React.createClass({

	componentDidMount() {
    this.view = Blaze.render(Template.uploadForm,
      ReactDOM.findDOMNode(this.refs.container));
  },
  componentWillUnmount() {
    Blaze.remove(this.view);
  },
  render() {
    return <span ref="container" />;
  }
});