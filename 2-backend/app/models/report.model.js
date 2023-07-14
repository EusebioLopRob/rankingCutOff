module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        data: [
            {
                rankingRecord: { type: mongoose.Schema.ObjectId, ref: "ranking_record" },
                rankedPlayers: [ { type: mongoose.Schema.ObjectId, ref: "player" } ]
            }
        ],
        lastUpdated: Date
      },
      { versionKey: false, timestamps: true }
    );

    const Report = mongoose.model("report", schema);
    return Report;
};