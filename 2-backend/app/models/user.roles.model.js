module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      alias: String,
      actions: [String]
    },
    { versionKey:false, timestamps: true }
  );

  const Roles = mongoose.model("users_roles", schema);
  return Roles;
};
