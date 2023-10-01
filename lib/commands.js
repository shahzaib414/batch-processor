import { option } from 'yargs';

export default option('file', {
  alias: 'f',
  describe: 'Specify a file path',
  type: 'string',
})
.option('storage', {
  alias: 's',
  describe: 'Specify a local storage path',
  type: 'string',
})
.option('batch-size', {
  alias: 'b',
  describe: 'Specify batch size',
  type: 'string',
})
.help()
.argv;
