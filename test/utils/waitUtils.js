const DEFAULT_TIMEOUT = 10000;

class WaitUtils {

    async waitForElementClickable(element) {
        await element.waitForClickable({
            timeout: DEFAULT_TIMEOUT
        })
    }

    async waitForElementDisplayed(element) {
        await element.waitForDisplayed({
            timeout: DEFAULT_TIMEOUT
        })
    }

    async waitForElementSelected(element){
        await element.isSelected(
            {
                timeout:DEFAULT_TIMEOUT
            }
        )
    }
}

// export default new WaitUtils();

module.exports=new WaitUtils()