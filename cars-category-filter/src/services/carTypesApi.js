export class CarTypesApi {

  static getCarTypes() {
    // TODO add fetch of car types
    const carTypes = [
      {
        name: "Small",
        image: "https://content.r9cdn.net/rimg/carimages/generic/01_mini_white.png?width=108&height=72",
        price: 203, 
        isSelected: false
      },

      {
        name: "Medium",
        image: "https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?width=108&height=72",
        price: 238,
        isSelected: true
      },

      {
        name: "Large",
        image: "https://content.r9cdn.net/rimg/carimages/generic/03_standard_white.png?width=108&height=72",
        price: 238,
        isSelected: false
      },

      {
        name: "Suv",
        image: "https://content.r9cdn.net/rimg/carimages/generic/05_suv-small_white.png?width=108&height=72",
        price: 342,
        isSelected: false
      },
      {
        name: "Van",
        image: "https://content.r9cdn.net/rimg/carimages/generic/11_van_white.png?width=108&height=72",
        price: 528,
        isSelected: true
      },

      {
        name: "Luxury",
        image: "https://content.r9cdn.net/rimg/carimages/generic/04_premium.png?width=108&height=72",
        price: 294,
        isSelected: false
      },

      {
        name: "Convertible",
        image: "https://content.r9cdn.net/rimg/carimages/generic/08_convertible_white.png?width=108&height=72",
        price: 501,
        isSelected: false
      },

      {
        name: "Pickup Truck",
        image: "https://content.r9cdn.net/rimg/carimages/generic/12_truck_white.png?width=108&height=72",
        price: 668,
        isSelected: false
      },

      {
        name: "Commercial",
        image: "https://content.r9cdn.net/rimg/carimages/generic/14_commercial_white.png?width=108&height=72",
        price: 930,
        isSelected: false
      }
    ];

    return carTypes;
  }
}