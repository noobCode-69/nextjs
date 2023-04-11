import * as fs from 'fs';

export default async function handler(req, res) {
  const data =  fs.readdirSync('blogdata' );
  const newData = []
  data.forEach((item) => {
    let data2 = fs.readFileSync(`blogdata/${item}` , 'utf-8');
    data2 = JSON.parse(data2); 
    newData.push(data2)
  })
  res.status(200).json(newData)
}
