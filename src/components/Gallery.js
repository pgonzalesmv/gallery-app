import { useState, useEffect } from "react";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "aqui debes poner tu API KEY de Unsplash";

function Gallery(){
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState("nature");
    
    useEffect(() =>{
        fetchImages();
    }, []);

    const fetchImages = async () => {
        const response = await fetch(`${API_URL}?query=${query}&client_id=${ACCESS_KEY}`);
        const data = await response.json();
        setImages(data.results);
    };

    return(
        <div>
            <h1>Galería de Imágenes</h1>
            <input 
              type="text" 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
              placeholder="Busca imágenes..."
            />
            <button onClick={fetchImages}>Buscar</button>
        
            <div className="gallery">
              {images.map((image) => (
                <div key={image.id} className="gallery-item">
                  <img src={image.urls.small} alt={image.alt_description} />
                </div>
              ))}
            </div>
          </div>
        );        
}

export default Gallery;