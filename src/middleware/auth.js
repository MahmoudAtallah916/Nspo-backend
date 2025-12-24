import jwt from 'jsonwebtoken';

export const authAdmin = (req, res, next) => {
  let token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "No token provided" });

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.adminId = decoded.id;
    next();
  });
};