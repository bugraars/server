const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    department: {
        type: String,
        required: [true, "Department is required"]
    },
    branchDir: {
        type: String,
        required: [true, "Branch Director is required"]
    },
    role: {
        type: String,
        required: [true, "Role is required"],
        enum: ["admin", "user"],
        default: "user"
    }
});

module.exports = mongoose.model("User", UserSchema);