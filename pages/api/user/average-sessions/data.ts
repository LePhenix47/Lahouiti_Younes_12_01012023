// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

//Other
import fs from "fs";
import path from "path";

type sessionsData = {
  data: {
    userId: 12;
    sessions: [
      {
        day: 1;
        sessionLength: number;
      },
      {
        day: 2;
        sessionLength: number;
      },
      {
        day: 3;
        sessionLength: number;
      },
      {
        day: 4;
        sessionLength: number;
      },
      {
        day: 5;
        sessionLength: number;
      },
      {
        day: 6;
        sessionLength: number;
      },
      {
        day: 7;
        sessionLength: number;
      }
    ];
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<sessionsData>
) {
  const getRequest: boolean = req.method === "GET";

  if (!getRequest) {
    return;
  }
  const filePath: string = path.join(
    process.cwd(),
    "public/mocks",
    "userSessionsData.json"
  );

  const jsonFileData: Buffer = fs.readFileSync(filePath);
  // @ts-ignore Ignore the following error
  const data: sessionsData = JSON.parse(jsonFileData);

  res.status(200).json(data);
}
