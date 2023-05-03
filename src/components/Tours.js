import { featuredTours } from '../data'
import Title from './Title'
import Tour from './Tour'

function Tours() {
  return (
    <section className='section' id='tours'>
      <Title first='featured' last='tours' />

      <div className='section-center featured-center'>
        {featuredTours.map((tour) => (
          <Tour {...tour} key={tour.id} />
        ))}
      </div>
    </section>
  )
}
export default Tours
