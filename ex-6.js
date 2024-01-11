const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  const existedCar = carCollection.findIndex((brands) => brands === carBrand);

  if (existedCar === -1) {
    carCollection.push(carBrand);
    return `new car collection is: ${[...carCollection]}`;
  } else {
    return `${carBrand} already exists in position ${
      existedCar + 1
    } of the car collection.`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
