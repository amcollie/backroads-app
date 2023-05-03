function Tour(tour) {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={tour.imgSrc} className='tour-img' alt='' />
        <p className='tour-date'>{tour.date}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{tour.title}</h4>
        </div>
        <p>{tour.description}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>
            {tour.country}
          </p>
          <p>{tour.days} days</p>
          <p>from ${tour.from}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour
