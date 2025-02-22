import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

// Middleware to check if user is authenticated
export const ensureAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.redirect("/login");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    if (!req.user) return res.redirect("/login");
    next();
  } catch (err) {
    res.redirect("/login");
  }
};

// Middleware for Student Access
export const studentRequired = async (req, res, next) => {
  try {
    if (!req.user || req.user.isStaff) {
      return res.redirect("/dashboard"); // Redirect if not a student
    }
    next();
  } catch (err) {
    res.redirect("/dashboard");
  }
};

// Middleware for Teacher Access
export const teacherRequired = async (req, res, next) => {
  try {
    if (!req.user || !req.user.isStaff) {
      return res.redirect("/dashboard"); // Redirect if not a teacher
    }
    next();
  } catch (err) {
    res.redirect("/dashboard");
  }
};
