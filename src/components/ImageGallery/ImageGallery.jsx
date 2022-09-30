
import PropTypes from "prop-types"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";



export const ImageGallery = ({setModalPath, renderImages}) => {        
        return(
            <>
                <ul className="ImageGallery">
                    {renderImages.map((item, index) => 
                    <ImageGalleryItem 
                        onClick={setModalPath}
                        src={item.webformatURL} 
                        alt={item.index}
                        bigImage={item.largeImageURL}
                        key={item.id * 10 + index}
                    />)}
                </ul>
            </>
        )
}

ImageGallery.propTypes = {
    setModalPath: PropTypes.func,
    renderImages: PropTypes.arrayOf(PropTypes.shape({
        webUrl: PropTypes.string,
        id: PropTypes.number,
        bigImage: PropTypes.string
    }))
}