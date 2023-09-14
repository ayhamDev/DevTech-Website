import { API_URL } from "@const";

const PingMailApi = async () => {
  console.log(
    await (await fetch(`${API_URL()}/ping`, { cache: "no-store" })).json(),
  );
};

export { PingMailApi };
