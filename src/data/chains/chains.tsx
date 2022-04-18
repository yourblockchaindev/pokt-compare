import avaxMainnet from "./avax-mainnet.json"
import avaxArchive from "./avax-archive.json"
import bscMainnet from "./bsc-mainnet.json"
import bscArchive from "./bsc-archive.json"
import bitcoinMainnet from "./bitcoin-mainnet.json"
import ethMainnet from "./eth-mainnet.json"
import ethArchive from "./eth-archive.json"
import ethGoerli from "./eth-goerli.json"
import ethKovan from "./eth-kovan.json"
import ethRinkeby from "./eth-rinkeby.json"
import ethRopsten from "./eth-ropsten.json"
import fuseArchive from "./fuse-archive.json"
import fuseMainnet from "./fuse-mainnet.json"
import harmonyArchive from "./harmony-shard-0-archive.json"
import harmonyMainnet from "./harmony-shard-0-mainnet.json"

import pocketArchive from "./pocket-archive.json"
import pocketMainnet from "./pocket-mainnet.json"
import polygonArchive from "./polygon-archive.json"
import polygonMainnet from "./polygon-mainnet.json"
import solanaArchive from "./solana-archive.json"
import solanaMainnet from "./solana-mainnet.json"
import xdaiArchive from "./xdai-archive.json"
import xdaiMainnet from "./xdai-mainnet.json"


const chains = {
  [avaxMainnet.id]: avaxMainnet,
  [avaxArchive.id]: avaxArchive,
  [bscMainnet.id]: bscMainnet,
  [bscArchive.id]: bscArchive,
  [bitcoinMainnet.id]: bitcoinMainnet,
  [ethMainnet.id]: ethMainnet,
  [ethArchive.id]: ethArchive,
  [ethGoerli.id]: ethGoerli,
  [ethKovan.id]: ethKovan,
  [ethRinkeby.id]: ethRinkeby,
  [ethRopsten.id]: ethRopsten,
  [fuseArchive.id]: fuseArchive,
  [fuseMainnet.id]: fuseMainnet,
  [harmonyArchive.id]: harmonyArchive,
  [harmonyMainnet.id]: harmonyMainnet,
  [pocketArchive.id]: pocketArchive,
  [pocketMainnet.id]: pocketMainnet,
  [polygonArchive.id]: polygonArchive,
  [polygonMainnet.id]: polygonMainnet,
  [solanaArchive.id]: solanaArchive,
  [solanaMainnet.id]: solanaMainnet,
  [xdaiArchive.id]: xdaiArchive,
  [xdaiMainnet.id]: xdaiMainnet,
}

export default chains