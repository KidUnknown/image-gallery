import React from 'react';

const BodyRegion = (items) => {
  return(
    <div className="gallery-app-body">
      <div className="listed-images">
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <span>Album: {item.albumId}</span> <span>item: {item.id}</span> 
              <img src={item.thumbnailUrl} alt={item.title} className='thumb' />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BodyRegion;
