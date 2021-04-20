import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
    let token = await req.headers.authorization;
    if (!token) return res.status(401).send("Access Denied / Unauthorized request");

    try {
        token = token.split(' ')[1] // Remove Bearer from string

        if (token === 'null' || !token) return res.status(401).send('Unauthorized request');

        let verifiedUser = jwt.verify(token, process.env.JWT_KEY);   // config.TOKEN_SECRET => 'secretKey'
        if (!verifiedUser) return res.status(401).send('Unauthorized request')

        req.user = verifiedUser; // user_id & role
        next();

    } catch (error) {
        return await res.status(400).send("Invalid Token");
    }


}

export const IsUser = async (req, res, next) => {
    if (req.user.role=== 'user') {
       return  await next();
    }
    return await res.status(401).send("Unauthorized!");   
}
export const IsAdmin = async (req, res, next) => {
    if (req.user.role=== 'admin') {
        return await next();
    }
    return await res.status(401).send("Unauthorized!");
}
