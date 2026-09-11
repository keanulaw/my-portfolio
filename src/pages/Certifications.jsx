const certifications = [
  [
    "Safe Spaces Act",
    "Understanding and applying the Safe Spaces Act to help create inclusive, respectful environments.",
  ],
  [
    "Cybersecurity",
    "Fundamentals of cybersecurity, security best practices, and threat-prevention awareness.",
  ],
  [
    "Career in the IT Industry",
    "Career development, industry trends, and professional growth in Information Technology.",
  ],
];
export default function Certifications() {
  return (
    <section className="shell supporting-section" id="certifications">
      <div className="support-grid">
        <h2>Certifications</h2>
        <div className="cert-list">
          {certifications.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
