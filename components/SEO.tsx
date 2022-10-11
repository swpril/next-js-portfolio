import React from 'react';
import { NextSeo } from 'next-seo';

interface Props {
  title?: string;
  description?: string;
  urlPath?: string;
}

function SEO({ title, description, urlPath }: Props) {
  const url = urlPath
    ? process.env.NEXT_PUBLIC_URL + '/' + urlPath
    : process.env.NEXT_PUBLIC_URL;
  const Idescription = description || `template`;
  const Ititle = title || 'Swpril Ahuja';
  return (
    <NextSeo
      title={Ititle}
      description={Idescription}
      canonical={url}
      openGraph={{
        url,
        title: Ititle,
        description: Idescription,
        images: [
          {
            url: '/assets/images/swpril.jpeg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/png'
          }
        ],
        site_name: 'Swpril Ahuja portfolio'
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image'
      }}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'initial-scale=1, width=device-width'
        }
      ]}
    />
  );
}

export default SEO;
