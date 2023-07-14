module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        server: { type: mongoose.Schema.ObjectId, ref: "server" },
        lastScore: { type: mongoose.Schema.ObjectId, ref: "score" },
        ranked: Boolean,
        position: Number,
        fcm: Number,
        comment: String
      },
      { versionKey: false, timestamps: true }
    );
  
    const Player = mongoose.model("player", schema);
    return Player;
};