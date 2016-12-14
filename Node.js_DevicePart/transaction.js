var Web3 = require('web3');
var solc = require('solc');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

/*
var myContract = 'contract evenTest { address owner; event test(uint out); function evenTest(){ owner = msg.sender; } function shoot() constant returns(string) { if(msg.sender == owner){ test(block.timestamp); return "Contract message : owner "; } else{ return "You Are Not Owner"; } } }';

var compareC = solc.compile(myContract,1);

var abiC = web3.eth.contract(JSON.parse(compareC.contracts.evenTest.interface));
	
var test = "0xa74a61fe5c399f6bdc8144b77988a535adc93aec";

var ClientReceipt = abiC;
var clientReceipt = ClientReceipt.at(test);

setInterval(function(){
	//clientReceipt.shoot.sendTransaction({from:web3.eth.accounts[0]});
	var start_t = Math.floor((new Date().getTime())/1000);
	clientReceipt.shoot.sendTransaction(start_t,{from:eth.accounts[0]});
	
},20000);
*/

//var myContract = 'contract IoT_Test { address owner; event Device_Control(string out); function IoT_Test(){ owner = msg.sender; } function Control_Device(uint LuxValue) constant returns(string) { if(msg.sender == owner){ if(LuxValue<24){ Device_Control("On"); } else{ Device_Control("Off"); } } else{ return "Contract message : Not owner"; } } }';

//var ContractAddress = "0x9e5d1ddba31adda1395570549871bb00d9328b8a";

var myContract = 'contract IoT_Test { address owner; event Device_Control(string out); string deviceB_state; uint Action_time; struct Device{ uint dev_num; string state; } function IoT_Test(){ owner = msg.sender; } function Control_Device(uint LuxValue) constant returns(string) { if(msg.sender == owner){ if(LuxValue<24){ Device_Control("On"); return "On Event"; } else{ Device_Control("Off"); return "Off Event"; } } else{ return "Contract message : Not owner"; } } function Check_device(string state) constant returns(string) { Action_time=block.timestamp; deviceB_state=state; return deviceB_state; } }';

var ContractAddress = "0x9e5d1ddba31adda1395570549871bb00d9328b8a";

var compareC = solc.compile(myContract,1);

var CompiledContract = web3.eth.contract(JSON.parse(compareC.contracts.IoT_Test.interface));

var Device_Contract = CompiledContract.at(ContractAddress);

var LuxValue = 21;

//Device_Contract.Control_Device.sendTransaction(LuxValue,{from:web3.eth.accounts[0]});

Device_Contract.Check_device.sendTransaction("On",{from:web3.eth.accounts[0]});
