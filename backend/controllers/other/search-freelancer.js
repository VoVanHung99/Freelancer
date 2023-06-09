import Account from "../../models/Account.js";
import ProjectAssess from "../../models/ProjectAssess.js";
import { ObjectId } from "mongodb";

const searchFreelancer = async function (req, res, next) {
    const { searchData } = req.params;
    const regex = new RegExp(searchData, "i");

    try {
        const resultSearchAccount = await Account.find({
            $or: [{ username: regex }, { name: regex }],
        });

        const resultSearch = [];

        if (resultSearchAccount) {
            for (let account of resultSearchAccount) {
                const idAccount = await ProjectAssess.find({
                    freelancerId: ObjectId(account._id),
                });
                resultSearch.push(idAccount);
            }
        }

        return res.status(201).json({
            status: "success",
            resultSearch,
        });
    } catch (error) {
        next(error);
    }
};

export default searchFreelancer;
