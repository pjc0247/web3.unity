var str2unityStr = function(str) {
    let bufferSize = lengthBytesUTF8(str) + 1;
    let buffer = _malloc(bufferSize);
    return stringToUTF8(str, buffer, bufferSize);
};

mergeInto(LibraryManager.library, {
    w3u_initialize: function() {
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }

        console.log(web3);
    },
    w3u_isReady: function () {
        if (typeof web3 === undefined) 
            return false;
        return true;
    },

    w3u_getFirstAccount: function() {
        return str2unityStr(web3.eth.accounts[0]);
    },
    w3u_getAccount: function(idx) {
        return str2unityStr(web3.eth.accounts[idx]);
    },

    w3u_sendFund: function(receiver, value){
        var sender = web3.eth.accounts[0];
        var receiver = Pointer_stringify(receiver);
        var amount = web3.toWei(value, "ether");

        web3.eth.sendTransaction({from:sender, to:receiver, value: amount}, function(err, transactionHash) {
            console.log(err);
            if (!err)
                console.log(transactionHash);
        });
    },
    w3u_getBalance: function(address) {
        return web3.eth.getBalance(Pointer_stringify(address));
    }
});

