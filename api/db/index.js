const mongoose = require("mongoose");

let db = null;

const ContentSchema = new mongoose.Schema({
    type: String,
    header: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});

const ContentModel = mongoose.model("Content", ContentSchema);

const init = async () => {
    if (!db) {
        db = await mongoose.connect(
            "mongodb://ce-softhouse-db:TKIalmA18B3DjVZis1y0ohczQWAHAQxgTBxlV31kKxp6N9n5SqDFyLfOM0gmxmnMCma8SVS8WRfgcoupy2kmig%3D%3D@ce-softhouse-db.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@ce-softhouse-db@",
            {useNewUrlParser: true}
        );
    }
};
const addContent = async (doc) => {
    const modelToInsert = new ContentModel(doc);
    return await modelToInsert.save();
};

const getContentyById = async (id) => {
    return await ContentModel.findById(id);
};

const getContent = async (query = {}) => {
    return await ContentModel.find({});
};

const deleteContent = async (id) => {
    return await ContentModel.findByIdAndDelete(id);
};

module.exports = {
    init,
    addContent,
    getContent,
    getContentyById,
    deleteContent,
};
