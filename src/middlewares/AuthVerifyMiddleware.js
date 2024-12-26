module.exports = (req, res, next) => {
    let token = req.headers['token'];
    jwt.verify(token, "SecretKey123456789", (err, decoded) => {
        if (err) {
            res.status(401).json({ status: "unauthorized" });
        } else {
            req.headers.email = decoded.data;
            next();
        }
    });
};
