
interface Config{
    url:string
}
declare module "myPack" {
    function init(config:Config):boolean
    function exit(num:number):number
}