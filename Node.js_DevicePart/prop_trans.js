var Web3 = require('web3');
var solc = require('solc');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var myContract = 'contract IoT_Test { address owner; event Device_Control(string out); string deviceB_state; uint Action_time; struct Device{ uint dev_num; string state; } function IoT_Test(){ owner = msg.sender; } function Control_Device(uint LuxValue) constant returns(string) { if(msg.sender == owner){ if(LuxValue<24){ Device_Control("On"); return "On Event"; } else{ Device_Control("Off"); return "Off Event"; } } else{ return "Contract message : Not owner"; } } function Check_device(string state) constant returns(string) { Action_time=block.timestamp; deviceB_state=state; return deviceB_state; } }';

var ContractAddress = "0x9e5d1ddba31adda1395570549871bb00d9328b8a";


var compareC = solc.compile(myContract,1);

var CompiledContract = web3.eth.contract(JSON.parse(compareC.contracts.IoT_Test.interface));

var Device_Contract = CompiledContract.at(ContractAddress);

var LuxValue = 0;



var pp = Math.floor(Math.random() * 10);

if (pp<0){
	LuxValue = 21;
	console.log("LuxValue 01 : "+ LuxValue);	
	Device_Contract.Control_Device.sendTransaction(LuxValue,{from:web3.eth.accounts[0]});
	
	LuxValue = 25;
	console.log("LuxValue 02 : "+ LuxValue);	
	Device_Contract.Control_Device.sendTransaction(LuxValue,{from:web3.eth.accounts[0]});
}
else{
	LuxValue = 25;
	console.log("LuxValue 02 : "+ LuxValue);	
	Device_Contract.Control_Device.sendTransaction(LuxValue,{from:web3.eth.accounts[0]});
	
	LuxValue = 21;
	console.log("LuxValue 01 : "+ LuxValue);	
	Device_Contract.Control_Device.sendTransaction(LuxValue,{from:web3.eth.accounts[0]});
}