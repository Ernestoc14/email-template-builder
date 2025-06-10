import { Component } from "../context/MasterJSONContext";
import { getAlertHTML } from "../htmlComponents/Alerts/AlertsHTML";
import { getBannersHTML } from "../htmlComponents/Banners/BannersHTML";
import { getButtonHTML } from "../htmlComponents/Buttons/ButtonsHTML";
import { getImagesHTML } from "../htmlComponents/Images/ImagesHTML";
import { getInfoBarsHTML } from "../htmlComponents/Infobars/InfoBarsHTML";
import getInformativeBoxHTML from "../htmlComponents/InformativeBox/InformativeBoxHTML";
import { getItineraryCardsHTML } from "../htmlComponents/ItineraryCards/ItineraryCardsHTML";
import getMarkdownHTML from "../htmlComponents/Markdown/MarkdownHTML";
import { getPaxCardsHTML } from "../htmlComponents/PaxCards/PaxCardsHTML";
import { getTitleBoxsHTML } from "../htmlComponents/TitleBoxs/TitleBoxsHTML";
import { getTopicCardsHTML } from "../htmlComponents/TopicCards/TopicCardsHTML";

const getComponentHTML = (component: Component, lang: string, isFirst: boolean, isLast: boolean) =>{
  let html;
  let tmpHtml;
  const startString = `<tr><td style="${isFirst ? '' : 'padding-top: 12px;'} ${isLast ? '' : 'padding-bottom:12px'}">`
  const endString = '</td></tr>'

  switch(component.componentName){
    case 'Alerts':
        tmpHtml = getAlertHTML(component, lang)
        tmpHtml.html = startString + tmpHtml.html + endString
        html = tmpHtml
      break

    case 'Banners':
        tmpHtml = getBannersHTML(component, lang)
        tmpHtml.html = startString + tmpHtml.html + endString
        html = tmpHtml
      break

    case 'Infobars':
        tmpHtml = getInfoBarsHTML(component, lang)
        tmpHtml.html = startString + tmpHtml.html + endString
        html = tmpHtml
      break

    case 'TitleBoxs':
        tmpHtml = getTitleBoxsHTML(component, lang)
        tmpHtml.html = startString + tmpHtml.html + endString
        html = tmpHtml
      break

    case 'Buttons':
        tmpHtml = getButtonHTML(component, lang)
        tmpHtml.html = startString + tmpHtml.html + endString
        html = tmpHtml
      break

    case 'Markdown': 
        tmpHtml = getMarkdownHTML(component, lang)
        tmpHtml.html = startString + tmpHtml.html + endString
        html = tmpHtml
      break
    
    case 'PaxCards':
      tmpHtml = getPaxCardsHTML(component, lang)
        tmpHtml.html = startString + tmpHtml.html + endString
        html = tmpHtml
      break

    case 'InformativeBox':
      tmpHtml = getInformativeBoxHTML(component, lang)
        tmpHtml.html = startString + tmpHtml.html + endString
        html = tmpHtml
      break

      case 'TopicCards':
        tmpHtml = getTopicCardsHTML(component, lang)
          tmpHtml.html = startString + tmpHtml.html + endString
          html = tmpHtml
      break

      case 'ItineraryCards':
        tmpHtml = getItineraryCardsHTML(component, lang)
          tmpHtml.html = startString + tmpHtml.html + endString
          html = tmpHtml
      break

      case 'Images':
        tmpHtml = getImagesHTML(component, lang)
          tmpHtml.html =  tmpHtml.html 
          html = tmpHtml
      break
    
    default:
      html = {
        html: '',
        css: ''
      }
      break
  }

  return html
}

export {getComponentHTML}