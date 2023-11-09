import grpDB from "@/models/grpDB"
import Users from "@/models/Users"
import dbConnect from "@/lib/dbConnect";
export default async function handler(req, res) {

    dbConnect()




    if (req.body.name) {

        const grpx = await grpDB.create({name:req.body.name})


        res.status(200).json(grpx);

        return

    }else {



        if (req.body.name) {



        }








        if (req.query.g) {


            const user = await Users.find({group: req.query.g})

            res.status(200).json(user);

            return;


        }


        const user = await grpDB.find({})

        res.status(200).json(user);




    }

}