import { checkForName } from "../src/client/js/nameChecker"

describe ("Testing the submit functionallity", () => {
    test ("Testing the checkForName() function", () => {
        expect (checkForName).toBeDefined();
    })
});
