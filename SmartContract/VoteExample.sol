contract evenTest {
	address owner;
	uint total_vote;
	uint vote_yes;
	uint vote_no;
	uint flag;
	uint public deadline;
	
    event Emit_vote(string out);
    event Device_Control(uint yes, uint no, string out2);
     
	function evenTest(){		
		owner = msg.sender;
		flag = 0;
		total_vote = 0;
		vote_yes = 0;
		vote_no = 0;
	}
    function VoteEmit(uint LuxValue) constant returns(string) {
    	if(msg.sender == owner){
    	    deadline = now + 5 * 1 minutes;
    	    flag = 1;
    		if(LuxValue<24){
    			Emit_vote("On");
    		}
    		else{
    			Emit_vote("Off");
    		}
    	}
    	else{
    		return "Contract message : Not owner";
    	}
    }
    function funcVote (uint voting){
        if(voting == 1){
            vote_yes = vote_yes + 1;
            total_vote = total_vote +1;
        }
        else if (voting == 0){
            vote_no = vote_no + 1;
            total_vote = total_vote +1;
        }
        
        if(total_vote >=5){
            if(vote_yes>=vote_no){
                Device_Control(vote_yes,vote_no,"Device_On");
            }
            else{
                Device_Control(vote_yes,vote_no,"Device_Off");
            }
            total_vote=0;
            vote_yes=0;
            vote_no=0;
        }
    }
}