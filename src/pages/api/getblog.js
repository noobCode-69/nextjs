
// http://localhost:3000/api/getblog?slug=how-to-learn-next


import * as fs from 'fs';

export default function handler(req, res)  {

    fs.readFile(`blogdata/${req.query.slug}.json`  , 'utf-8' , (err, data) => {
        if(err) {
            return res.status(500).json({message : "Internal Server Error"});
        }
        res.status(200).json(JSON.parse(data));
    })
}