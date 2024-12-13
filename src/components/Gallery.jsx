import React, { useState, useEffect } from "react";
import '../App.css'

const APODGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const apiKey = 'EdGEPjA23shXZT9P0JSY1mODiN1FhwulWRmgPRYx';// Replace with your actual NASA API key
  const baseUrl = "https://api.nasa.gov/planetary/apod";

  // Function to get dates for today, yesterday, and tomorrow
  const getDateOffsets = (offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const fetchAPODs = async () => {
    try {
      const dates = [0, -1, -2].map((offset) => getDateOffsets(offset)); // Today, Yesterday, Tomorrow
      const fetchPromises = dates.map((date) =>
        fetch(`${baseUrl}?api_key=${apiKey}&date=${date}`).then((response) =>
          response.json()
        )
      );

      const results = await Promise.all(fetchPromises);
      setPhotos(results);
    } catch (err) {
      setError("Failed to fetch NASA photos.");
    }
  };

  useEffect(() => {
    fetchAPODs(); 
    const intervalId = setInterval(fetchAPODs, 24 * 60 * 60 * 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="apod-gallery">
      <h1>Photo of The Day</h1>
      {photos.length > 0 ? (
        <div className="photos-grid">
          {photos.map((photo, index) => (
            <div key={index} className="photo-item">
              <h2>{photo.title}</h2>
              {photo.media_type === "image" ? (
                <img src={photo.url} alt={photo.title} className="photo-image" />
              ) : (
                <iframe
                  src={photo.url}
                  title={`NASA Video - ${photo.title}`}
                  className="photo-video"
                  allowFullScreen
                ></iframe>
              )}
              <p>{photo.explanation}</p>
              <p><strong>Date:</strong> {photo.date}</p>
              <p><strong>Photographer:</strong> {photo.copyright || "N/A"}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default APODGallery;
