import { Component } from "@/app/context/MasterJSONContext";
import { topicCardPairCSS, topicCardPairHTML } from "./variantHTML/TopicCardPair";

const getTopicCardsHTML = (data: Component, lang: string) => {
  const variant = data.variant;
  let html: string;
  let css: string;

  switch (variant) {
    case "Pair Topic Cards":
      // @ts-expect-error doesn't exist title props
      html = topicCardPairHTML(data[lang]);
      css = topicCardPairCSS()
      break;

    default:
      html = "";
      css = "";
      break;
  }
  return { html, css}
}

export { getTopicCardsHTML}