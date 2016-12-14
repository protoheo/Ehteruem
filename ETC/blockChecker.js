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


var filter = web3.eth.filter({fromBlock:100, toBlock: 'latest', address: conAddr});
filter.get(function(error, result) {
	if(!error){
		
		console.log(result);
		/*
		var dat = web3.eth.getTransactionReceipt(result[result.length-1].transactionHash);
		console.log("Transaction log : " + dat.logs[0].data);
		var dat_sum = dat.logs[0].data.toString(16);
		//var dat_sum = parseInt(dat.logs[0].data, 16);
		console.log("Convert : " + dat_sum);
		var tst = dat.logs[0].data;
		console.log("tset console : "+tst[1]);

		
		
		console.log("Transaction Hash : "+ result[450].transactionHash);
		var dat = web3.eth.getTransactionReceipt(result[450].transactionHash);
		console.log("Transaction log : " + dat.logs[0].data);
		console.log(web3.eth.getTransactionReceipt(result[450].transactionHash));
		console.log("#######################################");
		console.log(web3.eth.getTransaction(result[450].transactionHash));
		console.log(result[0].transactionHash);
		*/

	}
	else{
		console.log(error);
	}

	
});

/*

while(to_num!==8000){
	var DeBlock = web3.eth.getBlock(to_num);
	console.log(DeBlock.number+" : "+DeBlock.size);
	//var DeBlock2 = web3.eth.getBlock(to_num-1);
	
	//var diff = DeBlock.timestamp - DeBlock2.timestamp; 
	
	//console.log("Block number " + DeBlock.number + " : " +JSON.parse(DeBlock.difficulty));
	to_num--;
}

/*
var to_num = DeBlock.number;
for (var i = 1756; i <= to_num; i++){
	var DeBlock = web3.eth.getBlock(i);
	//console.log(JSON.parse(DeBlock.difficulty));
	console.log(DeBlock.gasLimit);
}
*/
//var block_diff2 = JSON.parse(DeBlock3.difficulty) + Math.floor(JSON.parse(DeBlock3.difficulty) / 2048) * Math.max(1 - Math.floor((DeBlock2.timestamp - DeBlock3.timestamp)/ 10), -99) + Math.floor(2*(Math.floor(DeBlock2.number / 100000) - 2));
//var block_diff2 = JSON.parse(DeBlock3.difficulty) + Math.floor(JSON.parse(DeBlock3.difficulty) / 2048) * Math.max(1 - Math.floor((DeBlock2.timestamp - DeBlock3.timestamp)/ 10), -99) + Math.floor(2*(Math.floor(DeBlock2.number / 100000) - 2));
//console.log(block_diff2);