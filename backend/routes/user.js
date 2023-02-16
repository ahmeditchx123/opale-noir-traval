const router = require('express').Router();
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    console.log('hello there');
    res.status(200).json({message: 'hello there'});
});


router.post('/register', async (req, res) => {
    const { username, email, firstName, lastName, telephone, password } = req.body;
    
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        res.status(201).json({
            username,
            email,
            firstName,
            lastName,
            telephone,
            password: hashedPassword
        });
    }catch(error) {
        console.log(error)
    }
})


module.exports = router;