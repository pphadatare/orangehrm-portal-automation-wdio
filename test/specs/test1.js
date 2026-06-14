const loginPage=require('../pageobjects/login.page')

const jsonparse=require('fs')
const creds=JSON.parse(jsonparse.readFileSync("test/testData/loginpage.json"))

xdescribe('Ecommerce Application', () => {

    creds.forEach(({username,password})=>{
    xit.skip('Login Fail page', async () => {

        // WebdriverIO Async

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        console.log(await browser.getTitle())

     await expect(browser).toHaveUrl("https://rahulshettyacademy.com/loginpagePractise/")
     await expect(browser).toHaveTitle(expect.stringContaining("LoginPage Practise | Rahul Shetty Academy"))
        
        await $("input[name='username']").setValue("rahulshettyacademy")
        await browser.pause(6000)

        await $("#username").setValue("secondCSS")

        await browser.pause(5000)

        const password = await $("//input[@type='password']")

        await password.setValue("learning")

        await browser.pause(5000)

        await $("#signInBtn").click()

    
        // await browser.pause(3000)

        // console.log(await $(".alert-danger").getText())

        browser.waitUntil()
        await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value') === 'Sign In',
    {
        timeout: 5000,
        timeoutMsg: 'Error message is not showing up'
    })
    await console.log(await $(".alert-danger").getText())
 
    await expect($("p")).toHaveText(expect.stringContaining("username is rahulshettyacademy and Password is Learning@830$3mK2"))

    })})


    xit("Login success test case ",async()=>{

       
       await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

       await $("#username").setValue("rahulshettyacademy")

       await $("#password").setValue("Learning@830$3mK2")

       await $("#signInBtn").click()

       await $(".btn-primary").waitForExist

       await expect(browser).toHaveUrl(expect.stringContaining("https://rahulshettyacademy.com/angularpractice/shop"))
       

    })

})



//custom waits using fluent wait



// browser.waitUntil(()=> (browser.getTitle())==="Title",
// {

//     timeout:5000,
//     timeoutMsg:"",
//     interval:500
// }

// )


// browser.setTimeout({implicit:500})

// $('p').waitForClickable


// browser.waitUntil(()=>(browser.getTitle())==="Test",
// {
//     timeout:5000,
//     timeoutMsg:"This is test",
//     interval: 500

// }
// )


