// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

//Data types
import { dataType } from "../../..//react-utils/types/dataType";

//Other
import fs from "fs";
import path from "path";

type userData = {
  data: {
    id: number;
    userInfos: {
      firstName: string;
      lastName: string;
      age: number;
    };
    todayScore: number;
    keyData: {
      calorieCount: number;
      proteinCount: number;
      carbohydrateCount: number;
      lipidCount: number;
    };
  };
};

// import Cors from "cors";

// // Initializing the cors middleware
// // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
// const cors = Cors({
//   methods: ["POST", "GET", "HEAD"],
// });

// // Helper method to wait for a middleware to execute before continuing
// // And to throw an error when an error happens in a middleware
// function runMiddleware(
//   req: NextApiRequest,
//   res: NextApiResponse,
//   fn: Function
// ) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result: any) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }

//       return resolve(result);
//     });
//   });
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<userData>
) {
  const getRequest: boolean = req.method === "GET";

  if (!getRequest) {
    return;
  }
  const filePath: string = path.join(
    process.cwd(),
    "public/mocks",
    "userData.json"
  );

  const jsonFileData: Buffer = fs.readFileSync(filePath);
  // @ts-ignore Ignore the following error
  const data: userData = JSON.parse(jsonFileData);

  res.status(200).json(data);
}
