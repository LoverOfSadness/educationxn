import grpDB from "@/models/grpDB"
import Users from "@/models/Users"
import dbConnect from "@/lib/dbConnect";
export default async function handler(req, res) {

    dbConnect()






    if (req.body.q){

        //const ry= await Users.updateMany({ _id: { $in: req.body.user } },{group:req.body.grp})

        const ry= await grpDB.updateOne({name:req.body.grp}, { $addToSet: { q: req.body.q } }, { upsert: true });
        res.status(200).json(ry);
        return
    }




    if (req.body.user){

      const ry= await Users.updateMany({ _id: { $in: req.body.user } },{group:req.body.grp})

        res.status(200).json(ry);
      return
    }


    if (req.body.name) {

        const grpx = await grpDB.create( {name:req.body.name})


        res.status(200).json(grpx);



    } else {


        if (req.query.g) {


            const user = await Users.find({group: req.query.g})

            res.status(200).json(user);

            return;


        }


        const user = await grpDB.find({})

        res.status(200).json(user);




    }

}