UploadedFiles = React.createClass({

	componentDidMount() {
    this.view = Blaze.render(Template.uploadedFiles,
      ReactDOM.findDOMNode(this.refs.container));
  },
  componentWillUnmount() {
    Blaze.remove(this.view);
  },
  render() {
    return <span ref="container" />;
  }
});