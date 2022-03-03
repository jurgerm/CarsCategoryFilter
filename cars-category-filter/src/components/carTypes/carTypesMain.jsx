import { CarTypeMain } from "./carTypeMain.jsx";

export const CarTypesMain = ({ carTypes }) => {
  console.log(carTypes);

  const carTypesRendered = carTypes
    .map((carType) => (
      <CarTypeMain key={carType.name} carType={carType} />
    )
    );

  return (
    <div className="c4N-t">
      <div className="c4N-t-List">
        {carTypesRendered}
      </div>
    </div>
  );

};