function f(){return 'hello'}
console.log(f())

import * as crypto from "crypto"

interface block{
    hash:string
    prevhash:string
    height:number
    data:string
}
class block implements block{
    constructor(
        prevhash:string,
        height:number,
        data:string
    ){this.hash=block.cal(prevhash,height,data)}
    static cal(prevhash:string,height:number,data:string){
        const str=`${prevhash}${height}${data}`
        return crypto.createHash('sha256').update(str).digest("hex")
    }
}


class blockchain {
    private blocks:block[]
    constructor(){
        this.blocks=[]
    }
    getprevhash(){
        if(this.blocks.length === 0){return ""}
        return this.blocks[this.blocks.length-1].hash
    }
    addblock(data:string){
        const termblock = new block(this.getprevhash(),this.blocks.length,data)
        this.blocks.push(termblock)
      }
    getchain(){
        return [...this.blocks]
    }
}

const newChain = new blockchain
newChain.addblock('first')
newChain.addblock('second')
console.log(newChain.getchain)