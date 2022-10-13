/** @jsx h */
import { serve } from "https://deno.land/std@0.154.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.154.0/http/file_server.ts";
import { h, html } from "https://deno.land/x/htm@0.0.10/mod.tsx";
const NOT_FOUND_SCRIPT = (pathname: string) => `
alert(window.location.origin+" NOT FOUND ROUTE: ${pathname}")
`;
serve(async (_req) => {
  const pathname = new URL(_req.url).pathname;
  if (pathname === "/404.js") {
    return new Response(NOT_FOUND_SCRIPT(pathname), {
      headers: {
        "content-type": "application/javascript",
      },
    });
  }
  const res = await serveFile(
    _req,
    pathname === "/" ? "./index.html" : `.${pathname}`,
  );
  if (res.statusText !== "Not Found") {
    return res;
  }
  const sf = await serveFile(_req, `.${pathname}.html`);
  if (sf.statusText !== "Not Found") {
    return sf;
  }
  return html({
    scripts: [{ src: "/404.js" }],
    body: <div class="home"></div>,
  });
});