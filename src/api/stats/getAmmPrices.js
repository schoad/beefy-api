const { fetchAmmPrices } = require('../../utils/fetchAmmPrices');
const { sleep } = require('../../utils/time');

const bakeryPools = require('../../data/bakeryLpPools.json');
const blizzardLpPools = require('../../data/degens/blizzardLpPools.json');
const alpacaLpPools = require('../../data/alpacaLpPools.json');
const cafePools = require('../../data/cafeLpPools.json');
const cakeLpPools = require('../../data/cakeLpPools.json');
const cakeLpV1Pools = require('../../data/cakeLpV1Pools.json');
const jetfuelPools = require('../../data/jetfuelLpPools.json');
const kebabPools = require('../../data/kebabLpPools.json');
const bdollarSbdoPools = require('../../data/bdollarSbdoLpPools.json');
const boltBtdPools = require('../../data/boltBtdLpPools.json');
const boltBtsPools = require('../../data/boltBtsLpPools.json');
const mdexPools = require('../../data/mdexLpPools.json');
const monsterPools = require('../../data/monsterLpPools.json');
const narPools = require('../../data/narLpPools.json');
const nyacashPools = require('../../data/nyacashLpPools.json');
const ramenPools = require('../../data/ramenLpPools.json');
const thugsPools = require('../../data/thugsLpPools.json');
const spongePools = require('../../data/spongeLpPools.json');
const crowPools = require('../../data/crowLpPools.json');
const inchPools = require('../../data/1inchLpPools.json');
const saltPools = require('../../data/degens/saltLpPools.json');
const apePools = require('../../data/degens/apeLpPools.json');
const soupPools = require('../../data/degens/soupLpPools.json');
const autoPools = require('../../data/autoLpPools.json');
const julPools = require('../../data/julLpPools.json');
const memePools = require('../../data/degens/memeFarmLpPools.json');
const nutsPools = require('../../data/degens/nutsLpPools.json');
const slimePools = require('../../data/degens/slimeLpPools.json');
const pangolinPools = require('../../data/avax/pangolinLpPools.json');
const swipePools = require('../../data/swipeLpPools.json');
const comAvaxPools = require('../../data/avax/comAvaxLpPools.json');
const comBscPools = require('../../data/comBscLpPools.json');
const snowballPools = require('../../data/avax/snobLpPools.json');
const pumpyPools = require('../../data/pumpyLpPools.json');
const spacePools = require('../../data/degens/spaceLpPools.json');
const nautPools = require('../../data/degens/nautLpPools.json');
const ellipsisPools = require('../../data/ellipsisLpPools.json');
const hpsPools = require('../../data/degens/hpsLpPools.json');
const zefiPools = require('../../data/degens/zefiLpPools.json');
const thunderPools = require('../../data/degens/thunderLpPools.json');
const swirlPools = require('../../data/swirlLpPools.json');
const getBeltPrices = require('./belt/getBeltPrices');
const getEllipsisPrices = require('./ellipsis/getEllipsisPrices');
const getSnob3PoolPrice = require('./snowball/getSnob3PoolPrice');
const swampyPools = require('../../data/degens/swampyLpPools.json');
const yieldBayPools = require('../../data/degens/yieldBayLpPools.json');
const bingoPools = require('../../data/degens/bingoLpPools.json');
const olivePools = require('../../data/avax/oliveLpPools.json');
const bitiPools = require('../../data/degens/bitiLpPools.json');
const mdexBscPools = require('../../data/mdexBscLpPools.json');
const typhPools = require('../../data/typhLpPools.json');
const typhPoolsV1 = require('../../data/typhLpPoolsV1.json');
const marshPools = require('../../data/degens/marshLpPools.json');
const lavaPools = require('../../data/lavaLpPools.json');
const popsiclePools = require('../../data/popsicleLpPools.json');
const comethPools = require('../../data/matic/comethLpPools.json');
const fortressPools = require('../../data/fortressLpPools.json');
const hfiPools = require('../../data/hfiLpPools.json');
const lydPools = require('../../data/avax/lydLpPools.json');
const icarusPools = require('../../data/icarusLpPools.json');
const quickPools = require('../../data/matic/quickLpPools.json');
const krillPools = require('../../data/matic/krillLpPools.json');

