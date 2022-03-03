import { useState } from "react";

export const CarTypeMain = ({ carType }) => {

  const [isSelected, setIsSelected] = useState(carType.isSelected);

  const toggleIsSelected = () => {
    setIsSelected(!isSelected);
  }


  return (
    <div role="switch" tabIndex="0"    
      className={`evcL evcL-mod-theme-glitter ${isSelected && ('evcL-dirty')}`}
      aria-checked="false"
      aria-label="Click to select &quot;Small&quot; car type."
      onClick={toggleIsSelected}
    >
      <img className="evcL-image" src={carType.image} alt={carType.name} />
      <div className="evcL-content">
        {carType.name}
        <div className="evcL-price-box">
          <div role="button" tabIndex="0" className="evcL-funnel evcL-funnelHidden" aria-label="">
            {/* <span cleanup="" className="svg evcL-funnel-svg" 
            style="transform: translate3d(0px, 0px, 0px); vertical-align: middle;">
              <svg className="svg-image" role="img" style="width:inherit;height:inherit;line-height:inherit;color:inherit;"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <path d="M27.5 20l58.529 83.287V180c15.015 0 27.188-12.197 27.188-27.242v-48.715L172.5 20h-145z"></path>
              </svg>
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};