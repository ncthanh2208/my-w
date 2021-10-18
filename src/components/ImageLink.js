import PropTypes from 'prop-types'
import Carousel from 'react-multi-carousel'
import { CAROUSEL_RESPONSIVE } from '../constants'


const ImageLink = ({images, imgClassName}) => {
       return (
        <Carousel responsive={CAROUSEL_RESPONSIVE} renderDotsOutside className="border-4 border-red">
            {images.map((image, index) => <img key={index} className={`${imgClassName} ${image.priority? '':'hidden'} border-4 border-yellow`} {...image} alt={image.alt} />)}
        </Carousel>
    )
}
ImageLink.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
        alt: PropTypes.string,
        priority: PropTypes.bool
    })).isRequired,
    imgClassName: PropTypes.string,
}

export default ImageLink

