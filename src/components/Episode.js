import React from "react";
import { Button } from "react-toolbox/lib/button";
import { Helmet } from "react-helmet";

function commaSeparatedItems(item, index) {
  if (index === 0) {
    return <span key={item}>{item}</span>;
  } else {
    return <span key={item}>, {item}</span>;
  }
}

const home = "https://thegangpicksanepisode.com/";

export default ({ episode }) => (
  <div className="episode">
    <Helmet>
      <meta
        property="og:title"
        content={`The Gang Picks an Episode: ${episode.title}`}
      />
      <meta property="og:image" content={`${home}/favicon.ico`} />
      <meta property="og:descriptipn" content={episode.description} />
      <meta
        property="og:url"
        content={`${home}/${episode.season}/${episode.episode}`}
      />
      <meta property="og:site_name" content="The Gang Picks an Episode" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content={`The Gang Picks an Episode: ${episode.title}`}
      />
      <meta name="twitter:description" content={episode.description} />
      <meta name="twitter:image" content={`${home}/favicon.ico`} />
      <meta name="twitter:site" content="@hawkinjs" />
      <meta name="twitter:site:id" content="@hawkinjs" />
      <meta name="twitter:creator" content="@hawkinjs" />
      <meta name="twitter:creator:id" content="@hawkinjs" />
    </Helmet>
    <label>Watch</label>
    <h3>{episode.title}</h3>
    <h5 className="dark">
      Season: {episode.season} Episode: {episode.episode}
    </h5>
    <p className="description">{episode.description}</p>
    <p>
      <b>Lead characters: </b>
      <span className="dark">{episode.lead.map(commaSeparatedItems)}</span>
    </p>
    {episode.guest ? (
      <p>
        <b>Guest characters: </b>
        <span className="dark">{episode.guest.map(commaSeparatedItems)}</span>
      </p>
    ) : null}
    <p>
      <b>Written by: </b>
      <span className="dark">{episode.writers.map(commaSeparatedItems)}</span>
    </p>
    <Button
      raised
      primary
      target="_blank"
      href={episode.link}
      style={{ marginBottom: 20, fontSize: "1.4rem" }}
    >
      Watch now on Hulu
    </Button>
  </div>
);
