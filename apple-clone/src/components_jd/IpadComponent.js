import React from "react";
import IpadAir from "./IpadAir";
import IpadPro from "./IpadPro";

function IpadComponent(){
    return(
        <div class="bg-gray-100">
            <IpadAir></IpadAir>
            <IpadPro></IpadPro>
        </div>
        
    )
}

export default IpadComponent;