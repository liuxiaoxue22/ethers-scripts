/*
 * @LastEditors: Bot80926
 * @LastEditTime: 2023-05-02 11:47:22
 * @FilePath: /ethers-scripts/script-6-input-data-decoder/index.js
 * Copyright (c) 2023 by Bot80926, All Rights Reserved.
 */

const InputDataDecoder = require('ethereum-input-data-decoder');
const v3Router = require('../abis/pancakeRouterV3.json')
const decoder = new InputDataDecoder(v3Router);

// tx url: https://etherscan.io/tx/0x4169ddf78be52aade30a6043feac7d6a3b00bddad64e80d27e660761cec7d0ef
// pancake v3 router: https://etherscan.io/address/0x13f4ea83d0bd40e75c8222255bc855a974568dd4#code
const data = '0x5ae401dc00000000000000000000000000000000000000000000000000000000645088eb00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000e404e45aaf000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000006982508145454ce325ddbe47a25d4ec3d231193300000000000000000000000000000000000000000000000000000000000009c4000000000000000000000000307e3fdf958e61e593ffd53efa68bd798477c7bd0000000000000000000000000000000000000000000000000058d15e176280000000000000000000000000000000000000000000001d4ebb90dc9195172b5342000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
const result = decoder.decodeData(data);
console.log(result);

const multicallData = '0x04e45aaf000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000006982508145454ce325ddbe47a25d4ec3d231193300000000000000000000000000000000000000000000000000000000000009c4000000000000000000000000307e3fdf958e61e593ffd53efa68bd798477c7bd0000000000000000000000000000000000000000000000000058d15e176280000000000000000000000000000000000000000000001d4ebb90dc9195172b53420000000000000000000000000000000000000000000000000000000000000000'
const resultMulticallData = decoder.decodeData(multicallData);
console.log(resultMulticallData);