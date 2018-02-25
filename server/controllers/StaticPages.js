import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'

import Index from '../../public/index'

export const path = (req, res) => {
  const context = {};
  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <Index/>
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.write(html);
    res.end();
  }
};