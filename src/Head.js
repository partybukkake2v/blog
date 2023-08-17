import * as React from 'react';

export default function Head (props) {
  const image = 'https://jxnblk.com/images/avatar.png';

  return (
    <head>
      <title>{props.title}</title>
      <meta name='description' content={props.description} />
      <meta name='viewport' content='width=device-width' />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel='stylesheet' href='/style.css' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Lexend:wght@500;700&display=swap'
        crossOrigin
      />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HFKR2KM1HK"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: ga,
        }}
      />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@jxnblk' />
      <meta name='twitter:creator' content='@jxnblk' />
      <meta property='og:url' content={`https://jxnblk.com/${props.path}`} />
      <meta property='og:title' content={props.title} />
      <meta property='og:description' content={props.description} />
      <meta property='og:image' content={image} />
    </head>
  );
};

const ga = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-HFKR2KM1HK');`;

