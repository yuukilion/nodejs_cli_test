const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { getPackageName } = require('./lib/name');
const { readMarkdownFileSync } = require('./lib/file');

const { argv } = yargs(hideBin(process.argv))
    .option('name', {
        describe: 'CLI名を表示'
    })
    .option('file',{
        describe: 'Markdownファイルのパス'
    });

    if (argv.name){
        const name = getPackageName();
        console.log(name);

        //nameオプションが入っていた場合には他のオプションを使わないので正常終了
        process.exit(0);
    }

//指定されたmarkdownファイルを読み込む
const markdownStr = readMarkdownFileSync(path.resolve(__dirname,argv.file));
console.log(markdownStr);