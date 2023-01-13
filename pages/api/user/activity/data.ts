// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

//Other
import fs from "fs";
import path from "path";

type activityData = {
  data: {
    userId: number;
    sessions: {
      day: string;
      kilogram: number;
      calories: number;
    }[];
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<activityData>
) {
  const getRequest: boolean = req.method === "GET";

  if (!getRequest) {
    return;
  }
  const filePath: string = path.join(
    process.cwd(),
    "public/mocks",
    "userActivityData.json"
  );

  const jsonFileData: Buffer = fs.readFileSync(filePath);
  // @ts-ignore Ignore the following error
  const data: activityData = JSON.parse(jsonFileData);

  res.status(200).json(data);
}
