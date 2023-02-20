// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    data: [
      {
        id: "1",
        nama: "adi"
      },
      {
        id: "2",
        nama: "adi2"
      },
      {
        id: "3",
        nama: "adi3"
      },
      {
        id: "4",
        nama: "adi4"
      },
      {
        id: "5",
        nama: "adi5"
      }
    ] 
  })
}
