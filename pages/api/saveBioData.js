import fs from "fs";
import data from "../../data/bioData.json";

export default (req, res) => {

  const tempDataName = data.map((item) => item.name);
  console.log(req.body, "HEYA LIFE")

  if (tempDataName.includes(req.body.name)) {
    data?.map((item) => {
      if (item.name === req.body.name) {
        if (req.body.bio) {
          item.bio = req.body.bio
        }
        if (req.body.image) {
          item.image = req.body.image
        }
        if (req.body.profession) {
          item.profession = req.body.profession
        }
        if (req.body.origin) {
          item.origin = req.body.origin
        }
        if (req.body.briefBio) {
          item.briefBio = req.body.briefBio
        }
      }
    })
  } else {
    const newData = {
      "name": req.body.name,
      "bio": req.body.bio,
      "image": req.body.image,
      "profession": req.body.profession,
      "origin": req.body.origin,
      "briefBio": req.body.briefBio,
      "id": data.length + 1
    }
    data.push(newData)
  }



  fs.writeFileSync("data/bioData.json", Buffer.from(JSON.stringify(data)).toString());

  console.log("data", data)
  // res.status(200).json({ message: data });
  res.status(200).json({ message: "Bio added successfully." });

};