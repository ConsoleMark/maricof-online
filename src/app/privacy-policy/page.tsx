import { LegalPage } from "@/components/site/legal-page";
import { siteConfig } from "@/config/site";

const privacySections = [
  {
    title: "1. Who We Are",
    body: [
      `${siteConfig.name} publishes mobile applications, mobile games, websites, support channels, and related digital services. In this Privacy Policy, "${siteConfig.name}", "we", "us", and "our" mean the publisher and operator of the services that link to this Privacy Policy.`,
      `For privacy questions, legal notices, deletion requests, and data rights requests, contact us at ${siteConfig.email}. This is our only official contact email.`,
    ],
  },
  {
    title: "2. Scope Of This Policy",
    body: [
      `This Privacy Policy is intended to cover ${siteConfig.name} apps and games published on Google Play and other app stores, plus our websites and support services. Not every app or game collects every category of information described here. The exact data collected depends on the product, features, SDKs, permissions, platform, device settings, app store requirements, and consent choices.`,
      "If a specific app, game, store listing, Google Play Data safety section, permission prompt, consent screen, or in-app notice provides more specific privacy information, that product-specific notice should be read together with this Privacy Policy.",
      "This policy is designed to support app-store publishing and transparency obligations, including Google Play privacy-policy and Data safety expectations. The Data safety information shown on Google Play for each app should accurately reflect that specific app's actual collection, sharing, security, and deletion practices.",
    ],
  },
  {
    title: "3. Age Audience, Children, And Families",
    body: [
      "Our apps and games are intended for users aged 13 and older. In Google Play Console, our target age groups are intended to start at 13-15 and continue through 16-17 and 18+. We do not design our apps or games for children under 13.",
      "Our apps and games are not submitted as Designed for Families, are not intended as child-directed services, and are not government apps. We do not knowingly request or collect personal information from children under 13.",
      `If you are under 13, do not use our services. If a parent or guardian believes that a child under 13 has provided personal information to us, contact ${siteConfig.email}. If we learn that personal information from a child under 13 was collected without legally valid consent, we will take reasonable steps to delete it or handle it lawfully.`,
      "Users aged 13 to 17 should use our services only with permission from a parent or legal guardian where required by law. Parents and guardians are responsible for supervising minors' use of apps, games, app stores, in-app purchases, ads, and online features.",
    ],
  },
  {
    title: "4. Information You Provide Directly",
    body: [
      "You may provide information directly when you contact support, send feedback, submit a form, participate in a survey, report a bug, request deletion, exercise privacy rights, create or edit a profile, choose a display name, submit user content, or otherwise communicate with us.",
      "This information may include your email address, name or display name, support message contents, attachments, screenshots, device or app details you provide, transaction or receipt information you submit for support, and any other information you choose to send.",
    ],
  },
  {
    title: "5. Device, Technical, And Usage Information",
    body: [
      "We and our service providers may collect device and technical information such as device model, device type, operating system, browser type, language, region, time zone, app version, installation source, IP address, network information, device identifiers, advertising identifiers where permitted, push notification tokens, diagnostic data, crash logs, performance data, security logs, and fraud-prevention signals.",
      "We may collect app and gameplay information such as sessions, feature usage, levels completed, scores, achievements, progress, virtual items, in-game settings, tutorial progress, ad impressions, ad clicks, reward events, purchase status, restore-purchase events, and interactions with app or game content.",
      "Approximate location may be inferred from IP address, country settings, store region, or device settings. We do not request precise location unless a specific app feature requires it and you grant the relevant permission.",
    ],
  },
  {
    title: "6. Purchases, Subscriptions, And Payment Data",
    body: [
      "If an app or game offers paid downloads, subscriptions, in-app purchases, virtual currency, ad removal, premium features, or other digital items, payment is usually processed by Google Play, Apple, or another app-store or payment provider.",
      "We do not receive your full payment card number from app stores. We may receive limited purchase-related information such as product identifier, transaction identifier, subscription status, purchase date, receipt or purchase token, refund status, fraud-prevention signals, and validation results.",
      "We use purchase information to provide purchased content, restore purchases, validate transactions, manage subscriptions, prevent fraud, comply with accounting or tax requirements, and respond to support requests.",
    ],
  },
  {
    title: "7. App Permissions",
    body: [
      "Some apps or games may request device permissions depending on their features. Permissions may include notifications, storage, photos or media, camera, microphone, location, contacts, Bluetooth, network access, vibration, or other platform permissions.",
      "We request permissions only when they support a product feature, service operation, security, legal compliance, analytics, advertising functionality, or platform requirement. Permission prompts should explain the permission at the platform level, and some apps may provide additional in-app context.",
      "You can usually manage or revoke permissions in your device settings. If you disable a permission, some features may not work correctly.",
    ],
  },
  {
    title: "8. Third-Party SDKs And Service Providers",
    body: [
      "Our apps and games may include third-party SDKs, platform services, and service providers for hosting, analytics, crash reporting, advertising, ad mediation, attribution, fraud prevention, payments, subscriptions, leaderboards, achievements, cloud saves, push notifications, age screening, consent management, customer support, security, and app-store compliance.",
      "These third parties may collect information directly from your device or receive information from us. Depending on the app, this may include device identifiers, advertising identifiers, IP address, approximate location, app activity, crash logs, diagnostics, ad interactions, purchase validation data, and consent status.",
      "We aim to use service providers that support appropriate privacy, security, and platform compliance requirements. Third-party providers process information under their own privacy policies and, where applicable, our instructions or contractual requirements. We are responsible for ensuring that third-party SDK use in our apps is consistent with applicable app-store policies and our disclosures.",
    ],
  },
  {
    title: "9. How We Use Information",
    body: [
      "We use information to provide, operate, maintain, update, debug, secure, personalize, and improve our websites, apps, games, and support services.",
      "We use information to save progress, enable gameplay features, operate accounts or profiles, provide rewards, process and restore purchases, manage subscriptions, respond to support requests, troubleshoot bugs, investigate crashes, test updates, understand feature usage, balance gameplay, and develop new services.",
      "We use information to show ads where included, measure ad performance, limit repeated ads, prevent ad fraud, perform attribution, manage consent choices, comply with app-store requirements, enforce our Terms of Service, prevent cheating or abuse, protect users and our services, respond to legal requests, and comply with law.",
    ],
  },
  {
    title: "10. Advertising, Analytics, And Personalization",
    body: [
      `Some ${siteConfig.name} apps and games may display ads. Ads may be contextual, frequency-limited, reward-based, measured, or personalized where permitted by law, platform rules, your age status, and your consent choices.`,
      "Advertising partners may use advertising identifiers, device identifiers, IP address, approximate location, app activity, ad impressions, ad clicks, conversion data, and other signals to deliver, measure, personalize, and improve ads, and to detect ad fraud.",
      "Analytics helps us understand how apps and games are used, improve performance, fix crashes, design updates, and make business decisions. Where practical, analytics is aggregated, limited, de-identified, or pseudonymized.",
      "You can manage many advertising choices through Android or iOS privacy settings, advertising ID settings, app-store settings, consent prompts, and in-app controls where available. Resetting or limiting your advertising identifier may reduce personalized advertising but may not remove all ads.",
    ],
  },
  {
    title: "11. Legal Bases For Processing",
    body: [
      "Where the EU GDPR, UK GDPR, or similar laws apply, we rely on one or more legal bases depending on the processing activity.",
      "Contract: we process information when necessary to provide the app, game, purchase, subscription, support, or service you requested.",
      "Consent: we rely on consent where required for certain advertising, analytics, optional permissions, push notifications, cookies, or similar technologies. You may withdraw consent where applicable.",
      "Legitimate interests: we process information for service operation, security, fraud prevention, cheating prevention, diagnostics, support, analytics, product improvement, legal claims, and ordinary business operations, where those interests are not overridden by your rights.",
      "Legal obligation: we process information where necessary to comply with laws, tax obligations, accounting rules, consumer protection rules, app-store obligations, lawful requests, and regulatory requirements.",
      "Vital interests or public interest: we may process information where necessary to protect someone's vital interests or where another legally recognized basis applies.",
    ],
  },
  {
    title: "12. Cookies And Similar Technologies",
    body: [
      "Our websites may use cookies, local storage, pixels, scripts, or similar technologies to operate the site, remember settings, measure traffic, improve performance, prevent abuse, and support analytics or advertising where used.",
      "Mobile apps and games may use SDK storage, local device storage, advertising identifiers, analytics identifiers, push tokens, or similar technologies for comparable purposes. You can manage some controls through browser settings, device settings, app settings, or consent prompts where available.",
    ],
  },
  {
    title: "13. Sharing And Disclosure",
    body: [
      "We may share information with vendors and service providers who help us operate, host, secure, analyze, advertise, support, improve, and monetize our services.",
      "We may share information with app stores, payment processors, subscription providers, platform services, and fraud-prevention providers for purchases, refunds, subscriptions, receipt validation, tax, accounting, fraud prevention, and account-related services.",
      "We may share information with advertising, analytics, attribution, and measurement partners where permitted by law, app-store rules, and your consent choices.",
      "We may disclose information if required by law, legal process, court order, regulatory request, app-store policy, or governmental request; to protect rights, safety, security, property, users, or the public; to investigate fraud, cheating, abuse, or security incidents; or to enforce our Terms of Service.",
      "We may transfer information as part of a merger, acquisition, financing, restructuring, bankruptcy, sale of assets, or similar transaction, subject to appropriate protections.",
    ],
  },
  {
    title: "14. Sale, Sharing, And Targeted Advertising",
    body: [
      "We do not sell personal information for money. However, some privacy laws define sale, sharing, or targeted advertising broadly, and certain advertising or analytics activities may be considered a sale, sharing, or targeted advertising under those laws.",
      "Where applicable, you may have the right to opt out of sale, sharing, targeted advertising, profiling, or certain uses of sensitive personal information. You can exercise available rights by contacting us and by using device, platform, consent, or in-app privacy controls where available.",
    ],
  },
  {
    title: "15. International Transfers",
    body: [
      "We and our service providers may process information in countries other than your country of residence, including the United States, the European Economic Area, the United Kingdom, and other countries where our providers operate.",
      "Privacy laws in those countries may differ from the laws where you live. Where required, we use appropriate safeguards for international transfers, such as contractual protections, standard contractual clauses, adequacy decisions, transfer risk assessments, or other legally recognized mechanisms.",
    ],
  },
  {
    title: "16. Data Retention",
    body: [
      "We keep personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including providing services, maintaining records, resolving disputes, enforcing agreements, preventing fraud or abuse, complying with legal obligations, and protecting our rights.",
      "Retention periods vary depending on data type, product, platform, user settings, provider settings, legal requirements, and operational needs. Support emails may be kept for customer service records. Crash logs and diagnostics may be kept for troubleshooting. Purchase records may be kept for accounting, tax, refund, and fraud-prevention purposes.",
      "We may retain aggregated, anonymized, or de-identified information that no longer identifies you. We may also retain information where deletion is not legally required or where retention is necessary for security, legal claims, dispute resolution, or compliance.",
    ],
  },
  {
    title: "17. Security",
    body: [
      "We use reasonable technical, organizational, and administrative measures designed to protect information against unauthorized access, loss, misuse, alteration, disclosure, or destruction.",
      "No method of transmission or storage is completely secure. We cannot guarantee absolute security. You are responsible for keeping your device, app-store account, platform account, and any login credentials secure.",
    ],
  },
  {
    title: "18. Your Privacy Choices",
    body: [
      "You can manage many privacy choices through device settings, app settings, browser settings, Google Play settings, Apple settings, advertising ID controls, consent prompts, permission controls, notification controls, and app-store account settings.",
      "You may be able to reset or delete your advertising ID, limit ad personalization, withdraw consent, disable notifications, revoke permissions, clear local app data, delete an app, or contact us to request deletion of information associated with your support request or app usage where we can reasonably identify it.",
      `To make a privacy request, contact ${siteConfig.email}. We may need to verify your identity and ask for information needed to locate the relevant app, game, device, account, transaction, or support conversation.`,
    ],
  },
  {
    title: "19. European Economic Area, UK, And Swiss Rights",
    body: [
      "If EU GDPR, UK GDPR, Swiss data protection law, or similar law applies, you may have the right to request access to your personal information, correction of inaccurate information, deletion, restriction of processing, data portability, objection to processing based on legitimate interests, and withdrawal of consent where processing is based on consent.",
      "You may also have the right to object to direct marketing and to lodge a complaint with a supervisory authority. For the United Kingdom, the supervisory authority is the Information Commissioner's Office. For the EEA, you may contact your local data protection authority.",
      `We encourage you to contact us first at ${siteConfig.email} so we can try to resolve your concern. We will respond to valid requests within the time required by applicable law.`,
    ],
  },
  {
    title: "20. California And Other US State Privacy Notices",
    body: [
      "If California, Colorado, Connecticut, Virginia, Utah, Texas, Oregon, Montana, or other US state privacy laws apply, you may have rights to know or access personal information, correct personal information, delete personal information, receive a portable copy, opt out of sale, sharing, targeted advertising, certain profiling, or limit certain uses of sensitive personal information.",
      "We do not knowingly sell or share personal information of children under 16. Our services are intended for users aged 13 and older and are not designed for children under 13.",
      "We will not discriminate against you for exercising privacy rights. If we deny a request, you may have the right to appeal depending on your state. To exercise or appeal a privacy request, contact us at our official email.",
    ],
  },
  {
    title: "21. Brazil, Canada, And Other Regions",
    body: [
      "Depending on where you live, laws such as Brazil's LGPD, Canada's privacy laws, and other national or regional privacy laws may provide rights similar to access, correction, deletion, portability, consent withdrawal, and information about processing.",
      `Where those laws apply, you can contact ${siteConfig.email} to exercise available rights. We will handle requests according to applicable law.`,
    ],
  },
  {
    title: "22. Data Deletion Requests",
    body: [
      "You may request deletion of personal information by contacting us. Include the app or game name, your device or account identifiers if available, the email used for support or account features, and enough detail for us to locate the information.",
      "Some app data may be stored locally on your device and can be deleted by clearing app data or uninstalling the app. Some data may be controlled by app stores, advertising networks, analytics providers, or platform services, and you may need to use their tools or contact them directly.",
      "We may retain information where required or permitted by law, including for security, fraud prevention, dispute resolution, legal claims, accounting, tax, app-store compliance, or legitimate business records.",
    ],
  },
  {
    title: "23. Automated Decision-Making And Profiling",
    body: [
      "We may use automated systems to detect fraud, cheating, abuse, security incidents, invalid traffic, or policy violations. Advertising and analytics partners may also use automated systems for ad delivery, measurement, personalization, attribution, and fraud prevention.",
      "We do not use automated decision-making that produces legal or similarly significant effects about you unless disclosed in a specific product notice or permitted by applicable law.",
    ],
  },
  {
    title: "24. Third-Party Links And Services",
    body: [
      "Our services may link to or integrate with third-party websites, app stores, social platforms, ads, SDKs, payment providers, analytics providers, support providers, or other services. We do not control third-party privacy practices, content, or security.",
      "Third-party privacy policies apply to third-party services. You should review those policies before interacting with third-party services or submitting information to them.",
    ],
  },
  {
    title: "25. Government Apps And Government Information",
    body: [
      `${siteConfig.name} apps and games are not government apps. We do not claim to represent a government entity, provide official government services, or communicate government information as an official government source.`,
      "If any future product includes public-sector or government-related information, we will provide appropriate disclosures and comply with applicable platform requirements before publishing that product.",
    ],
  },
  {
    title: "26. Changes To This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we make changes, we will update the Last updated date. If changes are material, we may provide additional notice through our website, app, game, store listing, or other reasonable method where required.",
      "Your continued use of our services after an updated Privacy Policy becomes effective means the updated policy applies to your use, where permitted by law.",
    ],
  },
  {
    title: "27. Contact Us",
    body: [
      `If you have questions, requests, or concerns about this Privacy Policy or our privacy practices, contact ${siteConfig.name} at ${siteConfig.email}.`,
      `This general Privacy Policy is designed for ${siteConfig.name} apps and games. App-specific disclosures in Google Play, in-app notices, permission prompts, consent screens, and Data safety sections must accurately reflect the practices of each individual app or game.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This Privacy Policy explains how ${siteConfig.name} may collect, use, disclose, protect, retain, and transfer information in connection with our mobile apps, mobile games, websites, and related services.`}
      sections={privacySections}
    />
  );
}
