export default function ImagePlaceholder({ label, style, className }) {
  return (
    <div className={`img-placeholder ${className ?? ''}`} style={style}>
      {label}
    </div>
  )
}
