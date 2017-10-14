# NodeJs Helpers

This is the list of TypeScript NodeJs small help functions which will help with development process

### Filtered Ls

Search all files in dir (First command line argument) with extension (second command line argument);

File: `filteredLs.ts`
```ts
const filteredLs = require('./filteredLs');
const folder = './';
const ext = 'ts';

filteredLs(folder, ext, (err, list) => {
	if (err) throw new Error(err);
	list.forEach(function (file) {
		console.log(file)
	})
})
```
