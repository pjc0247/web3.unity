# web3.unity
web3.js bridge for Unity+Webgl

```csharp
Web3.Initialize();

if (Web3.IsReady())
  Debug.Log("Please install metamask or unlock your account");
```
```csharp
// sendEthereum
Web3.SendFund("0xZUZUZUZUZUZUZUZUZU", 10000);
```
