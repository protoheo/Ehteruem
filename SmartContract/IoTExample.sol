contract IoT_Test {
	address owner;
	address deviceB;
    event Device_Control(string out);
    string deviceB_state;
    
    uint Action_time;

	function IoT_Test(){		
		owner = msg.sender;
		deviceB= 0xd8b9a171358a27480055ac2689e3969847d7d549;
	}
    function Control_Device(uint LuxValue) constant returns(string) {
    	if(msg.sender == owner){
    		if(LuxValue<24){
    			Device_Control("On");
    			return "On Event";
    		}
    		else{
    			Device_Control("Off");
    			return "Off Event";
    		}
    	}
    	else{
    		return "Contract message : Not owner";
    	}
    }
    
    function Check_device(string state) {
        if(msg.sender == deviceB){
            Action_time=block.timestamp;
            deviceB_state=state;
        }
    }
}