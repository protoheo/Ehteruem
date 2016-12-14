var Web3 = require('web3');
var solc = require('solc');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var defaultBlock = web3.eth.defaultBlock;
var DeBlock = web3.eth.getBlock(defaultBlock);

//var DeBlock2 = web3.eth.getBlock(DeBlock.number-1);
//var DeBlock3 = web3.eth.getBlock(DeBlock.number-200);

/*
var to_num = DeBlock.number;

for (var i = 10000; i < to_num; i++){
	var tmp1 = web3.eth.getBlock(i);
	var tmp2 = web3.eth.getBlock(i+1);
	var time = tmp2.timestamp-tmp1.timestamp;
	
	console.log(tmp1.number + " : " + time);

}
//console.log(DeBlock);
*/


//var conAddr = "0x244ec4d315974f8220d20bb189a0f5ec6dbee4ff";

var conAddr = "0x9e5d1ddba31adda1395570549871bb00d9328b8a";
var sedAddr = web3.eth.accounts[0];
console.log(sedAddr);

var filter = web3.eth.filter({fromBlock:100, toBlock: 'pending', address: sedAddr});
filter.get(function(error, result) {
	if(!error){		
		console.log(result);
	}
	
	else{
		console.log(error);
	}	
});

