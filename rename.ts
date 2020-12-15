/* eslint-disable no-console */
/**
 * @author xrkffgg
 * @created 2020.12.14
 * @description Quickly modify the project name
 * @description 快捷修改项目名称
 * @command node ./rename.js
 */

const { readFileSync, writeFileSync } = require('fs');

// Modify the following 3 as actual use in your own project
// 将下面 3 个修改为自己项目实际使用
const auth = 'xrkffgg';
const repo = 'react-component-template';
const componentTag = 'Temp';
const componentProps = `${componentTag}Props`;

// Switch
const re_license = false;
const re_package = true;
const re_docs = true;
const re_src = true;
const re_tests = true;

// Rename license
if (re_license) {
  let license = readFileSync('./LICENSE', { encoding: 'utf8', flag: 'r' });
  license = license.replace('xrkffgg', auth);
  writeFileSync('./LICENSE', license);
  console.log('Done license!');
}

// Rename package.json
if (re_package) {
  const packageFile = JSON.parse(
    readFileSync('./package.json', { encoding: 'utf8', flag: 'r' }),
  );
  packageFile.name = repo;
  packageFile.author = auth;
  packageFile.repository.url = `https://github.com/${auth}/${repo}`;
  packageFile.homepage = `https://github.com/${auth}/${repo}`;
  packageFile.bugs.url = `https://github.com/${auth}/${repo}/issues`;
  writeFileSync('./package.json', JSON.stringify(packageFile, null, 2));
  console.log('Done package!');
}

// Rename docs
if (re_docs) {
  let demo1 = readFileSync('./docs/example/one.tsx', {
    encoding: 'utf8',
    flag: 'r',
  });
  let demo2 = readFileSync('./docs/example/two.tsx', {
    encoding: 'utf8',
    flag: 'r',
  });
  demo1 = demo1.replace(/Temp/g, componentTag);
  demo2 = demo2.replace(/Temp/g, componentTag);
  writeFileSync('./docs/example/one.tsx', demo1);
  writeFileSync('./docs/example/two.tsx', demo2);
  console.log('Done docs!');
}

// Rename src
if (re_src) {
  let indexTS = readFileSync('./src/index.ts', { encoding: 'utf8', flag: 'r' });
  indexTS = indexTS.replace(/Temp/g, componentTag);
  indexTS = indexTS.replace(/TempProps/g, componentProps);
  writeFileSync('./src/index.ts', indexTS);

  let appTSX = readFileSync('./src/app.tsx', { encoding: 'utf8', flag: 'r' });
  appTSX = appTSX.replace(/Temp/g, componentTag);
  appTSX = appTSX.replace(/TempProps/g, componentProps);
  writeFileSync('./src/app.tsx', appTSX);
  console.log('Done src!');
}

// Rename tests
if (re_tests) {
  let indexTest = readFileSync('./tests/index.spec.tsx', {
    encoding: 'utf8',
    flag: 'r',
  });
  indexTest = indexTest.replace(/Temp/g, componentTag);
  writeFileSync('./tests/index.spec.tsx', indexTest);

  let testSnap = readFileSync('./tests/__snapshots__/index.spec.tsx.snap', {
    encoding: 'utf8',
    flag: 'r',
  });
  testSnap = testSnap.replace(/Temp/g, componentTag);
  writeFileSync('./tests/__snapshots__/index.spec.tsx.snap', testSnap);
  console.log('Done tests!');
}
