import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function generateDetails(prediction: string, category: string, modelName: string): string {
  let detail = `Based on the ${modelName.replace("_", " ")} model, the analysis indicates ${prediction.toLowerCase()}. `;

  if (prediction === "Normal Traffic") {
    detail += "No immediate action is required. Continue to monitor your system for any unusual activity.";
  } else if (prediction === "Suspicious Activity") {
    switch (category) {
      case "Adware":
        detail += "Adware detected, which may cause unwanted advertisements.";
        break;
      case "Spyware":
        detail += "Spyware detected, which can compromise your privacy.";
        break;
      case "Worm":
        detail += "Worm detected, which can self-replicate and spread across networks.";
        break;
      case "Trojan Downloader":
        detail += "Trojan downloader detected, which may download additional malware.";
        break;
      default:
        detail += "Suspicious malware activity detected.";
    }
  } else if (prediction === "Potential Attack") {
    switch (category) {
      case "Trojan Horse":
        detail += "Trojan Horse detected, a dangerous malware disguised as legitimate software.";
        break;
      case "Worm":
        detail += "Worm detected, capable of spreading rapidly.";
        break;
      case "Ransomware":
        detail += "Ransomware detected, which encrypts your data for ransom.";
        break;
      case "Rootkit":
        detail += "Rootkit detected, which hides malware presence deep in the system.";
        break;
      case "Advanced Persistent Threat (APT)":
        detail += "APT detected, a sophisticated prolonged attack.";
        break;
      default:
        detail += "High-risk malware activity detected.";
    }
  }

  return detail;
}




export function generateRemedy(prediction: string, category: string): string {
  if (prediction === "Normal Traffic") {
    return "No remedies needed at this time. Continue regular system monitoring.";
  } else if (prediction === "Suspicious Activity") {
    switch (category) {
      case "Adware":
        return "Use trusted adware removal tools and update your antivirus software.";
      case "Spyware":
        return "Run a full malware scan and consider using anti-spyware programs.";
      case "Worm":
        return "Isolate infected machines and run network-wide malware scans.";
      case "Trojan Downloader":
        return "Disconnect from the internet and run a full system scan with a reliable antivirus.";
      default:
        return "Perform a comprehensive security scan and keep your software up to date.";
    }
  } else if (prediction === "Potential Attack") {
    switch (category) {
      case "Trojan Horse":
        return "Remove the malware immediately and change all sensitive passwords.";
      case "Worm":
        return "Quarantine affected devices and patch vulnerabilities.";
      case "Ransomware":
        return "Disconnect from networks, do not pay ransom, and restore from backups.";
      case "Rootkit":
        return "Use specialized rootkit removal tools or consider OS reinstallation.";
      case "Advanced Persistent Threat (APT)":
        return "Engage cybersecurity experts immediately and conduct a thorough incident response.";
      default:
        return "Take immediate security measures and investigate system integrity.";
    }
  }

  return "";
}
