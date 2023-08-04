import { AIAssitant } from "./AIAssitantsTools.js"
import { AITradingBot } from "./AITradingBot.js"
import { CRM } from "./CRMTools.js"
import { SEO } from "./SEOTools.js"
import { artAndImage } from "./artAndImageTools.js"
import { audio } from "./audioTools.js"
import { business } from "./businessTools.js"
import { chatGPTPlugins } from "./chatGPTPlugins.js"
import { chatbot } from "./chatbotTools.js"
import { copyWritting } from "./copyWritting.js"
import { customerSupport } from "./customerSupportTools.js"
import { devTools } from "./devTools.js"
import { ecommerce } from "./ecommerceTools.js"
import { emailAssitant } from "./emailAssitantTools.js"
import { marketing } from "./marketingTools.js"
import { prompts } from "./promptsTools.js"
import { socialMedia } from "./socialMediaTools.js"
import { video } from "./videoTools.js"
import { websiteAndFunnel } from "./websiteAndFunnelTools.js"

export { default as navItems } from "./navItems.js"

export const TOOLS = [
    {name: "Marketing", data: marketing},
    {name: "Social Media", data: socialMedia},
    {name: "Website and Funnel", data: websiteAndFunnel},
    {name: "Prompts", data: prompts},
    {name: "Business", data: business},
    {name: "CRM Automation", data: CRM},
    {name: "Art and Image", data: artAndImage},
    {name: "Video", data: video},
    {name: "Copywriting", data: copyWritting},
    {name: "AI assistant", data: AIAssitant},
    {name: "AI Chatbot", data: chatbot},
    {name: "SEO ", data: SEO},
    {name: "Email Assistant", data: emailAssitant},
    {name: "E-Commerce", data: ecommerce},
    {name: "Customer Support", data: customerSupport},
    {name: "Developer Tools", data: devTools},
    {name: "Audio", data: audio},
    {name: "Chatgpt Plugins", data: chatGPTPlugins},
    {name: "AI Trading Bots", data: AITradingBot},
]