import { useState } from "react";

export const CarTypeOther = ({ carType, onChange }) => {

  const [isSelected, setIsSelected] = useState(carType.isSelected);

  const toggleIsSelected = () => {
    setIsSelected(!isSelected);
    onChange();
  }

  return (
    <div role="switch" tabIndex="0"
      className="hYzH hYzH-mod-theme-glitter hYzH-mod-variant-multi-line hYzH-isHorizontal hYzH-mod-variant-no-heading"
      aria-checked="true" aria-labelledby="valueSetFilter-VAN-label">
      <div className="hYzH-filter-checkbox-outer">
        <div className="hYzH-filter-checkbox-inner">
          <span className="PVIO PVIO-mod-checked PVIO-mod-theme-default PVIO-mod-size-small PVIO-mod-variant-multi-line-centered-ellipsis ">
            <span className="PVIO-input-wrapper">
              <input id="valueSetFilter-VAN" tabIndex="-1" aria-disabled="false" aria-checked="true"
                className="PVIO-input" type="checkbox" 
                name="valueSetFilter-VAN" 
                value="true" 
                defaultChecked={isSelected}
                onChange={toggleIsSelected}
                 />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"
                className="icon" role="img" cleanup="">
                <path d="M132.639 63.231l-48.974 53.26l-17.569-13.51l-12.191 15.855c22.199 17.07 30.128 26.802 38.284 17.932l55.172-60l-14.722-13.537z">
                </path>
              </svg> */}
            </span>
            <label htmlFor="valueSetFilter-VAN" id="valueSetFilter-VAN-label" className="PVIO-label">
              <div className="hYzH-checkbox-label">
                <div className="hYzH-label-image">
                  <div className="hYzH-image">
                    <img src={carType.image} alt={carType.name} />
                  </div>
                  <div className="hYzH-image-text">
                    {carType.name}
                  </div>
                </div>
              </div>
            </label>
          </span>
        </div>
      </div>
      <div className="hYzH-price-box">
        <div role="button" tabIndex="0" className="hYzH-price">${carType.price}
        </div>
      </div>
    </div>
  );
};