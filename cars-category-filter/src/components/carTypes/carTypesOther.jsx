import { CarTypeOther } from "./carTypeOther";
import { useState } from "react";

export const CarTypesOther = ({ carTypes }) => {

  const getCarTypesSelected = () => {
    return carTypes.filter((item) => {
      return item.isSelected;
    });
  }

  const [carTypesSelected, setCarTypesSelected] = useState(getCarTypesSelected());

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  const carTypesRendered =
    carTypes.map(
      (carType) => (
        <CarTypeOther
          key={carType.name}
          carType={carType}
          onChange={() => {
            carType.isSelected = !carType.isSelected;
            setCarTypesSelected(getCarTypesSelected());
          }}
        />
      )
    );
  return (
    <div className="c_0M0 c_0M0-mod-theme-glitter" role="tab" data-filter-name="carclass">
      <div>
        <div role="button"
          className={`c_0M0-filter-head-dropdown ${carTypesSelected.length > 0 && ('c_0M0-dirty')}`}
          aria-label="Click for more options"
          onClick={toggleExpanded}
        >
          <div className="c_0M0-filter-title">
            More
            {carTypesSelected.length > 1 && (
              <div className="c_0M0-details">
                {carTypesSelected.length} selected
              </div>
            )}
            {carTypesSelected.length === 1 && (
              <div className="c_0M0-details">
                {carTypesSelected[0].name}
              </div>
            )}
          </div>
          <div className="c_0M0-action-icons-wrapper">
            <div role="button"
              className="c_0M0-action-icon-reset"
              aria-label="Reset filter">
              <span height="15" cleanup="" className="svg c_0M0-action-icon-close-svg"
              >
              </span>
            </div>
          </div>
        </div>
        {expanded && (
          <div className="ui-dialog-Popover">
            <div className="xvRy">
              <div className="xvRy-content">
                <div className="c_0M0-content-inner c_0M0-mod-theme-glitter">
                  <div className="p6Cx p6Cx-mod-theme-glitter p6Cx-mod-horizontal">
                    <div className="p6Cx-content">
                      {carTypesRendered}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};