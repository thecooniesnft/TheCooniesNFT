import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TheCooniesNFT',
  tokenName: 'TheCoonies NFT',
  tokenSymbol: 'COON',
  hiddenMetadataUri: 'ipfs://bafybeiesqrexcsumjmcrv47fwyfztdz673lsps3nyfhhjfvhnaif6twvaa/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 20,
  },
  preSale: {
    price: 2.00,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 2.00,
    maxMintAmountPerTx: 20,
  },
  contractAddress: "0xcf0bC8E69d9E55b3154063C1aC06043Ccc64E285",
  marketplaceIdentifier: 'thecoonies-nft',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
