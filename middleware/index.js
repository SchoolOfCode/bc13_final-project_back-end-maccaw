import admin from "../firebase-config.js";

export default async function decodeToken(req, res, next) {

  

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodeValue = await admin.auth().verifyIdToken(token);
    if (decodeValue) {
      req.uid = decodeValue.uid
      return next()
    }

    return res.json({ message: "Un-Authorized" });
  } catch (e) {
    return res.json({ message: "Internal Error" });
  }
}
