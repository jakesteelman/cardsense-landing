---
layout: ../../layouts/LegalLayout.astro
title: Privacy Policy
description: How Cardsense handles your data. We don't connect to your bank — your card list and location stay on your device.
lastUpdated: 2026-05-16
---

## Summary

Cardsense helps you decide which credit card you already own to use at a given purchase, and tracks credits (dining credits, travel credits, etc.) on those cards. Here is the short version of what we do with your data:

- We require an account (Sign in with Apple or email magic link) so your wallet syncs to you, not your device. The email or Apple identifier is the only personal information we ask for.
- The list of which credit cards you own and how you have used your credits is stored on your device. We do not collect or have access to your credit card numbers, bank account information, or transactions.
- We use a small set of third-party services (Apple, Supabase, RevenueCat, PostHog, Sentry) to run the app. Each is described below.
- Location is used only on your device to find nearby places. Your location is not sent to our servers.
- You can turn off analytics in the app's Settings screen at any time.
- You can delete your account by emailing support@cardsense.co.

The full policy follows.

---

## 1. Who we are

Cardsense is an iOS application that helps you choose the most rewarding credit card to use at a given purchase and tracks the spending credits on those cards. The app is operated by the Data Controller named above, located in the United States. Cardsense is currently offered only to users in the United States.

## 2. Information we collect

We collect the minimum information required to operate the app. The categories below describe everything we collect; we do not collect anything else.

### 2.1 Account information

When you create an account, we collect:

- **Sign in with Apple.** Apple sends us an opaque user identifier and, if you choose to share it, your name and email address (or a private relay address Apple generates for you). We do not receive your Apple ID password.
- **Email magic link.** Your email address, and the one-time code you enter to sign in.

This information is stored by our authentication provider, Supabase (see Section 4), and is used to identify your account and let you sign in from any device.

### 2.2 Subscription information

If you purchase a Cardsense Pro subscription, the purchase is processed by Apple through the App Store. We do not see your payment card information at any point. We use RevenueCat (see Section 4) to verify your subscription status and to keep your subscription tied to your Cardsense account. RevenueCat receives an anonymized account identifier (a UUID), the products you purchase, and the resulting subscription state (active, trial, expired, refunded, etc.).

### 2.3 Wallet and credit usage data

The list of credit cards you have added to Cardsense, the dates you opened those cards (if you enter them), and the credit redemptions you log are stored locally on your device in Apple's SwiftData and standard preferences storage. This data is shared between the Cardsense app and the Cardsense home-screen widget on the same device using an Apple App Group, and is not transmitted to our servers. We do not collect your credit card numbers, expiration dates, CVVs, account balances, or transactions.

### 2.4 Location

If you grant location permission, Cardsense uses your device's location while the app is open to find nearby places (restaurants, gas stations, etc.) using Apple's MapKit framework on your device. Your location is processed only on your device. Cardsense does not transmit your location to our servers or to any third party. You can deny or revoke location access in iOS Settings at any time; the rest of the app continues to work without it.

### 2.5 Analytics

We use PostHog (see Section 4) to understand how the app is used in aggregate — for example, how often users start the sign-in flow, view the paywall, and complete a purchase. Analytics events are associated with your anonymized account identifier (the same UUID used for your account). We do not record screen contents, taps, or session replays. The specific events we currently capture are:

- App open and background events
- Sign-in started, completed, and failed (with the method: Apple or magic link)
- Paywall viewed, purchased, and dismissed (with the screen that led to it)

You can opt out of analytics at any time by toggling **"Share anonymous analytics"** off in Settings → Privacy.

### 2.6 Crash and diagnostic data

We use Sentry (see Section 4) to receive crash reports and basic performance data when the app behaves unexpectedly. Crash reports include the device model, iOS version, the app version, a stack trace of the crash, your IP address (used by Sentry to derive an approximate region for crash grouping), and, if you are signed in, your account identifier. Crash reports do not include your wallet, your credit usage, your location, or your email address. Crash reports are subject to the same Settings toggle as analytics: turning off **"Share anonymous analytics"** also turns off Sentry.

### 2.7 Notifications

If you enable credit-expiration reminders, the notifications are scheduled and delivered locally by iOS on your device. We do not operate a push-notification server and do not see when notifications are scheduled or delivered.

## 3. How we use information

We use the information described above to:

