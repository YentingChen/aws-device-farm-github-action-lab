const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NativeComponentsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cameraElement () {
        return $("id=com.amazonaws.devicefarm.android.referenceapp:id/camera_surface_view");
    }

    async swipeToCameraElement () {
        await new Promise(resolve => setTimeout(resolve, 500));
        for(let i = 0; i < 5; i++){
            let size = await driver.getWindowRect();
            let startX =  size.width * 0.95;
            let  startY = size.height / 4;
            let endX = size.width * 0.05;

            await driver.touchPerform([
              { action: 'press', options: {x: startX, y: startY}},
              { action: 'moveTo', options: {x: endX, y: startY}},
              { action: 'release' }
            ]);
            await new Promise(resolve => setTimeout(resolve, 250));
            if (i >= 2 && await this.cameraElement.isExisting()) {
                 break;
            }
        }
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        return super.open("Native Components");
    }
}

module.exports = new NativeComponentsPage();