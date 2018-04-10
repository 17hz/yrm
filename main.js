#!/usr/bin/env node

const childProcess = require("child_process");

const registries = require("./registries.json");
const program = require("commander");
const PKG = require("./package.json");

program
    .version(PKG.version);

program
    .command('ls')
    .description('List all the registries')
    .action(onList);

program
    .command('current')
    .description('Show current registry name')
    .action(showCurrent);

program
    .command('use <registry>')
    .description('Change registry to registry')
    .action(onUse);

//TODO:增加自定义源    
// program
//     .command('add <registry> <url> [home]')
//     .description('Add one custom registry')
//     .action(onAdd);

//TODO:删除源   
// program
//     .command('del <registry>')
//     .description('Delete one custom registry')
//     .action(onDel);

//TODO:主页   
// program
//     .command('home <registry> [browser]')
//     .description('Open the homepage of registry with optional browser')
//     .action(onHome);

//TODO:测试延迟 
// program
//     .command('test [registry]')
//     .description('Show response time for specific or all registries')
//     .action(onTest);

program
    .command('help')
    .description('Print this help')
    .action(function () {
        program.outputHelp();
    });

program
    .parse(process.argv);

if(process.argv.length - 2 === 0){
    program.outputHelp()
}    

function onList(){
    getCurrentRegistry(cur => {
    let infos = [""];
    Object.keys(registries).forEach(key => {
        let prefix = registries[key]["registry"] === cur?"* " :"  ";
        let item = `${prefix}${key} ${line(key,8)} ${registries[key]["registry"]}`
        infos.push(item)
    })
    infos.push("")
    printMsg(infos)
})
}

function showCurrent(){
    getCurrentRegistry(cur => {
        Object.keys(registries).forEach(key => {
            if(registries[key]["registry"] === cur){
                console.log(key)
            }
        })
    })
}

function onUse(name){
    if(name in registries){
    let registry = registries[name]["registry"];   
    childProcess.exec(
        `yarn config set registry ${registry}` , 
        (err,stdout,stderr) => {
            if(err) console.log(err)
            else console.log(`Registry has been set to: ${registry}`)
        })
    }
    else{
        console.log(`Not find registry: ${name}`)
    }
}

function getCurrentRegistry(func){
  childProcess.exec(
        "yarn config get registry" , 
        (err,stdout,stderr) => {
            if(err) {console.log(err)}
            else func(stdout.replace(/\n|\r/gi, ''))
    })
}

/**
 * print Message
 */
function printMsg(infos){
   infos.forEach(info => {
       console.log(info)
   }) 
}

function line(str,len){
    return  new Array(Math.max(2,len-str.length)).join("-")
}

