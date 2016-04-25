/* eslint-disable react/prop-types, react/no-danger */

import React from "react";

export default function IndexHTML({user, app}){

  const script = `window.user = ${JSON.stringify(user)}; window.app = ${JSON.stringify(app)};`;

  return (
    <html>
      <head>
        <title>{app.anme}</title>
        <link rel="stylesheet" href="/highlight.css" />
        <script dangerouslySetInnerHTML={{__html: script}} />
      </head>
      <body>
        <div id="app" />
        <script src="/dist/index.js" />
      </body>
    </html>
  );

}
