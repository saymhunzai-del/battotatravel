interface ContentBlockProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function ContentBlock({ title, children, className = "" }: ContentBlockProps) {
  return (
    <div className={`content-block ${className}`.trim()}>
      {title && <h3 className="content-block-title">{title}</h3>}
      <div className="content-block-body">{children}</div>
    </div>
  );
}
