var Web3 = require('web3');
var solc = require('solc');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var defaultBlock = web3.eth.defaultBlock;
var DeBlock = web3.eth.getBlock(defaultBlock);

var defaultBlock = web3.eth.defaultBlock;
var DeBlock = web3.eth.getBlock(defaultBlock);

//var DeBlock2 = web3.eth.getBlock(DeBlock.number-1);
//var DeBlock3 = web3.eth.getBlock(DeBlock.number-200);

//var ddd = web3.eth.getTransaction("0x308657cdf1ce4a1566d17963a6bba6866540781269fe8fc783446ca279c8aef9");

var DeBlock3 = web3.eth.getBlock(1288);
console.log(DeBlock3);

var code = web3.eth.getCode("0x02068cd95642a7fc11d08a44ef715ee0c4f90d3a");
//console.log("Smart Contract Code : " + code);
/*
var number = web3.eth.getTransaction("0xadbe8ccbac4ccebbac2a16e4936ca1773d653adc1e8a29880f530cdae5f4a062");
//0x63b25c0c90603e950c6fb382df4cf76cddd8b0a25388ea103879a2fcf3eac9cb
//0xadbe8ccbac4ccebbac2a16e4936ca1773d653adc1e8a29880f530cdae5f4a062
//0xadbe8ccbac4ccebbac2a16e4936ca1773d653adc1e8a29880f530cdae5f4a062

console.log(number);

*/
var state = web3.eth.getStorageAt("0x9e5d1ddba31adda1395570549871bb00d9328b8a", 1);
console.log("Device B State : ");
console.log(state);
//console.log(web3.eth.accounts[0]);

