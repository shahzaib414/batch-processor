import yargs from "yargs";
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).options({
  file: { type: 'string' },
  storage: { type: 'string' },
  batch: { type: 'number' },
}).parseSync()

export default argv;
