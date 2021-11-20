import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'SHIFT',
    tokenAddress: '0x471EEE143DA5eE93bF27960157d7868bED0736a9',   // token address
    stakingTokenName: QuoteToken.SHIFT,
    stakingTokenAddress: '0x471EEE143DA5eE93bF27960157d7868bED0736a9',  // token address
    contractAddress: {
      97: '',
      56: '0x7484a10FA7457018E9a31B86247e971Ce9bE21e5',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '.00008',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
