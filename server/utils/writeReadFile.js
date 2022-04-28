const fs = require("fs");
const path = require("path");

export const saveFileSession = (data) => {
  console.log("aqui entra");
  data = {
    shop: "https://m4ke-my-m4sk.myshopify.com/",
    publicKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDYwOTA4MTUsImV4cCI6MTY0NjE3NzIxNX0.p9AxDA13fBl6hOErYMRTy76geA9wnmDb8lZa_n2AkQk",
    privateKey: "2goN9hWRaeiMpWL22twCaReJaa1UJkAB",
  };

  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(
    path.join(__dirname, "../config/session.json"),
    jsonData,
    (error) => {
      if (error) {
        console.log("error:", error);
      }
    }
  );

  return data;
};

export const readFileSession = () => {
  const file = fs.readFileSync(path.join(__dirname, "../config/session.json"));
  const data = JSON.parse(file);
  return data;
};
