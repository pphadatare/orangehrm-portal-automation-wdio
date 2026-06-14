const loginpage=require('../pageobjects/login.page')
const waitutils=require('../utils/waitUtils')

const parsedata=require('fs')
const logindata=JSON.parse(parsedata.readFileSync("test/testData/login-data.json"))

describe("Login Feature",async()=>{

    logindata.validUsers.forEach(({username,password})=> {
    it("should login successfully Sanity",async()=>{

       await browser.url("/web/index.php/auth/login")

       await loginpage.login(username, password)
       await waitutils.waitForElementDisplayed(loginpage.dashboardLabel)
    await waitutils.waitForElementDisplayed(loginpage.orangeHrmLogo)
    //    await expect(loginpage.loggedInUserName).toHaveText(expect.stringContaining("Oouumcdnfd Simmons"))
     loginpage.logout()
    })
    })

    logindata.invalidUsers.forEach(({username,password})=>{
    it("Login Unsucessful Sanity",async()=>{


     await browser.url("/web/index.php/auth/login")

       await loginpage.login(username, password)

       await expect(loginpage.errormsgInvalidLogin).toHaveText(expect.stringContaining("Invalid credentials"))

    })
})

})


