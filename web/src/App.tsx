import SelfHostedVersionEditor from "./components/SelfHostedVersionEditor";
import CloudVersionEditor from "./components/CloudVersionEditor";

export default function App() {
  return (
    <>
      <h1>Welcome to Tiny Editor POC!</h1>

      <section style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <CloudVersionEditor />

        <SelfHostedVersionEditor />
      </section>
    </>
  );
}
