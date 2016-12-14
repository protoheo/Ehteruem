var Web3 = require('web3');
var solc = require('solc');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var myContract = 'contract evenTest { address owner; event test(uint out); function evenTest(){ owner = msg.sender; } function shoot() constant returns(string) { if(msg.sender == owner){ test(block.timestamp); return "Contract message : owner "; } else{ return "You Are Not Owner"; } } }';

var compareC = solc.compile(myContract,1);

var abiC = web3.eth.contract(JSON.parse(compareC.contracts.evenTest.interface));
	
var test = "0xa74a61fe5c399f6bdc8144b77988a535adc93aec";

var ClientReceipt = abiC;
var clientReceipt = ClientReceipt.at(test);

var event = clientReceipt.test();

// watch for changes
event.watch(function(error, result){
    if (!error){ 
		console.log("Device B - LED : On ");
		var comp = Math.floor((new Date().getTime())/1000);
		//console.log(result);
		var tmp = result.blockNumber;
		var DeBlock = web3.eth.getBlock(tmp);		
		//console.log(DeBlock);
		//console.log(DeBlock.timestamp);
		//console.log(comp);
		var res = comp - DeBlock.timestamp;
		console.log("Block Number : " + tmp);
		console.log("Propagation Time : " + res);
		
	}
	else{
		console.log("Error : watching call 1");
		console.log(error);
	}
});