import React from "react";
import Button from "../elements/Button";
import Text from "../elements/Text";

const Test = (props) => {
    return(
        <React.Fragment>
            <Button margin="20px" bg="#4287f5" border="none" borderRadius="10px"
                width="50px" height="50px" boxShadow 
            >버튼</Button> 
            <Button is_float>+</Button>
            <Text>텍스트</Text>
        </React.Fragment>
    )
}

export default Test;