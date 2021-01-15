export default (req, res) => {
  res.status(200).json({
    status_code: 200,
    message: "Welcome to Bean Code World of OSS",
    data: {
      date: new Date().getTime(),
    },
  });
};
