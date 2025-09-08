import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    avatar: {
      type: {
        url: String,
        localpath: String,
      },
      default: {
        url: `https://placehold.co/200x200`,
        localpath: ``,
      },
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      stpe: String,
    },
    forgotPasswordToken: {
      type: String,
    },

    forgotPasswordExpiry: {
      type: Date,
    },
    emailverificationToken: {
      type: String,
    },
    emailverificationExpiry: {
      type: Date,
    },

  },
  {
    timestamps: true,
  },
);






export const User = mongoose.model("User", userSchema);
