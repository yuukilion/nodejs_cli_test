const path = require('path');
const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const { argv } = yargs(hideBin(process.argv))
    .option('name', {
        describe: 'CLI名を表示'
    })
    .option('file',{
        describe: 'Markdownファイルのパス'
    });

    if (argv.name){
        const packageStr = fs.readFileSync(path.resolve(__dirname,'package.json'),{encoding: 'utf-8'});
        const package = JSON.parse(packageStr);
        console.log(package.name);

        //nameオプションが入っていた場合には他のオプションを使わないので正常終了
        process.exit(0);
    }

//指定されたmarkdownファイルを読み込む
const markdownStr = fs.readFileSync(path.resolve(__dirname,argv.file),{encoding: 'utf-8'});
console.log(markdownStr);