function baseModelPlugin(schema) {
  schema.set("timestamps", true);
  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(_doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
      return ret;
    },
  });
}

module.exports = baseModelPlugin;
