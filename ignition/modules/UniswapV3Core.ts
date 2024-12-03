import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("UniswapV3Core", (m) => {
  // Deploy UniswapV3Factory
  const factory = m.contract("UniswapV3Factory");

  return {
    factory,
  };
});
