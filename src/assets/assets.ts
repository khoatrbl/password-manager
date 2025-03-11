import logo from "./security.png";
import dashboard from "./dashboard.png";
import vault from "./safe.png";
import lock from "./padlock.png";
import account from "./account.png";

export const assets: AssetType = {
  logo,
  dashboard,
  vault,
  lock,
  account,
};

type AssetType = {
  logo: string;
  dashboard: string;
  vault: string;
  lock: string;
  account: string;
};
