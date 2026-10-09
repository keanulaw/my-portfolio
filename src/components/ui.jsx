export function SectionHeading({ title, note }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </div>
  );
}
export function ExternalLink({ href, children }) {
  return (
    <a
      className="text-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
