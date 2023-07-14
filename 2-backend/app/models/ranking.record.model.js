module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        server: { type: mongoose.Schema.ObjectId, ref: "server" },
        year: Number,
        month: Number,
        totalCuts: Number,
        remainingCuts: Number,
        currentCut: Number,
        event: Boolean,
        T1: Number,
        T5: Number,
        T20: Number,
        T100: Number,
        T500: Number,
        lastUpdated: Date
      },
      { versionKey: false, timestamps: true }
    );
  
    const RankingRecord = mongoose.model("ranking_record", schema);
    return RankingRecord;
};