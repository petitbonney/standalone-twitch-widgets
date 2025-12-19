import { useEffect } from "react";
import tmi from "tmi.js";

let client = null;

export const useTwitch = (handlers = {}) => {
  useEffect(() => {
    if (!client) {
      const urlParams = new URLSearchParams(window.location.search);
      const config = {
        channels: urlParams.get("channels")?.split(",") ?? [],
        identity: {
          username: urlParams.get("username") ?? undefined,
          password: urlParams.get("token") ?? undefined,
        },
      };
      client = new tmi.Client(config);
      client.connect().catch(console.error);
      Object.entries(handlers).forEach(([eventName, handler]) =>
        client.on(eventName.replace(/^on/, "").toLocaleLowerCase(), handler)
      );
    }
  }, []);
  return { client };
};
