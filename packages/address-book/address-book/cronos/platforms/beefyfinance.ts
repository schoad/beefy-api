const cowllector = '0xd529b1894491a0a26B18939274ae8ede93E81dbA';

export const beefyfinance = {
  devMultisig: cowllector,
  strategyOwner: '0x0000000000000000000000000000000000000000',
  vaultOwner: '0x0000000000000000000000000000000000000000',
  keeper: '0x10aee6B5594942433e7Fc2783598c979B030eF3D',
  rewarder: cowllector,
  treasurer: '0x3Eb7fB70C03eC4AEEC97C6C6C1B59B014600b7F7',
  launchpoolOwner: cowllector,
  rewardPool: '0x107Dbf9c9C0EF2Df114159e5C7DC2baf7C444cFF',
  treasury: '0x3f385082Ee3dFf58ca0a6a7fe44Ea0B5d6b4168E',
  beefyFeeRecipient: '0x0000000000000000000000000000000000000000',
  multicall: '0x13aD51a6664973EbD0749a7c84939d973F247921',
} as const;
