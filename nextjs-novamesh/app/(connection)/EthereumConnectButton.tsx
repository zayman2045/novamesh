import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function EthereumConnectButton() {
  return (
    <div>
      <ConnectButton
        label="Select Wallet"
        accountStatus="full"
        showBalance={false}
        chainStatus="none"
      />
    </div>
  );
}
