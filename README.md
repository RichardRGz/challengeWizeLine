# challengeWizeLine
Here i'll upload the scripts required for the bootcamp challenge.

FIRST you'll need to dowload all of the required libraries in order to test these scripts, what are:
Python 3.10 or newer
robotframework    4.1.1 (pip install robotframework)
seleniumlibrary   5.1.3 (pip install --upgrade robotframework-seleniumlibrary)
selenium2library  3.0.0 (pip install --upgrade robotframework-selenium2library)
webdriver-manager 3.4.2 (pip install webdrivermanager)

Inside your Python folder path, the following drivers:
chromedriver (In order to be able to use CHROME as a test tool)
geckodriver (In order to be able to use FIREFOX as a test tool)
operadriver (In order to be able to use OPERA as a test tool)
edgechromiumdriver  (In order to be able to use EDGE as a test tool)

If you use VSCode, the extension (because you'll need a way to read the .robot extension files):
Robot Framework Language Server

AFTER you have installed all of the libraries and drivers needed, you can now run these following commands.

If you want to test individually each suite use these CLI commands.
    Login with a valid user: robot -d Results/IndividualReports/aValidLogin  Suites/aValidLogin.robot
    Login with an invalid user: robot -d Results/IndividualReports/bInvalidLogin  Suites/bInvalidLogin.robot
    Logout from the home page: robot -d Results/IndividualReports/cLogoutHome  Suites/cLogoutHome.robot
    Sort products by Price (low to high): robot -d Results/IndividualReports/dSortProducts  Suites/dSortProducts.robot
    Add multiple items to the shopping cart: robot -d Results/IndividualReports/eAddMultipleItems  Suites/eAddMultipleItems.robot
    Add a specific product:  robot -d Results/IndividualReports/fAddSpecificProduct  Suites/fAddSpecificProduct.robot
    Complete a purchase: robot -d Results/IndividualReports/gPurchaseFlow  Suites/gPurchaseFlow.robot

If you want to test it by tag use these CLI commands.
    By LoginRelated Tag: robot -d Results/TagReports/LoginRelated -i LoginRelated  Suites
    By ProductsRelated Tag: robot -d Results/TagReports/ProductsRelated -i ProductsRelated  Suites
    By PurchaseFlow Tag: robot -d Results/TagReports/PurchaseFlow -i PurchaseFlow  Suites

If you want to test all of the suites at the same time, use this CLI command.
    Run All Suites: robot -d Results/AllSuites  Suites

ALL of these tests can be run in other browsers, you'll only have to change the default which can be done in two ways:
    1. Change the browser directly from the variables.robot file from Chrome to Firerox or whatever browser you'd like to use.
    2. Add the this line "-v firefox" on the CLI of any of the commands where "firefox" could be changed with the browser which you'd like to use.
    Example IF you want to run PurchaseFlow with FF: robot -d Results/TagReports/PurchaseFlow -i PurchaseFlow -v browser:firefox  Suites

NOTE: Normally the variables.robot (or whatever you want to name it) it's not uploaded into your repository because it works as a .env file. But in this case, i'll leave it to make it more easier to dowloand and run it.