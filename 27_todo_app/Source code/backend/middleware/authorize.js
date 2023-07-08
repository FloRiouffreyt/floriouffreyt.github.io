import jwt from 'jsonwebtoken'

const authorize = async(req, res, next) => {
    const token = req.cookies.token
    if (!token) 
        return res.status(401).json({msg: 'Not authorized'})

    try {

        const decoded= jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user

        next()

    } catch (error) {
        console.error(error.message)
        res
            .status(500)
            .json({errors: 'Internal server error'})
    }
}

export default authorize