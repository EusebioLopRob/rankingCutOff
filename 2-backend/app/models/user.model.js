//Modelo de dats de usuario
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      token: String, /* access key */
      info: {
        name: { 
          /* Primary key */
          type: String,
          trim: true,
          unique: true
        },
        email: {
          type: String,
          trim: true
        },
        gender: {
          type: String,
          trim: true
        },
        nationality: {
          type: String,
          trim: true
        },
        status: Boolean,
        password: String,
      },
      role: { type: mongoose.Schema.ObjectId, ref: "users_roles" }
    },
    { versionKey: false, timestamps: true }
  );
  const User = mongoose.model("users", schema);
  return User;
};
