export type TranslationKeys = {
  nav: {
    home: string;
    howToUse: string;
    pricing: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    downloadBtn: string;
    downloadingVersion: string;
    freeTrialNote: string;
  };
  howToUse: {
    title: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    plan: {
      name: string;
      price: string;
      period: string;
      features: string[];
      cta: string;
    };
  };
  footer: {
    rights: string;
    contact: string;
  };
};

export const translations: Record<"si" | "en", TranslationKeys> = {
  si: {
    nav: {
      home: "මුල් පිටුව",
      howToUse: "භාවිතා කරන ආකාරය",
      pricing: "මිල ගණන්",
    },
    hero: {
      badge: "WhatsApp Print Manager",
      headline:
        "ඔබගේ WhatsApp සංවාද සංවිධානය කර පහසුවෙන් මුද්‍රණය කිරීමට එක්ම ස්ථානයක්",
      subheadline:
        "චැට් තෝරාගෙන මුද්‍රණ සැකසුම් අභිරුචිකරණය කර PDF හෝ මුද්‍රිත පිටපතක් ක්ෂණිකව ලබාගන්න.",
      downloadBtn: "Windows සඳහා බාගත කරන්න",
      downloadingVersion: "අනුවාදය {version}",
      freeTrialNote: "දින 14ක නොමිලේ පරීක්ෂණ කාලය",
    },
    howToUse: {
      title: "භාවිතා කරන ආකාරය",
      subtitle: "පියවර කිහිපයකින් WhatsApp චැට් මුද්‍රණය කරන්න",
      steps: [
        {
          title: "යෙදුම ස්ථාපනය කරන්න",
          description:
            "WhatsApp Print Manager බාගත කර ඔබගේ Windows පරිගණකයේ ස්ථාපනය කරන්න.",
        },
        {
          title: "WhatsApp Web විවෘත කර ලොග් වන්න",
          description:
            "බ්‍රවුසරයේ WhatsApp Web විවෘත කර QR කේතය ස්කෑන් කර ඔබගේ ගිණුමට පිවිසෙන්න.",
        },
        {
          title: "මුද්‍රණය කිරීමට අවශ්‍ය චැට් තෝරන්න",
          description:
            "පිටපත් කිරීමට හෝ මුද්‍රණය කිරීමට අවශ්‍ය සංවාදය ලැයිස්තුවෙන් තෝරන්න.",
        },
        {
          title: "මුද්‍රණ ආකෘතිය සහ සැකසුම් තෝරන්න",
          description:
            "පිටු ආකෘතිය, දින පරාසය, මාධ්‍ය ගුණාත්මකභාවය වැනි සැකසුම් ඔබේ අවශ්‍යතාවයට ගැළපෙන ලෙස සකස් කරන්න.",
        },
        {
          title: "මුද්‍රණය හෝ PDF ලෙස අපනයනය කරන්න",
          description:
            "Print ක්ලික් කර සෘජුව මුද්‍රණය කරන්න, නැතිනම් Export as PDF මඟින් ගොනුව සුරකින්න.",
        },
      ],
    },
    pricing: {
      title: "මිල ගණන්",
      subtitle: "සරල වාර්ෂික සැලැස්මක් සමඟ සියලුම ප්‍රධාන විශේෂාංග ලබාගන්න",
      plan: {
        name: "වාර්ෂික සැලැස්ම",
        price: "LKR 4,800",
        period: "වසරකට",
        features: [
          "අසීමිත චැට් මුද්‍රණය",
          "අභිරුචි මුද්‍රණ ආකෘති සහ පිටු සැකසුම්",
          "PDF ලෙස අපනයනය කිරීම",
          "ඉක්මන් සහ විශ්වාසදායක ක්‍රියාකාරීත්වය",
          "අඛණ්ඩ යාවත්කාලීන සහ සහාය",
        ],
        cta: "දැන් ආරම්භ කරන්න",
      },
    },
    footer: {
      rights: "සියලු හිමිකම් ඇවිරිණි.",
      contact: "සම්බන්ධ වන්න",
    },
  },
  en: {
    nav: {
      home: "Home",
      howToUse: "How to Use",
      pricing: "Pricing",
    },
    hero: {
      badge: "WhatsApp Print Manager",
      headline:
        "Manage and print your WhatsApp chats in one streamlined workspace",
      subheadline:
        "Select conversations, customize layout settings, and print or export to PDF in seconds.",
      downloadBtn: "Download for Windows",
      downloadingVersion: "Version {version}",
      freeTrialNote: "7-day free trial",
    },
    howToUse: {
      title: "How to Use",
      subtitle: "Print WhatsApp conversations in five simple steps",
      steps: [
        {
          title: "Install the application",
          description:
            "Download WhatsApp Print Manager and install it on your Windows computer.",
        },
        {
          title: "Open WhatsApp Web and log in",
          description:
            "Open WhatsApp Web in your browser and sign in by scanning the QR code.",
        },
        {
          title: "Select the chat you want to print",
          description:
            "Choose the conversation you want to print or archive from your chat list.",
        },
        {
          title: "Choose print layout and settings",
          description:
            "Adjust page format, date range, and output preferences to match your needs.",
        },
        {
          title: "Click Print or Export as PDF",
          description:
            "Click Print for a physical copy or choose Export as PDF to save a digital file.",
        },
      ],
    },
    pricing: {
      title: "Pricing",
      subtitle: "Get all core features with one simple annual plan",
      plan: {
        name: "Annual Plan",
        price: "LKR 4,800",
        period: "per year",
        features: [
          "Unlimited chat printing",
          "Custom print layouts and page settings",
          "Export as PDF",
          "Fast and reliable performance",
          "Ongoing updates and support",
        ],
        cta: "Get Started",
      },
    },
    footer: {
      rights: "All rights reserved.",
      contact: "Contact",
    },
  },
};
