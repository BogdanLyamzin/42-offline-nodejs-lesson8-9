const jwt = require("jsonwebtoken");
require("dotenv").config();

const { users: service } = require("../services");

const register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const result = await service.getOne({ email });
    if (result) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "Alredy register",
      });
    }
    const data = await service.add(req.body);

    res.status(201).json({
      status: "success",
      code: 201,
      message: "Add success",
    });
  } catch (error) {
    next(error);
  }
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await service.getOne({ email });
    if (!user || user.validPassword(password)) {
      return res.status(400).json({
        status: "error",
        code: 400,
        message: "Incorrect login of password",
      });
    }
    const payload = {
      id: user._id,
    };
    const { SECRET_KEY } = process.env;
    const token = jwt.sign(payload, SECRET_KEY);
    res.cookie("nToken", token, { maxAge: 900000 });
    res.json({
      status: "success",
      code: 200,
      data: {
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

const logout = (req, res, next) => {
  res.clearCookie("nToken");
  return res.redirect("/login");
};
