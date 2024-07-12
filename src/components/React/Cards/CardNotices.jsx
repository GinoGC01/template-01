import "./CardNotices.css";
export function CardNotices({
  id,
  title,
  images,
  category,
  synthesis,
  date,
  url,
}) {
  return (
    <article id={id} className="card-notices_container">
      <header>
        <h4>{title}</h4>
        <span>{date}</span>
      </header>
      <div className="card-notices_content">
        <figure>
          <img
            src={images[0]}
            alt={`imágen sobre ${title}`}
            transition:name={`image-${images[0]}`}
            loading="lazy"
          />
        </figure>
        <span>
          TEMA | <b>{category}</b>
        </span>
        <p>{synthesis}</p>
        <div className="button-cta">
          <a href={url} className="primaryAction">
            saber mas
          </a>
        </div>
      </div>
    </article>
  );
}
