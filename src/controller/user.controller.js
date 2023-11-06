import { User } from "../model/index.model.js";

export const usersGet = async (req, res) => {
  try {
    const data = await User.findAll();
    return res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({username, email, password});
    return res.status(200).json({
      status: 200,
      message: "Connected",
      data: user,
    });
  } catch (error) {
    return (error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Noto'g'ri parol" });
    }

    return res.status(200).json({
      status: 200,
      message: "Logged in",
      data: user,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server xatosi" });
  }
};

