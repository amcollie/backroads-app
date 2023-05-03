function SocialLink({ id, icon, href, classStyle }) {
  return (
    <li key={id}>
      <a href={href} target='_blank' rel='noreferrer' className={classStyle}>
        <i className={icon}></i>
      </a>
    </li>
  )
}
export default SocialLink
