import { NodeErr } from "./NodeErr";

class LisErrores extends Array<NodeErr>{

    constructor(){
        super();
    }

    public static add(new_error:NodeErr){
        //console.log(new_error);
        this.prototype.push(new_error);
    }

}

export{LisErrores};