import { Schema, model, connect } from "mongoose";

let db=null;

const ContentSchema = new Schema(
  { type: String },
  { header: String },
  { body: String },
  { timestamps: true },
);

const ContentModel = model("Content", ContentSchema);

export const init = async () => {
  if(!db) {
    db = await connect("mongodb://ce-softhouse-db:TKIalmA18B3DjVZis1y0ohczQWAHAQxgTBxlV31kKxp6N9n5SqDFyLfOM0gmxmnMCma8SVS8WRfgcoupy2kmig%3D%3D@ce-softhouse-db.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@ce-softhouse-db@",  { useNewUrlParser: true });
  }
};
export const addContent = async (doc) => {
  const modelToInsert = new ContentModel();
  return await modelToInsert.save(doc);
};

export const getContentyById = async (id) => {
  return await ContentModel.findById(id);
};

export const getContent = async (query = {}) => {
  return await ContentModel.find({});
};

export const deleteContent = async (id) => {
  return await ContentModel.findByIdAndDelete(id);
};