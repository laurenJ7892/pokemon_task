import React from 'react';

const PartyColumn = (props) => {
  const data = props.props;
  return (
    <div className="pokecol-images">
      { data && data.map((item) => (
          <div>
            <img className="pokecol-image-single-db" key={item.key} src={item.imageUrl}/>
          </div>
        ))}
    </div>
  )
};

export default PartyColumn;


