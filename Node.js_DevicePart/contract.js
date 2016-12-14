var Web3 = require('web3');
var solc = require('solc');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var accounts = web3.eth.accounts;

var myContract = 'contract IoT_Test { address owner; event Device_Control(string out); function IoT_Test(){ owner = msg.sender; } function Control_Device(uint LuxValue) constant returns(string) { if(msg.sender == owner){ if(LuxValue<24){ Device_Control("On"); } else{ Device_Control("Off"); } } else{ return "Contract message : Not owner"; } } }';

var compiledMine = solc.compile(myContract,1);

var abiContract = web3.eth.contract(JSON.parse(compiledMine.contracts.IoT_Test.interface));

var clientRe = abiContract.new({from:web3.eth.accounts[0], data: compiledMine.contracts.IoT_Test.bytecode, gas: 300000}, function(e, contract){
	if(!e) {

	  if(!contract.address) {		  
		  console.log("Smart Contract transaction send!! (Hash Number)");
		  console.log(" : " + contract.transactionHash);
		  console.log("Waiting to be mined...");

	  }
	  else{
		  console.log();
		  console.log("Contract mined!");
		  console.log("Contract Address: " + contract.address);
		  console.log(contract);
	  }

	}
	else{
		console.log(e);
	}
});
