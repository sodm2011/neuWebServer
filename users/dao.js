import model from "./model.js";
export const createUser = (user) => model.create(user);
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) => 
    model.findOne({ username: username });
export const findUserByCredentials = async (username, password) => {
    try {
        const user = await model.findOne({ username: username, password: password });
        return user;
    } catch (err) {
        console.log("error in findUserByCredentials: ", err);
        return null;
    }
};
export const updateUser = (userId, user) => 
    model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => 
    model.deleteOne({ _id: userId });