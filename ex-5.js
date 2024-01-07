let crimeRecordNames = [
  "Theodora Milenko",
  "Tinashe Benigno",
  "Mahalia Priyanka",
  "Maisy Sudhir",
];

function searchCrimeRecord(name) {
  const foundName = crimeRecordNames.find((record) => record === name);
  // if (foundName) {
  //   return `${name} has a crime record!!!`;
  // } else {
  //   return `${name} does not have a crime record.`;
  // }
  return foundName
    ? `${name} has a crime record!!!`
    : `${name} does not have a crime record.`;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"
