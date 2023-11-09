import dbConnect from "@/lib/dbConnect";
import Cmatrial from "@/models/CmatrialDB"
import {coursesX} from "@/lib/Rh";

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":



            const user = await Cmatrial.find({})


            res.status(200).json(user);
            break;

        case "DELETE":

            const userx = await Cmatrial.deleteOne({_id:req.query.id})


            res.status(200).json(userx);

            break;

        case "POST":

            try {

                const user = await Cmatrial.create({
                    title: req.body.title,
                    link: req.body.link,

                });

                if (user) {
                    res.status(200).json({
                        success: true,
                        message: "Added Successfully ",

                    });
                    return;
                }else {

                    res.status(200).json({
                        success: false,
                        message:"kindly check you input data"
                    })
                }




            } catch (error) {
                res.status(200).json({ success: false, data: error });
            }
            break;


    }

}