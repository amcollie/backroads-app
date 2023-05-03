import tourImg1 from './images/tour-1.jpeg'
import tourImg2 from './images/tour-2.jpeg'
import tourImg3 from './images/tour-3.jpeg'
import tourImg4 from './images/tour-4.jpeg'
// import tourImg5 from './images/tour-5.jpeg'
// import tourImg6 from './images/tour-6.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home', location: null },
  { id: 2, href: '#about', text: 'about', location: null },
  { id: 3, href: '#services', text: 'services', location: null },
  { id: 4, href: '#tours', text: 'tours', location: null },
]

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const featuredTours = [
  {
    id: 1,
    date: 'August 26th, 2023',
    imgSrc: tourImg1,
    title: 'Tibet Adventure',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'China',
    days: 6,
    from: 2100,
  },
  {
    id: 2,
    date: 'October 11th, 2023',
    imgSrc: tourImg2,
    title: 'Best of Java',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Indonesia',
    days: 11,
    from: 1400,
  },
  {
    id: 3,
    date: 'September 15th, 2023',
    imgSrc: tourImg3,
    title: 'Explode Hong Kong',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Hong Kong',
    days: 8,
    from: 5000,
  },
  {
    id: 4,
    date: 'December 5th, 2023',
    imgSrc: tourImg4,
    title: 'Kenya Highlights',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Kenya',
    days: 20,
    from: 3300,
  },
]
