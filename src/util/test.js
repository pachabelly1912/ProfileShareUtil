import Web3 from 'web3'
var CryptoJS = require("crypto-js")
var SHA256 = require("crypto-js/sha256");

const abi = require('./abi.json')
const CONTRACT_ADDRESS = '0xb3049272d90285b3381405b5b126cdae2d76d605';

export const storePublic = async (data) => {
    const stringData = JSON.stringify(data)
    const hashData = SHA256(stringData).toString(CryptoJS.enc.Hex)
    window.web3 = new Web3(window.web3.currentProvider)

    if (window.web3.currentProvider.isMetaMask === true) {
        window.web3.eth.getAccounts(async (error, accounts) => {
            console.log(accounts)
            if (accounts.length === 0) {
            }
            else {
                window.web3.eth.defaultAccount = accounts[0];
                const contract = new window.web3.eth.Contract(abi, CONTRACT_ADDRESS)
                try {
                    console.log(hashData)
                    await contract.methods.storePublicData(hashData).send({ from: accounts[0] })
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

export const readPublic = async (address) => {
    // console.log(SHA256("khakha"))
    window.web3 = new Web3(window.web3.currentProvider)

    if (window.web3.currentProvider.isMetaMask === true) {
        window.web3.eth.getAccounts(async (error, accounts) => {
            console.log(accounts)
            if (accounts.length === 0) {
            }
            else {
                window.web3.eth.defaultAccount = accounts[0];
                const contract = new window.web3.eth.Contract(abi, CONTRACT_ADDRESS)
                try {
                    const result = await contract.methods.getPublicData(address).call()
                    console.log(result)
                    return { result: "succes", status: "ok", data: result }

                } catch (e) {
                    return { result: "fail", status: "cant retrieve data" }

                }
            }
        });
    } else {
        return { result: "fail", status: "missing metamask" }

    }

}

export const storePrivate = async (data) => {
    const stringData = JSON.stringify(data)
    const hashData = SHA256(stringData).toString(CryptoJS.enc.Hex)
    window.web3 = new Web3(window.web3.currentProvider)

    if (window.web3.currentProvider.isMetaMask === true) {
        window.web3.eth.getAccounts(async (error, accounts) => {
            console.log(accounts)
            if (accounts.length === 0) {
            }
            else {
                window.web3.eth.defaultAccount = accounts[0];
                const contract = new window.web3.eth.Contract(abi, CONTRACT_ADDRESS)
                try {
                    console.log(hashData)
                    await contract.methods.storePrivateData(hashData).send({ from: accounts[0] })
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

export const readPrivate = async (address) => {
    // console.log(SHA256("khakha"))
    window.web3 = new Web3(window.web3.currentProvider)

    if (window.web3.currentProvider.isMetaMask === true) {
        window.web3.eth.getAccounts(async (error, accounts) => {
            console.log(accounts)
            if (accounts.length === 0) {
            }
            else {
                window.web3.eth.defaultAccount = accounts[0];
                const contract = new window.web3.eth.Contract(abi, CONTRACT_ADDRESS)
                try {
                    const result = await contract.methods.getPrivateData(address).call()
                    console.log(result)
                    return { result: "succes", status: "ok", data: result }

                } catch (e) {
                    return { result: "fail", status: "cant retrieve data" }

                }
            }
        });
    } else {
        return { result: "fail", status: "missing metamask" }

    }

}