


import QgrpDB from "@/models/QgrpDB"
import QuizDB from "@/models/QuizDB"

import dbConnect from "@/lib/dbConnect";


    export default async function handler(req, res) {

        dbConnect()

        if (req.query.g) {


           const rtxx= await QuizDB.find({group: req.query.g})

            res.status(200).json(rtxx);

        }  else  if (req.query.delete) {


            await QuizDB.deleteMany({group: req.query.delete})
            await QgrpDB.deleteOne({name: req.query.delete})

            res.status(200).json("done");


        }else if (req.query.name){
            const grpx = await QgrpDB.create({name:req.query.name})


            res.status(200).json(grpx);


        } else {


            const user = await QgrpDB.find({})

            res.status(200).json(user);




        }




}