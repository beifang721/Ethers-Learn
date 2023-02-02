import {ethers} from 'ethers'

// https://dashboard.alchemy.com/ 三方个人节点生成


// 连接以太坊主网
const providerETH = new ethers.providers.JsonRpcProvider(`https://eth-goerli.g.alchemy.com/v2/edTozZAj3oaKJplhj1wY3stIKpBdGuys`)


const main = async()=>{
  // const balance = await providerETH.getBalance('0xCe1B8Ddb513B5C09Dd6b7425Ed37D79ABe3b19bf')
  // console.log(ethers.utils.formatEther(balance));

  // const network = await providerETH.getNetwork()
  // console.log(network);

  // const blockNumber  = await providerETH.getBlockNumber()
  // console.log(blockNumber);

  const gasPrice = await providerETH.getGasPrice(); // 查看当前gas
  console.log(gasPrice.toString());

  const feeData = await providerETH.getFeeData();
  console.log(feeData.gasPrice.toNumber());

  const block = await providerETH.getBlock(0);

}

main()