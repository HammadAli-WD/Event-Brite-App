const express = require("express")
const {join} = require("path")
const {check, validationResult, sanitizeBody} = require("express-validator")
const { readDB, writeDB } = require("./utilities")


const router = express.Router()
formPath = join(__dirname, "form.json")

router.post("/", 
[
    check("FirstName").exists().withMessage("Please enter the First-Name"),
    check("ID").exists().withMessage("Please assign the ID"),    
    check("SecondName").exists().withMessage("Please enter the Last Name"),
    check("Email").exists().withMessage("Please insert an email address").isEmail().withMessage("Please Use proper email"),
    check("TimeOfArrival").exists().withMessage("Please mention the Arrival Time").isDate()
], async(req, res, next) => {
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
        const error = new Error()
        //error.httpStatusCode = 400
        error.message = errors
        next(error)
      }
    try {
        const formData = await readDB(formPath)
        const idCheck = formData.find((x) => x.ID === req.body.ID)
        if(idCheck) {
            const error = new Error()
            error.message = "ID should be unique"
            next(error)
        } else {
            formData.push(req.body)
            await writeDB(formPath, formData)
            res.send("Created")
        }
    } catch (error) {
        next(error)
    }
}
)

router.get("/", async(req, res, next) => {
try {
    const data = await readDB(formPath)
    res.send ({numberOfItems: data.length, data})
} catch (error) {
    console.log(error)
    const err = new Error('A problem occured in reading the data')
    next(err)
}
})



module.exports = router
