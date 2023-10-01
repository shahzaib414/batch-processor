import yargs from "yargs";
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).options({
  file: { type: 'string', description: "Specify file path (.txt)" },
  storage: { type: 'string', description: "Specify local storage path" },
  batch: { type: 'number', description: "Specify batch size",default: 10 },
}).parseSync()

export default argv;
