import adminModel from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

// login admin
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await adminModel.findOne({ email: email });
    if (!user) {
      return res.json({ success: false, message: "Admin does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register admin
const registerAdmin = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //checking user exist or not
    const exists = await adminModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Admin already exists" });
    }

    //validating emial format or strong passowrd
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter valid email" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Enter password must be at least 8 characters",
      });
    }

    // hashing user passowrd
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newAdmin = new adminModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newAdmin.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export { registerAdmin, loginAdmin };
