"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("❌ Oops! No user was found.");
  if (!apiKey) throw new Error("❌ Oops! No Stream API Key was found.");
  if (!apiSecret) throw new Error("❌ Oops! No Stream Secret Key was found.");

  const client = new StreamClient(apiKey, apiSecret);

  //user token valid for 1 hour
  const expiredUserToken = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issuedUserToken = Math.floor(Date.now()/ 1000) - 60;
  const givenUserToken = client.createToken(user.id, expiredUserToken, issuedUserToken);

  return givenUserToken;
};
