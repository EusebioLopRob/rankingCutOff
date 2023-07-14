module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        number: Number,
        enName: String,
        jpName: String,
        playerCount: {
            type: Number,
            default: 0
        }
      },
      { versionKey: false, timestamps: true }
    );
  
    const Server = mongoose.model("server", schema);
    return Server;
};