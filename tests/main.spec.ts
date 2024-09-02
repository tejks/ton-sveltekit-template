import { toNano } from "@ton/core";
import { Blockchain, type SandboxContract, TreasuryContract } from "@ton/sandbox";
import "@ton/test-utils";
import { Main } from "../tact/main";

describe("Main", () => {
  let blockchain: Blockchain;
  let deployer: SandboxContract<TreasuryContract>;
  let main: SandboxContract<Main>;

  beforeEach(async () => {
    blockchain = await Blockchain.create();

    main = blockchain.openContract(await Main.fromInit(0n));

    deployer = await blockchain.treasury("deployer");

    const deployResult = await main.send(
      deployer.getSender(),
      {
        value: toNano("0.05"),
      },
      {
        $$type: "Deploy",
        queryId: 0n,
      },
    );

    expect(deployResult.transactions).toHaveTransaction({
      from: deployer.address,
      to: main.address,
      deploy: true,
      success: true,
    });
  });

  it("should deploy", async () => {
    // the check is done inside beforeEach
    // blockchain and main are ready to use
  });

  it("should increase counter", async () => {
    const increaseTimes = 3;
    for (let i = 0; i < increaseTimes; i++) {
      const increaser = await blockchain.treasury("increaser" + i);

      const counterBefore = await main.getCounter();

      const increaseBy = BigInt(Math.floor(Math.random() * 100));

      const increaseResult = await main.send(
        increaser.getSender(),
        {
          value: toNano("0.05"),
        },
        {
          $$type: "Add",
          queryId: 0n,
          amount: increaseBy,
        },
      );

      expect(increaseResult.transactions).toHaveTransaction({
        from: increaser.address,
        to: main.address,
        success: true,
      });

      const counterAfter = await main.getCounter();

      expect(counterAfter).toBe(counterBefore + increaseBy);

      const decreaseResult = await main.send(
        increaser.getSender(),
        {
          value: toNano("0.05"),
        },
        {
          $$type: "Sub",
          queryId: 0n,
          amount: 10n,
        },
      );

      expect(decreaseResult.transactions).toHaveTransaction({
        from: increaser.address,
        to: main.address,
        success: true,
      });

      const counterAfterDecrease = await main.getCounter();

      expect(counterAfterDecrease).toBe(counterAfter - 10n);
    }
  });
});
