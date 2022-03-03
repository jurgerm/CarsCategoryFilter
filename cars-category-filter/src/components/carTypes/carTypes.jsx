import { useEffect, useState } from "react";

import { CarTypesApi } from "../../services/carTypesApi"
import { CarTypesMain } from "./carTypesMain";
import { CarTypesOther } from "./carTypesOther";

export const CarTypes = () => {

  const [mainCarTypes, setMainCarTypes] = useState([]);
  const [otherCarTypes, setOtherCarTypes] = useState([]);

  const fetchCarTypes = () => {
    const allCarTypes = CarTypesApi.getCarTypes();
    console.log({ allCarTypes });
    setMainCarTypes(allCarTypes.slice(0, 4));
    setOtherCarTypes(allCarTypes.slice(4));

    console.log({ mainCarTypes });
    console.log({ otherCarTypes });
  }

  useEffect(() => {
    fetchCarTypes();
  }, []);

  return (
    <div className="D8qe-filters">
      {mainCarTypes && mainCarTypes.length > 0 && (
        <CarTypesMain carTypes={mainCarTypes} />
      )}
      {otherCarTypes && otherCarTypes.length > 0 && (
        <CarTypesOther carTypes={otherCarTypes} />
      )}
    </div>
  );
};