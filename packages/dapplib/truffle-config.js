require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name remember magic hospital hover castle olympic stuff'; 
let testAccounts = [
"0xae65b4d4ba1c1f0281e0610f95890b7f97b6918b22360f679eb8b1dee947f98a",
"0xea3384087e10bbe93fafb4cc54d35e585a004562042a3c1698758bcfdc2f7d31",
"0xe9f55e8e9ace7fcfa12e72cc89ac0ef24e6118fb81dd5ebdc11020ee93ee9175",
"0x434324a6cc4bfeeb89177dd68ec41828b63fd58f393e1ebf87822117728cdd68",
"0x147d576e5e21d5a506d4d8ccd0b2173e19b8af9dcbdc0f588e434a80974be932",
"0x6a6cb0cd7863ce2fe8c26362180f726c1537ca33016716cb157c0bc2ec509a81",
"0xce09b778ba505dfd65ae57b49279688c7a637247c0a8b4d4937f39fcdbd314af",
"0xae0dba609de7bcdaea3b33194786f5071a09ff2f398ce0576787cfee304b1f74",
"0x6ebb06a87ea2ecc4f839fcd7447e9c95dfd6d0903b3a7dc9ab55a77f3456a6c4",
"0xd68bf90509721a52f1705490861abc1e64e3f89d440e625701abaefc1d73e205"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
