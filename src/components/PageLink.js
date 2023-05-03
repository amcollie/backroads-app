function PageLink({ id, href, text, classStyle }) {
  return (
    <li key={id}>
      <a href={href} className={classStyle}>
        {text}
      </a>
    </li>
  )
}
export default PageLink
