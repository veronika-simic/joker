function Card({ content }: { content: { line1: string; line2: string } }) {
  return (
    <div className="content">
      <p>{content.line1}</p>
      {content.line2 && (
        <p style={{ marginTop: "1rem", fontWeight: "500", color: "#555" }}>
          {content.line2}
        </p>
      )}
    </div>
  );
}

export default Card;
