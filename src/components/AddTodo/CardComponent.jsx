import React from 'react';

let CardComponent = ({ array, addFunction, removeFunction, heading }) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header text-center">{heading}</div>
        <div className="card-body">
          {array.map((i, index) => {
            return (
              <>
                <div className="d-flex align-items-center justify-content-around">
                  <div className="text-center pr-5">
                    {`${index + 1}. `} {i}
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    {removeFunction ? (
                      <i
                        class="fa-solid fa-arrow-left p-2"
                        onClick={removeFunction.bind(this, i)}
                      ></i>
                    ) : (
                      ''
                    )}
                    {addFunction ? (
                      <i
                        className="fa-solid fa-arrow-right p-2"
                        onClick={addFunction.bind(this, i)}
                      ></i>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardComponent;
