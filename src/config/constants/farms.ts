import contracts from "./contracts";
import { FarmConfig, QuoteToken } from "./types";

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: "SHIFT",
    lpAddresses: {
      97: "",
      56: "0x471EEE143DA5eE93bF27960157d7868bED0736a9",
    },
    tokenSymbol: "SYRUP",
    tokenAddresses: {
      97: "",
      56: "0x471EEE143DA5eE93bF27960157d7868bED0736a9",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: "SHIFT-BNB LP",
    lpAddresses: {
      97: "",
      56: "0xf14e0535d086d5899E3F7F471fA70Ed1201d4d4d", // lp address token-bnb
    },
    tokenSymbol: "SHIFT",
    tokenAddresses: {
      97: "",
      56: "0x471EEE143DA5eE93bF27960157d7868bED0736a9", // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: "SHIFT-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0xf14e0535d086d5899E3F7F471fA70Ed1201d4d4d", // lp address token-bnb
    },
    tokenSymbol: "SHIFT",
    tokenAddresses: {
      97: "",
      56: "0x471EEE143DA5eE93bF27960157d7868bED0736a9", // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    lpSymbol: "SHIFT-USDC LP",
    lpAddresses: {
      97: "",
      56: "0xf14e0535d086d5899E3F7F471fA70Ed1201d4d4d", // lp address token-bnb
    },
    tokenSymbol: "SHIFT",
    tokenAddresses: {
      97: "",
      56: "0x471EEE143DA5eE93bF27960157d7868bED0736a9", // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    lpSymbol: "SHIFT-DAI LP",
    lpAddresses: {
      97: "",
      56: "0xf14e0535d086d5899E3F7F471fA70Ed1201d4d4d", // lp address token-bnb
    },
    tokenSymbol: "SHIFT",
    tokenAddresses: {
      97: "",
      56: "0x471EEE143DA5eE93bF27960157d7868bED0736a9", // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    lpSymbol: "SHIFT-LFG LP",
    lpAddresses: {
      97: "",
      56: "0xf14e0535d086d5899E3F7F471fA70Ed1201d4d4d", // lp address token-bnb
    },
    tokenSymbol: "SHIFT",
    tokenAddresses: {
      97: "",
      56: "0x471EEE143DA5eE93bF27960157d7868bED0736a9", // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    lpSymbol: "LFG-MEXICO LP",
    lpAddresses: {
      97: "",
      56: "0xf14e0535d086d5899E3F7F471fA70Ed1201d4d4d", // lp address token-bnb
    },
    tokenSymbol: "SHIFT",
    tokenAddresses: {
      97: "",
      56: "0x471EEE143DA5eE93bF27960157d7868bED0736a9", // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    lpSymbol: "LFG-LFG LP",
    lpAddresses: {
      97: "",
      56: "0xf14e0535d086d5899E3F7F471fA70Ed1201d4d4d", // lp address token-bnb
    },
    tokenSymbol: "SHIFT",
    tokenAddresses: {
      97: "",
      56: "0x471EEE143DA5eE93bF27960157d7868bED0736a9", // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  // {
  //   pid: 2,
  //   lpSymbol: 'Question-busd LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xf14e0535d086d5899E3F7F471fA70Ed1201d4d4d',   // lp address token-busd
  //   },
  //   tokenSymbol: '?',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x471EEE143DA5eE93bF27960157d7868bED0736a9', // token address
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },

  // {
  //   pid: 3,
  //   lpSymbol: 'Question-POTS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3fcca8648651e5b974dd6d3e50f61567779772a8',   // lp address token-busd
  //   },
  //   tokenSymbol: '?',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x471EEE143DA5eE93bF27960157d7868bED0736a9', // token address
  //   },

  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },

  // {
  //   pid: 4,
  //   lpSymbol: 'BNB-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',   // lp address token-busd
  //   },
  //   tokenSymbol: '?',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x471EEE143DA5eE93bF27960157d7868bED0736a9', // token address
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'POTS-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xF90BAA331Cfd40F094476E752Bf272892170d399',   // lp address token-busd
  //   },
  //   tokenSymbol: '?',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x471EEE143DA5eE93bF27960157d7868bED0736a9', // token address
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
];

export default farms;
