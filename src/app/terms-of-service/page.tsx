import { LegalPage } from "@/components/site/legal-page";
import { siteConfig } from "@/config/site";

const termsSections = [
  {
    title: "Acceptance Of These Terms",
    body: [
      `These Terms of Service are a legal agreement between you and ${siteConfig.name}. By downloading, installing, accessing, or using our websites, apps, games, content, features, or services, you agree to these Terms and our Privacy Policy.`,
      "If you do not agree, do not use our services. If you use our services on behalf of another person or organization, you confirm that you have authority to accept these Terms for them.",
    ],
  },
  {
    title: "Eligibility",
    body: [
      "Our apps and games are intended for users aged 13 and older. They are not designed for children under 13, are not enrolled in Designed for Families, and are not government apps. You must not use our services if you are under 13.",
      "If you are under the age of legal majority where you live, you may use our services only with permission and supervision from a parent or legal guardian. Your parent or guardian is responsible for your use of the services.",
    ],
  },
  {
    title: "License To Use Our Services",
    body: [
      `Subject to these Terms, ${siteConfig.name} grants you a limited, personal, revocable, non-exclusive, non-transferable, non-sublicensable license to install and use our apps and games for your own lawful, non-commercial entertainment or personal use.`,
      `You do not own our software, content, characters, names, designs, artwork, music, sounds, code, systems, or other materials. All rights not expressly granted are reserved by ${siteConfig.name} and its licensors.`,
    ],
  },
  {
    title: "App Stores And Platform Terms",
    body: [
      "If you download an app or game through Google Play, Apple App Store, or another platform, your use is also subject to that platform's terms, policies, payment rules, refund rules, and technical requirements. If platform terms conflict with these Terms, the platform terms control only to the extent required by that platform.",
      "The app store provider is not responsible for providing support or maintenance for our services unless its own terms say otherwise.",
    ],
  },
  {
    title: "Accounts, Progress, And Device Data",
    body: [
      "Some services may allow local progress, cloud progress, account features, leaderboards, achievements, or saved settings. You are responsible for keeping your device and account access secure.",
      "We may suspend, reset, or remove progress, scores, rewards, virtual items, or account access where we reasonably believe there is fraud, cheating, abuse, technical error, policy violation, security risk, or unlawful activity.",
    ],
  },
  {
    title: "Purchases, Subscriptions, And Virtual Items",
    body: [
      "Some services may offer paid apps, in-app purchases, subscriptions, ad removal, consumable items, non-consumable items, virtual currency, or other digital benefits. Prices, taxes, billing, renewal, cancellation, and refunds are generally handled by the app store or payment provider you use.",
      "Virtual items and virtual currency have no cash value, are licensed rather than sold, and may be changed, limited, suspended, or discontinued as permitted by law. You may not sell, transfer, trade, sublicense, or exchange virtual items outside the service unless we expressly allow it in writing.",
      "Except where required by law or app store policy, purchases are final and non-refundable. For app store purchases, refund requests should be made through the relevant app store process.",
    ],
  },
  {
    title: "Ads, Rewards, And Third-Party Offers",
    body: [
      "Our services may display ads, rewarded ads, sponsored content, or third-party offers. We are not responsible for third-party products, services, websites, ads, or claims. Interacting with third-party content is at your own discretion.",
      "Rewards connected to ads or offers may fail, be delayed, or be reversed due to technical issues, fraud checks, platform rules, or incomplete requirements. We may limit or deny rewards if we detect abuse, automation, or manipulation.",
    ],
  },
  {
    title: "User Content And Feedback",
    body: [
      "If a service allows you to submit usernames, messages, feedback, reviews, images, gameplay content, or other materials, you are responsible for what you submit. You must have all rights needed to submit that content and must not submit unlawful, harmful, infringing, abusive, deceptive, or privacy-violating content.",
      `You grant ${siteConfig.name} a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to host, store, reproduce, modify, display, publish, translate, distribute, and use your submitted content as needed to operate, improve, market, and protect our services.`,
      "If you send ideas, suggestions, or feedback, we may use them without restriction or compensation to you.",
    ],
  },
  {
    title: "Prohibited Conduct",
    body: [
      "You must not cheat, exploit bugs, use bots, automate gameplay, reverse engineer, decompile, modify, copy, resell, interfere with, overload, scrape, attack, or disrupt our services. You must not bypass security, access controls, ads, payment systems, or technical restrictions.",
      `You must not use our services for harassment, hate, threats, scams, fraud, illegal activity, intellectual property infringement, privacy violations, malware distribution, unauthorized advertising, or any conduct that harms users, ${siteConfig.name}, platforms, or third parties.`,
    ],
  },
  {
    title: "Updates, Changes, And Availability",
    body: [
      "We may update, modify, suspend, remove, or discontinue any part of our services at any time, including features, content, levels, rewards, balancing, availability, monetization, supported devices, and technical requirements.",
      "We do not guarantee that any service will be available at all times, error-free, compatible with every device, or preserved indefinitely. Some features may require internet access, platform services, permissions, or third-party services.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      `${siteConfig.name}, our apps, games, branding, designs, software, gameplay systems, art, audio, text, names, logos, and related materials are protected by intellectual property and other laws. You may not use our intellectual property except as allowed by these Terms or with our written permission.`,
      "Third-party trademarks, platform names, and service names belong to their respective owners. Use of third-party names does not imply endorsement unless expressly stated.",
    ],
  },
  {
    title: "Termination",
    body: [
      "You may stop using our services at any time. We may suspend or terminate your access, license, account, progress, purchases, or use of any service if you violate these Terms, create risk, cause harm, violate law, abuse the service, or if we discontinue the service.",
      "After termination, provisions that by their nature should continue will continue, including ownership, payment obligations, disclaimers, limitations of liability, indemnity, dispute terms, and contact provisions.",
    ],
  },
  {
    title: "Disclaimers",
    body: [
      "To the fullest extent permitted by law, our services are provided as is and as available, without warranties of any kind, whether express, implied, or statutory. We disclaim warranties of merchantability, fitness for a particular purpose, title, non-infringement, accuracy, availability, security, and uninterrupted operation.",
      "Some jurisdictions do not allow certain warranty exclusions, so some exclusions may not apply to you. Nothing in these Terms limits rights that cannot legally be limited.",
    ],
  },
  {
    title: "Limitation Of Liability",
    body: [
      `To the fullest extent permitted by law, ${siteConfig.name} and its owners, employees, contractors, partners, licensors, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, lost profits, lost data, lost progress, loss of goodwill, device issues, service interruption, or unauthorized access arising from or related to the services.`,
      "To the fullest extent permitted by law, our total liability for all claims related to the services will not exceed the greater of the amount you paid to us for the specific service in the six months before the claim or 100 USD. These limits apply even if a remedy fails its essential purpose.",
    ],
  },
  {
    title: "Indemnity",
    body: [
      `To the extent permitted by law, you agree to defend, indemnify, and hold harmless ${siteConfig.name} from claims, damages, losses, liabilities, costs, and expenses, including reasonable legal fees, arising from your use of the services, your content, your violation of these Terms, your violation of law, or your infringement of rights of another person or entity.`,
    ],
  },
  {
    title: "Disputes And Governing Law",
    body: [
      "Before filing a formal claim, you agree to contact us and try to resolve the dispute informally. Send dispute notices to our contact email and include your name, the service involved, a description of the issue, and the remedy you seek.",
      `Unless mandatory consumer law requires otherwise, these Terms are governed by the laws applicable in the jurisdiction where ${siteConfig.name} is established, without regard to conflict-of-law rules. Mandatory rights available to consumers in their country of residence are not limited by these Terms.`,
    ],
  },
  {
    title: "Changes To These Terms",
    body: [
      "We may update these Terms from time to time. When we do, we will update the date above. If changes are material, we may provide additional notice where required. Continued use of the services after updated Terms become effective means you accept the updated Terms.",
    ],
  },
  {
    title: "Contact",
    body: [
      `For support, legal questions, or notices about these Terms, contact ${siteConfig.name} at ${siteConfig.email}.`,
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms Of Service"
      intro={`These Terms govern your access to and use of ${siteConfig.name} websites, apps, games, and related services.`}
      sections={termsSections}
    />
  );
}
