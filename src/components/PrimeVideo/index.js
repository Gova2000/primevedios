// Write your code here

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

import Slide from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  }

  return (
    <div className="color">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime"
      />
      <div className="mg slide">
        <h1>Action Movies</h1>

        <Slider {...settings}>
          {moviesList.map(each => {
            if (each.categoryId === 'ACTION') {
              return <Slide list={each} key={each.id} />
            }
            return null
          })}
        </Slider>
      </div>
      <div className="mg slide">
        <h1>Comedy Movies</h1>

        <Slider {...settings}>
          {moviesList.map(each => {
            if (each.categoryId === 'COMEDY') {
              return <Slide list={each} key={each.id} />
            }
            return null
          })}
        </Slider>
      </div>
    </div>
  )
}
export default PrimeVideo
