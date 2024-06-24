import { RecoilRoot } from "recoil";
import "./main.css";
import Layout from "./component/layout/Layout";
export function Main() {
  return (
    <RecoilRoot>
      <Layout />
    </RecoilRoot>
  );
}
