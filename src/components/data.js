import { useEnsName, useAccount, useDisconnect } from "@web3modal/react";

function Data() {
  const { address } = useAccount();
  const { data, isLoading } = useEnsName({ address });
  const disconnect = useDisconnect()
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{data}</h1>
          <h2>{address}</h2>
          <button onClick={disconnect}>Disconnect</button>
        </>
      )}
    </>
  );
}

export default Data;

