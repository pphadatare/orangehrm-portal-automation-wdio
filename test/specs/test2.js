const expectedchai=require('chai').expect    // Here I have imported an chai asserssion

const parseJson=require('fs')
const { password } = require('../pageobjects/login.page')

const homepagedata=JSON.parse(parseJson.readFileSync("test/testData/homepage.json"))



xdescribe("Login using Checkbox Selection",async()=>
{
    homepagedata.forEach(({username,password})=>{
 xit("UI Controls ",async()=>
{

await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

await $(input[name='username']).setValue("rahulshettyacademy")
await $(input[name='password']).setValue("Learning@830$3mK2")

let radiobuttons=await $$(span.checkmark)


expectneed(radiobuttons).to.equals

})})

})




