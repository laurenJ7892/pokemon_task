import React from 'react';

import pokeBall from '../../images/pokeball.png';


const PartyColumn = (props) => {
  const data = props.props;
  return (
    <div className="pokecol-images">
      { data && data.map((item) => (
          <div>
            <img className="pokecol-image-single-db" key={item.item} src={item.imageUrl ? item.imageUrl : pokeBall}/>
          </div>
        ))}
    </div>
  )
};

export default PartyColumn;


