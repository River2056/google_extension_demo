console.log('contentScript.js entered...');
document.getElementById('unblockBtn').addEventListener('click', () => {
    chrome.tabs.query(
        {active: true, currentWindow: true}, 
        function(tabs) {
            chrome.tabs.executeScript({ 
                code: '$.unblockUI();'
            });
        }
    );
});

window.onload = () => {
    document.getElementById('loginField').value = '3.13.50';
}

document.getElementById('homepageBtn').addEventListener('click', () => {
    chrome.tabs.query(
        {active: true, currentWindow: true}, 
        function(tabs) {
            chrome.tabs.executeScript(
                { code: `location.href = 'http://127.0.0.1:8080/tps'` }
            );
        }
    );
});

// http://223.200.228.113/tps/
document.getElementById('homepageBtn223').addEventListener('click', () => {
    chrome.tabs.query(
        {active: true, currentWindow: true}, 
        function(tabs) {
            chrome.tabs.executeScript(
                { code: `location.href = 'http://223.200.228.113/tps/'` }
            );
        }
    );
});

document.getElementById('loginBtn').addEventListener('click', () => {
    const account = document.getElementById('loginField').value;
    chrome.tabs.query(
        {active: true, currentWindow: true}, 
        function(tabs) {
            chrome.tabs.executeScript({ 
                code: `document.getElementById('orgUserId').value = '${account}';
                document.getElementById('orgUserIdExt').value = '0';
                document.getElementById('orgPassword').value = 'abc123';
                document.querySelector("#orgAccountMode > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td:nth-child(1) > a > div").click();` 
            });
        }
    );
});

document.getElementById('getPriceBtn').addEventListener('click', () => {
    chrome.tabs.query(
        {active: true, currentWindow: true}, 
        function(tabs) {
            chrome.tabs.executeScript({ 
                code: `location.href = 'http://127.0.0.1:8080/tps/TenderManagement/showTenderTmp';` 
            });
        }
    );
});

document.getElementById('fileNameBtn').addEventListener('click', () => {
    let date = new Date();
    let name = 'kevin';
    let month = parseInt(date.getMonth()) + 1 < 10 ? "0" + (parseInt(date.getMonth()) + 1) : parseInt(date.getMonth()) + 1;
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let fileName = `${name}_${date.getFullYear()}${month}${day}_${hours}${minutes}${seconds}`;
    document.getElementById('fileNameField').value = fileName;
});

document.getElementById('findPriceBtn').addEventListener('click', () => {
    chrome.tabs.query(
        {active: true, currentWindow: true}, 
        function(tabs) {
            chrome.tabs.executeScript({ 
                code: `location.href = 'http://127.0.0.1:8080/tps/QueryTenderNotice/query/searchTenderNotice';` 
            });
        }
    );
});

document.getElementById('nodejsServerBtn').addEventListener('click', () => {
    window.open('http://127.0.0.1:8080/tps/tp/prop/show', "", "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,fullsscreen=yes")
});

// 2nd gen
document.getElementById('homepageBtn2').addEventListener('click', () => {
    chrome.tabs.query(
        { active: true, currentWindow: true },
        function(tabs) {
            chrome.tabs.executeScript({
                code: `location.href = 'http://61.57.42.201/pis/main/pis/client/index.do';`
            });
        }
    );
});

document.getElementById('loginBtn2').addEventListener('click', () => {
    chrome.tabs.query(
        { active: true, currentWindow: true },
        function(tabs) {
            chrome.tabs.executeScript({
                code: `
                document.querySelector('form[name=orgForm]').action = 'http://61.57.42.201/pis/main/sso/login.jsp';
                document.querySelector("#idForLogin01").value = '9.99';
                document.querySelector("#uidExtForLogin01").value = '18';
                document.querySelector("#password01").value = 'abc123';
                document.querySelector("#imageLogin01").click();
                `
            });
        }
    );
});