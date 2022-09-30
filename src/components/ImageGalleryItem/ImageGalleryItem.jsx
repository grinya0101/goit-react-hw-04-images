import PropTypes from "prop-types"

export const ImageGalleryItem = ({bigImage, src, alt, onClick}) => {
    const clckHendler = () => {
       onClick(bigImage);
    }
    return(
        <li className="ImageGalleryItem">
            <img onClick={clckHendler} className="ImageGalleryItem-image" src={src} alt={alt}/>
        </li>
    )
}



ImageGalleryItem.propTypes = {
    onClick: PropTypes.func,
    src: PropTypes.string,
    alt: PropTypes.string,
    bigImage: PropTypes.string
}