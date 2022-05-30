import { Button, Divider, HStack, Input, Text, VStack } from "@chakra-ui/react";
import {
  DappUI,
  refreshAccount,
  transactionServices,
  useGetAccountInfo,
  useGetNetworkConfig,
  useGetPendingTransactions,
  useSignTransactions,
} from "@elrondnetwork/dapp-core";
import {
  AbiRegistry,
  Address,
  Balance,
  BigUIntValue,
  BytesValue,
  Interaction,
  NetworkConfig,
  ProxyProvider,
  SmartContract,
  SmartContractAbi,
  AddressValue,
} from "@elrondnetwork/erdjs/out";
import * as React from "react";

async function getTournamentInfoList(): Promise<string[]> {
  try {
    console.log("Hello console")
    let provider = new ProxyProvider("https://devnet-gateway.elrond.com");
    await NetworkConfig.getDefault().sync(provider);

    let stringAddress =
      "erd1qqqqqqqqqqqqqpgqvfp2xkxhwvrvrcrxzs6e3vz4sz2ms7m0pa7qkrd5ll";
    let address = new Address(stringAddress);

    const abiLocation = `${process.env.PUBLIC_URL}/xlauncher.abi.json`;

    let abiRegistry = await AbiRegistry.load({
      urls: [abiLocation],
    });
    let abi = new SmartContractAbi(abiRegistry, [`XLauncherStaking`]);

    let contract = new SmartContract({
      address: address,
      abi: abi,
    });

    let interaction: Interaction = contract.methods.getClientReport([
      new AddressValue(
        new Address(
          "erd1mhhnd3ux2duwc9824dhelherdj3gvzn04erdw29l8cyr5z8fpa7quda68z"
        )
      ),
    ]);

    let queryResponse = await contract.runQuery(
      provider,
      interaction.buildQuery()
    );
    let response = interaction.interpretQueryResponse(queryResponse);
    let myObject = response.firstValue.valueOf();

    console.log("response from contract = ", response);
    return ["End of getTournamentInfo"];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default function XLauncher() {
  return (
    <VStack alignItems={"flex-start"}>
      <HStack>
        <Text>Get client report</Text>
        <Button
          onClick={async () => {
            let newIdList = await getTournamentInfoList();
          }}
        >
          Query contract
        </Button>
      </HStack>

      <Divider />
    </VStack>
  );
}
