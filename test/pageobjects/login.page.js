
const waitutils=require('../utils/waitUtils')
class LoginPage{


get userName(){

    return $("//input[@name='username']")
}

get password(){

    return $("//input[@name='password']")
}

get loginButton(){

    return $("//button[@type='submit']")
}

get loginHeading(){
    return $("//div/h5[contains(normalize-space(),'Login')]")
}

get dashboardLabel(){

    return $("//span[text()='Dashboard']")
    
}

get orangeHrmLogo(){
return $("//img[contains(@src,'orangehrm-logo.png')]")
}

get loggedInUserName(){

    return $("//p[text()='Oouumcdnfd Simmons']")
}

get errormsgInvalidLogin(){

    return $("//p[text()='Invalid credentials']")
}

get profileClick(){

    return $("//p[@class='oxd-userdropdown-name']")
}

get logoutBtn(){

    return $("//ul/li/a[text()='Logout']")
}

async login(userName,password){
    await waitutils.waitForElementDisplayed(this.loginHeading)
    await this.userName.setValue(userName)
    await this.password.setValue(password)
   await this.loginButton.click()

}

async logout (){

    if(await this.profileClick.isDisplayed){

       await this.profileClick.click()
       
    }

    await this.logoutBtn.click()
    
}

}

module.exports=new LoginPage()