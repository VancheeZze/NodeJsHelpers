# NodeJs Helpers

This is the list of TypeScript NodeJs small help functions which will help with development process

### Filtered Ls
`filteredLs.ts`

Search all files in dir (First command line argument) with extension (second command line argument);

Example:
```ts
const filteredLs = require('./filteredLs');
const folder = './';
const ext = 'ts';

filteredLs(folder, ext, (err, list) => {
	if (err) throw new Error(err);
	list.forEach(file => {
		console.log(file)
	})
})
```
