import "./Article.css";

export default function Article(props) {
  const { image, title, author, article } = props.article;

  return (
    <div className="article">
      <figure>
        <img
          src={image}
          alt={title}
          height="200"
          width="200"
          className="article-img"
        />
        <figcaption>By {author}</figcaption>
      </figure>
      <h3>{title}</h3>
      <p>{article}</p>
      <hr />
    </div>
  );
}
