# Batch Processor for Downloading Image

Small NodeJS library for efficiently downloading multiple files asynchronously and storing them in a local folder.

accepts the following arguments

`--file` path to the local file which contains a list of URLs separated by white space  
`--storage` Folder path where you want to save files  
`--batch` Number of files that need to be downloaded at the same time


Install npm packages

```
yarn install
```
or

```
npm install
```

### CLI App
To Start Application
```
yarn run start --file '<File_path>' --storage '<folder_path>' --batch <number>
```

### For Help
```
yarn start --help
```
