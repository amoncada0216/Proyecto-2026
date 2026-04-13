import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");
const defaultLocale = "es";

const redirectPage = `<!DOCTYPE html>
<html lang="${defaultLocale}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Redirecting...</title>
    <meta http-equiv="refresh" content="0; url=./${defaultLocale}/" />
    <script>
      window.location.replace('./${defaultLocale}/');
    </script>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        font-family: system-ui, sans-serif;
        background: #f4f7ff;
        color: #0d1433;
      }

      a {
        color: #080b7a;
      }
    </style>
  </head>
  <body>
    <p>Redirecting to <a href="./${defaultLocale}/">./${defaultLocale}/</a>...</p>
  </body>
</html>
`;

await mkdir(outDir, { recursive: true });
await writeFile(path.join(outDir, ".nojekyll"), "");
await writeFile(path.join(outDir, "index.html"), redirectPage, "utf8");
