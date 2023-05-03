import Title from './Title'
import Service from './Service'
import { services } from '../data'

function Services() {
  return (
    <section className='section services' id='services'>
      <Title first='our' last='services' />
      <div className='section-center services-center'>
        {services.map((service) => (
          <Service {...service} key={service.id} />
        ))}
      </div>
    </section>
  )
}
export default Services
