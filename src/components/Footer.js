import { pageLinks, socialLinks } from '../data'
import PageLink from './PageLink'
import SocialLink from './SocialLink'

function Footer() {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((link) => {
          link.classStyle = 'footer-link'
          return <PageLink {...link} key={link.id} />
        })}
        <li>
          <a href='#featured' className='footer-link'>
            featured
          </a>
        </li>
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          link.classStyle = 'footer-icon'
          return <SocialLink {...link} key={link.id} />
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