const INIT_DELAY = 0 * 60 * 1000;
const REFRESH_INTERVAL = 5 * 60 * 1000;

// FIXME: if this list grows too big we might hit the ratelimit on initialization everytime
// Implement in case of emergency -> https://github.com/beefyfinance/beefy-api/issues/103
const pools = [
  ...krillPools,
  ...quickPools,
  ...lydPools,
  ...icarusPools,
  ...fortressPools,
  ...hfiPools,
  ...comethPools,
  ...popsiclePools,
  ...lavaPools,
  ...marshPools,
  ...typhPools,
  ...typhPoolsV1,
  ...mdexBscPools,
  ...bitiPools,
  ...olivePools,
  ...bingoPools,
  ...yieldBayPools,
  ...swampyPools,
  ...swirlPools,
  ...thunderPools,
  ...zefiPools,
  ...hpsPools,
  ...ellipsisPools,
  ...nautPools,
  ...spacePools,
  ...pumpyPools,
  ...snowballPools,
  ...comBscPools,
  ...comAvaxPools,
  ...pangolinPools,
  ...swipePools,
  ...slimePools,
  ...blizzardLpPools,
  ...nutsPools,
  ...memePools,
  ...julPools,
  ...autoPools,
  ...alpacaLpPools,
  ...soupPools,
  ...apePools,
  ...saltPools,
  ...inchPools,
  ...crowPools,
  ...ramenPools,
  ...cafePools,
  ...bdollarSbdoPools,
  ...spongePools,
  ...bakeryPools,
  ...jetfuelPools,
  ...kebabPools,
  ...boltBtdPools,
  ...boltBtsPools,
  ...mdexPools,
  ...monsterPools,
  ...narPools,
  ...nyacashPools,
  ...thugsPools,
  ...cakeLpV1Pools,
  ...cakeLpPools
];

const knownPrices = {
  BUSD: 1,
  USDT: 1,
  HUSD: 1,
  DAI: 1,
  USDC: 1,
  UST: 1,
};

let tokenPricesCache = {};
let lpPricesCache = {};
let isProcessing = true;

const updateAmmPrices = async () => {
  console.log('> updating amm prices');
  isProcessing = true;
  try {
    let { poolPrices, tokenPrices } = await fetchAmmPrices(pools, knownPrices);
    const beltLPs = await getBeltPrices(tokenPrices);
    const ellipsisLPs = await getEllipsisPrices();
    const snob3PoolLP = await getSnob3PoolPrice();
    tokenPricesCache = tokenPrices;
    lpPricesCache = { ...poolPrices, ...beltLPs, ...ellipsisLPs, ...snob3PoolLP };
  } catch (err) {
    console.error(err);
  }
  isProcessing = false;

  setTimeout(updateAmmPrices, REFRESH_INTERVAL);
  console.log('> updated amm prices');
};

const getAmmTokensPrices = async () => {
  // TODO: can we replace this mutex with events system?
  while (isProcessing) {
    await sleep(500);
  }
  return tokenPricesCache;
};

const getAmmLpPrices = async () => {
  while (isProcessing) {
    await sleep(500);
  }
  return lpPricesCache;
};

const getAmmTokenPrice = async tokenSymbol => {
  const tokenPrices = await getAmmTokensPrices();
  if (tokenPrices.hasOwnProperty(tokenSymbol)) {
    return tokenPrices[tokenSymbol];
  }
  console.error(`Unknown token '${tokenSymbol}'. Consider adding it to .json file`);
};

const getAmmLpPrice = async lpName => {
  const lpPrices = await getAmmLpPrices();
  if (lpPrices.hasOwnProperty(lpName)) {
    return lpPrices[lpName];
  }
  console.error(`Unknown liqudity pair '${lpName}'. Consider adding it to .json file`);
};

// Flexible delayed initialization used to work around ratelimits
setTimeout(updateAmmPrices, INIT_DELAY);

module.exports = {
  getAmmTokenPrice,
  getAmmTokensPrices,
  getAmmLpPrice,
  getAmmLpPrices,
};
