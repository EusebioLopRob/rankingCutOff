module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        player: { type: mongoose.Schema.ObjectId, ref: "player" },
        timestamp: Date,
        value: Number,
        increment: Number
      },
      { versionKey: false, timestamps: true }
    );

    const Score = mongoose.model("score", schema);
    return Score;
};