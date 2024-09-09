"use client";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export const use3Wagmi = () => {
  const { address, connector, isConnected } = useAccount();
  const { connect, connectors, error: connectionErr } = useConnect();
  const { disconnect } = useDisconnect();

  const login = async () => {
    const activeCon = connectors.filter(
      (con) => con.name.toUpperCase() === "WEB3AUTH",
    )[0];

    connect({
      connector: activeCon,
    });
    console.log("activeCon", activeCon);
  };

  const logout = async (callback: VoidFunction) => {
    disconnect();
    callback();
  };

  return {
    address,
    logout,
    connector,
    connectors,
    connect,
    connectionErr,
    isConnected,
    login,
  };
};
