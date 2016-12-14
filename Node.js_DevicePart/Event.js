var Web3 = require('web3');
var solc = require('solc');


var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//var myContract = 'contract IoT_Test { address owner; event Device_Control(string out); function IoT_Test(){ owner = msg.sender; } function Control_Device(uint LuxValue) constant returns(string) { if(msg.sender == owner){ if(LuxValue<24){ Device_Control("On"); } else{ Device_Control("Off"); } } else{ return "Contract message : Not owner"; } } }';
var myContract = 'contract IoT_Test { address owner; event Device_Control(string out); string deviceB_state; uint Action_time; struct Device{ uint dev_num; string state; } function IoT_Test(){ owner = msg.sender; } function Control_Device(uint LuxValue) constant returns(string) { if(msg.sender == owner){ if(LuxValue<24){ Device_Control("On"); return "On Event"; } else{ Device_Control("Off"); return "Off Event"; } } else{ return "Contract message : Not owner"; } } function Check_device(string state) constant returns(string) { Action_time=block.timestamp; deviceB_state=state; return deviceB_state; } }';

//var ContractAddress = "0x00a2933f423d9e3dd875f6c398f88b4e02b9a3be";
var ContractAddress = "0x9e5d1ddba31adda1395570549871bb00d9328b8a";

var acc = web3.eth.accounts;

var compareC = solc.compile(myContract,1);

var abiC = web3.eth.contract(JSON.parse(compareC.contracts.IoT_Test.interface));

var CompiledContract = abiC;
var Device_Contract = CompiledContract.at(ContractAddress);

var event = Device_Contract.Device_Control();

// watch for changes
event.watch(function(error, result){
    if (!error){    	
    	console.log(result);
    	var state = "";
		console.log("Block Watching...");		
		var status = result.args.out;
		if (status==="On"){
			console.log("Device Control : " + status);			
			state ="On";			
			Device_Contract.Check_device.sendTransaction(state,{from:acc[0]});			
			console.log("Report Action Result");			
		}
		else {			
			
			console.log("Device Control : " + status);			
			state ="Off";			
			Device_Contract.Check_device.sendTransaction(state,{from:acc[0]});			
			console.log("Report Action Result");
		}		
	}    
	else{
		console.log("Error : watching call 1");
		console.log(error);
	}
});

