function Card({ children }: { children: string }) {
  return (
    <div className="content">
      <p>{children}</p>
    </div>
  );
}

export default Card;