- Authenticate you and let your wallet follow you across devices
- Provide and improve the app's core features (card recommendations, credit tracking, nearby suggestions)
- Verify your subscription and process purchases through Apple
- Diagnose crashes and bugs
- Understand which features are used so we can prioritize improvements
- Respond to your support requests
- Comply with applicable law

We do not sell your personal information. We do not use your information to build advertising profiles. We do not run third-party advertising in the app.

## 4. Service providers

We rely on the following third parties to run the app. Each acts as a data processor on our behalf and is contractually bound to use your information only to provide their service.

| Provider     | Purpose                                | Information shared                                       |
| ------------ | -------------------------------------- | -------------------------------------------------------- |
| Apple        | Sign in with Apple, App Store payments | Apple user identifier, optional name/email, purchase data |
| Supabase     | Account authentication and card catalog hosting | Email address, Apple identifier, account UUID |
| RevenueCat   | Subscription management                | Account UUID, subscription state, product identifiers     |
| PostHog      | Product analytics                      | Account UUID, analytics events (see Section 2.5)          |
| Sentry       | Crash reporting                        | Crash data, device info, IP address, account UUID         |

Each provider has its own privacy policy, available on their respective websites.

## 5. Data storage and security

Account data hosted by Supabase is stored on Supabase's infrastructure in the United States. Subscription data is stored by RevenueCat and Apple. Analytics and crash data are stored by PostHog and Sentry respectively. We rely on these providers' security practices, which include encryption in transit (TLS) and at rest. Wallet and credit usage data stored on your device is protected by iOS data protection (encrypted with your device passcode).

No internet-connected system is fully secure. We cannot guarantee absolute security, and you use the app at your own risk.

## 6. Data retention

- **Account information** is retained for as long as your account exists.
- **Subscription records** are retained as long as required by Apple and by tax/accounting rules.
- **Analytics events** are retained by PostHog for up to 12 months and then deleted.
- **Crash reports** are retained by Sentry for up to 90 days and then deleted.
- **On-device data** is retained until you delete the app or sign out.

If you delete your account, we delete your account record from Supabase and disassociate your account identifier from RevenueCat, PostHog, and Sentry within 30 days. Backups containing your data may persist for up to 30 additional days before being overwritten.

## 7. Your choices

- **Sign out.** Settings → Account → Sign Out. Removes your session from the device; data on Supabase, RevenueCat, etc. remains until you delete your account.
- **Delete your account.** Email support@cardsense.co from the address tied to your account and we will delete your account and the associated data described above.
- **Turn off analytics and crash reporting.** Settings → Privacy → Share anonymous analytics.
- **Turn off location.** iOS Settings → Cardsense → Location.
- **Turn off notifications.** iOS Settings → Cardsense → Notifications, or Settings → Notifications inside the app.
- **Manage your subscription.** Settings → Subscription → Manage subscription, which deep-links to Apple's subscription management screen. Cancellations are handled by Apple.

## 8. California privacy rights

If you are a California resident, the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), gives you the right to:

- Know what personal information we collect about you and how we use it (described in this policy)
- Request a copy of that information
- Request that we delete that information
- Correct inaccurate information
- Opt out of the "sale" or "sharing" of your information

**We do not sell or share your personal information** as those terms are defined under the CCPA. We do not use your information for cross-context behavioral advertising.

To exercise any of these rights, email support@cardsense.co from the address associated with your account. We will respond within 45 days. We will not discriminate against you for exercising these rights.

## 9. Children's privacy

Cardsense is rated 17+ in the App Store and is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us at support@cardsense.co and we will delete that information.

## 10. International users

Cardsense is currently offered only to users in the United States. If you are accessing Cardsense from outside the United States, your information will be processed in the United States, which may have different data-protection laws than the country in which you reside.

## 11. Changes to this policy

We may update this policy from time to time. When we make material changes, we will update the "Last updated" date at the top of this policy and, where appropriate, notify you through the app or by email. Continued use of the app after a change indicates your acceptance of the updated policy.

## 12. Contact

Questions about this policy or requests to exercise your privacy rights:

**Data Controller:** Jake Steelman, sole proprietor doing business as Cardsense ("Cardsense," "we," "us," or "our").
**Contact:** support@cardsense.co

You can also reach us through the **Send feedback** link in the app's Settings screen.