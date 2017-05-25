class BlogItem extends React.Component {

  render() {
    const {
      text,
      link
    } = this.props.post;

    return (
      <div>
        <TextEl text={text} />
        <Image
          src={link}
          width="100px"
          height="100px"
          alt="Это картинка" />
      </div>
    )
  }

}
