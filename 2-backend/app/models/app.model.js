module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      app: {
        
      },
      // Indicar si el panel está isntalado
      installed: {
        type: Boolean,
        default: false
      }
    },
    { versionKey: false, timestamps: true }
  );

  const App = mongoose.model("app", schema);
  return App;
};