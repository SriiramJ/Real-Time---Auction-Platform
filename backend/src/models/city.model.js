import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const City = mongoose.model("City", citySchema);

const tamilNaduCities = [
  { name: "Chennai" },
  { name: "Coimbatore" },
  { name: "Madurai" },
  { name: "Tiruchirappalli" },
  { name: "Salem" },
  { name: "Tirunelveli" },
  { name: "Vellore" },
  { name: "Erode" },
  { name: "Thoothukudi" },
  { name: "Dindigul" },
  { name: "Thanjavur" },
  { name: "Karur" },
  { name: "Namakkal" },
  { name: "Kanchipuram" },
  { name: "Cuddalore" },
  { name: "Nagapattinam" },
  { name: "Ramanathapuram" },
  { name: "Virudhunagar" },
  { name: "Pudukkottai" },
  { name: "Sivaganga" },
  { name: "Theni" },
  { name: "Tiruvallur" },
  { name: "Tiruvannamalai" },
  { name: "Villupuram" },
  { name: "Ariyalur" },
  { name: "Perambalur" },
  { name: "Kallakurichi" },
  { name: "Tenkasi" },
  { name: "Tirupattur" },
  { name: "Ranipet" },
  { name: "Chengalpattu" },
];

City.insertMany(tamilNaduCities)
  .then((result) => {
    console.log("Cities inserted successfully:", result);
  })
  .catch((error) => {
    console.error("Error inserting cities:", error);
  });

export default City;
