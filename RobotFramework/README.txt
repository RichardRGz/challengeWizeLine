
With RobotFramework FIRST you'll need to download all of the required libraries in order to test the scripts, those libraries are:
- Python 3.10 or newer
- robotframework    4.1.1 (pip install robotframework)
- seleniumlibrary   5.1.3 (pip install --upgrade robotframework-seleniumlibrary)
- selenium2library  3.0.0 (pip install --upgrade robotframework-selenium2library)
- webdriver-manager 3.4.2 (pip install webdrivermanager)

Inside your Python folder path, the following drivers:
- chromedriver (In order to be able to use CHROME as a test tool)
- geckodriver (In order to be able to use FIREFOX as a test tool)
- operadriver (In order to be able to use OPERA as a test tool)
- edgechromiumdriver  (In order to be able to use EDGE as a test tool)

If you use VSCode, the extension (because you'll need a way to read the .robot extension files):
Robot Framework Language Server

All of the scripts are inside the package.json where on your CLI you only have to use the next command:
    npm run  "test-xxxx-xxxxx" (what is inside the double quotes are the scripts inside the mentioned package.json)

NOTE: Normally the variables.robot (or whatever you want to name it) it's not uploaded into your repository because it works as a .env file. But in this case, i'll leave it to make it more easier to dowloand and run it.