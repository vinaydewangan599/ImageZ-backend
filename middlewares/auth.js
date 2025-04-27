// filepath: c:\Users\ASUS\Desktop\ImageZ-main\servers\middlewares\auth.js
import jwt from 'jsonwebtoken';

// user authentication middleware
const authUser = async (req, res, next) => {
    // Ensure req.body is defined
    if (!req.body) {
        req.body = {};
    }
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Please login again.' });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        if (token_decode.id) {
            req.body.userId = token_decode.id;
        } else {
            return res.json({ success: false, message: 'Not Authorized. Please login again.' });
        }

        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default authUser;