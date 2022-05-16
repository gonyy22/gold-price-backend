import axios from "axios";
import { Application, Request, Response } from "express";

const express = require("express");
const cors = require("cors");
const app: Application = express();
const port: number = 4000;

app.use(cors());

app.get("/goldPrices", async (req: Request, res: Response) => {
  const response = await axios({
    url: "http://apis.data.go.kr/1160100/service/GetGeneralProductInfoService/getGoldPriceInfo?isinCd=KRD040200002&numOfRows=10&resultType=json&serviceKey=mnwgrMkfQnj1n4OFaAjHHHZhVwkh%2FmA%2FoN1mLCUXb7V2gL%2FbEbDmxc6LudQ5hfH74Fp2QUHzL%2B%2BwaZ894heGIQ%3D%3D",
  });
  const miniResponse = await axios({
    url: "http://apis.data.go.kr/1160100/service/GetGeneralProductInfoService/getGoldPriceInfo?isinCd=KRD040201000&numOfRows=10&resultType=json&serviceKey=mnwgrMkfQnj1n4OFaAjHHHZhVwkh%2FmA%2FoN1mLCUXb7V2gL%2FbEbDmxc6LudQ5hfH74Fp2QUHzL%2B%2BwaZ894heGIQ%3D%3D",
  });
  res.send({
    gold: response.data.response.body.items,
    miniGold: miniResponse.data.response.body.items,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
