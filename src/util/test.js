import Web3 from 'web3'
var CryptoJS = require("crypto-js")
var SHA256 = require("crypto-js/sha256");

const abi = require('./abi.json')
const CONTRACT_ADDRESS = '0xb3aacb110b79b557f806c9cc2d93c711c9f6d126';

export const store = async (data) => {
    const stringData = JSON.stringify(data)
    const hashData = SHA256(stringData).toString(CryptoJS.enc.Hex)
    window.web3 = new Web3(window.web3.currentProvider)

    if (window.web3.currentProvider.isMetaMask === true) {
        window.web3.eth.getAccounts(async (error, accounts) => {
            console.log(accounts)
            if (accounts.length == 0) {
            }
            else {
                window.web3.eth.defaultAccount = accounts[0];
                const contract = new window.web3.eth.Contract(abi, CONTRACT_ADDRESS)
                try {
                    console.log(hashData)
                    const result = await contract.methods.store(hashData).send({ from: accounts[0] })
                    return { result: "succes", status: "ok" }
                } catch (e) {
                    console.log(e)
                    return { result: "fail", status: "cant send txt" }

                }
            }
        });
    } else {
        return { result: "fail", status: "missing metamask" }

        // Another web3 provider
    }

}

export const read = async (address) => {
    // console.log(SHA256("khakha"))
    window.web3 = new Web3(window.web3.currentProvider)

    if (window.web3.currentProvider.isMetaMask === true) {
        window.web3.eth.getAccounts(async (error, accounts) => {
            console.log(accounts)
            if (accounts.length == 0) {
            }
            else {
                window.web3.eth.defaultAccount = accounts[0];
                const contract = new window.web3.eth.Contract(abi, CONTRACT_ADDRESS)
                try {
                    const result = await contract.methods.getData(address).call()
                    console.log(result)
                    return { result: "succes", status: "ok", result }

                } catch (e) {
                    return { result: "fail", status: "cant retrieve data" }

                }
            }
        });
    } else {
        return { result: "fail", status: "missing metamask" }

    }

}