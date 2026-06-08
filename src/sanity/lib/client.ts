import "server-only";

import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, readToken } from "@/sanity/env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: process.env.NODE_ENV === "production",
  token: readToken,
});
