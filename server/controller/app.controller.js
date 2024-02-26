const home = (req, res) => {
  try {
    console.log("running");
    res.status(200).json({ msg: "Working properly!" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home };
