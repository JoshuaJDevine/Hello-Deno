/**
 * webserver.ts
 */
import { serve } from "https://deno.land/std@0.92.0/http/server.ts";

const server = serve({ hostname: "0.0.0.0", port: 8080 });
console.log(`Listening on port 8080`);

for await (const request of server) {
    let bodyContent = "Your user-agent is:\n\n";
    bodyContent += request.headers.get("user-agent") || "Unknown";
    bodyContent += request.url;
    request.respond({ status: 200, body: bodyContent });
}
