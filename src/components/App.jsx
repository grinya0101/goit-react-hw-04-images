import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "components/Modal/Modal";
import { Loader } from "./Loder/Loader";
import { Button } from "./Button/Button";
import { getDataFromPixabay } from "js/pixabayApi";

export const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [bigImagePath, setBigImagePath] = useState("");
  const [renderImages, setRenderImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if(searchKeyword){
      setIsLoading(true);
      getDataFromPixabay(searchKeyword, page)
      .then(data => {
          if(page === 1){
            setRenderImages(data.hits);
            setTotalItems(data.totalHits);
          }
          else{
            setRenderImages(prev => {
              const newImages = prev.concat(data.hits);
              return newImages;
            });
            
          }
      })
      .catch(err => {
          console.log(err);
      })
      .finally(data => {
        setIsLoading(false);
      })
      
    }
  }, [page, searchKeyword])

  const changeSerachKeyword = word => {
    if(word){
      setSearchKeyword(word);
      setPage(1);
    }
  }

  const setModalPath = (path) => {
    setBigImagePath(path);
  }

  const incrementPage = () => {
    setPage(prev => prev + 1);
  }

  return (
    <div className="App">
      <SearchBar onSubmit={changeSerachKeyword}/>
      {renderImages.length !== 0 && <ImageGallery renderImages={renderImages} setModalPath={setModalPath}/>}
      {(renderImages.length !== 0 && renderImages.length < totalItems) && <Button onClick={incrementPage}/>}
      {bigImagePath && <Modal onClick={setModalPath} path={bigImagePath}/>}
      {isLoading && <Loader/>}
    </div>
  );
}

