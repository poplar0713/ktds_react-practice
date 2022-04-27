import React from "react";
import Ipad from "./Ipad";
import IpadAir from "./IpadAir";
import IpadPro from "./IpadPro";

function IpadComponent(){
    return(
        <div class="bg-gray-100">
            <IpadAir></IpadAir>
            <IpadPro></IpadPro>
            <Ipad></Ipad>
        </div>
        
    )
}

export default IpadComponent;