import dbConnect from "@/lib/dbConnect";
import Users from "@/models/Users"

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case "POST":
            try {

                if (await Users.findOne({
                    email: req.body.email
                }).exec()

                ){

                    res.status(200).json({
                        success: false,
                        message:"Account Already exists"
                    })
                    return;

                }

                const user = await Users.create({
                    email: req.body.email,
                    password: "1234567890",
                    name: req.body.name,
                    sex: req.body.sex,
                    age: req.body.age,
                    phone: req.body.phone,
                    addr: req.body.addr,

                });



                if (user) {
                    res.status(200).json({
                            success: true,
                        user:user,
                            message: "Registration Successfully ",

                        });
                        return;
                    }else {

                    res.status(200).json({
                        success: false,
                        message:"kindly check you registration data"
                })
                }




            } catch (error) {
                res.status(200).json({ success: false, data: [], message: "There is Some Problem Wait", token: "", refreshtoken: "" });
            }
            break;
        default:
            res.status(200).json({ success: false, data: [], message: "something went wrong", token: "", refreshtoken: "" });
            break;


    }
}
