import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.privacy}>
        <h3>Privacy Policy</h3>
        <br />

        <p className={styles.mainContent}>
          <span className={styles.topContent}>
            At Magic Table, we are committed to protecting and respecting your
            privacy. This privacy policy explains how we use the personal
            information we collect about you when you use our app and
            participate in our events. It is designed to comply with the Digital
            Personal Data Protection Act, 2023 (DPDP Act) in India and other
            applicable laws.
          </span>
        </p>

        <p className={styles.textheadings}>Data Collection</p>
        <p>We collect information about you when you:</p>
        <ul className={styles.listcontent}>
          <li>
            Sign up for our app and answer the personality questionnaire, which
            includes details about your interests and preferences for AI-driven
            matchmaking.
          </li>
          <li>
            Book a seat for a dinner or subscribe to our membership, requiring
            personal details like name, age, gender, contact number, and email
            address.
          </li>
          <li>
            Provide feedback or contact us, which may include additional
            voluntary information.
          </li>
          <li>
            Use our app&apos;s features, such as checking in at a restaurant,
            which may involve location data.
          </li>
        </ul>

        <p>The types of information we collect include:</p>
        <ul className={styles.listcontent}>
          <li>
            Personal details: Name, age, gender, contact number, email address.
          </li>
          <li>
            Profile information: Interests, preferences, dietary restrictions
            (which may include health-related data).
          </li>
          <li>
            Payment information: To process bookings and subscriptions, handled
            by secure third-party payment gateways.
          </li>
          <li>
            Location data: To match you with others in your locality for dinner
            events.
          </li>
          <li>
            Device information: For app performance, security, and analytics,
            such as device type and IP address.
          </li>
        </ul>
        <p>
          This collection is necessary for providing our services, ensuring a
          safe and enjoyable dining experience, and complying with legal
          obligations.
        </p>

        <p className={styles.textheadings}>Data Usage</p>
        <p>We use your information for the following purposes:</p>
        <ul className={styles.listcontent}>
          <li>
            To manage your account and facilitate your participation in our
            Saturday dinner events, including sending confirmations and
            reminders.
          </li>
          <li>
            To match you with other users based on your interests and
            preferences using our AI-driven algorithm.
          </li>
          <li>
            To send you emails about your dinner group details, event updates,
            and, with your consent, about other products/services.
          </li>
          <li>
            To respect your dietary restrictions and communicate these to
            restaurant partners.
          </li>
          <li>
            To improve our app and services through analytics and user feedback.
          </li>
          <li>To comply with legal and regulatory requirements.</li>
        </ul>
        <p>
          We ensure that data usage is limited to these purposes and is not used
          for incompatible activities, as required by the DPDP Act, 2023.
        </p>

        <p className={styles.textheadings}>Data Sharing</p>
        <p>We may share your information with:</p>
        <ul className={styles.listcontent}>
          <li>
            Restaurant partners: To facilitate dinner events, including dietary
            restrictions and group size.
          </li>
          <li>
            Payment gateways: Such as Razorpay, with data handled per their
            privacy policies.
          </li>
          <li>
            Service providers: For maintenance, customer support, and analytics
            under strict confidentiality.
          </li>
          <li>
            Law enforcement: If required by law through valid legal processes.
          </li>
        </ul>
        <p>
          We do not sell or rent your personal information to third parties for
          marketing purposes. All sharing is governed by written contracts
          ensuring data protection, and we do not permit third parties to
          process your data for their own purposes.{" "}
        </p>

        <p className={styles.textheadings}>Data Security</p>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, alteration, or disclosure. These measures
          include:
        </p>
        <ul className={styles.listcontent}>
          <li>Encryption of sensitive data during transmission and storage.</li>
          <li>
            Secure storage with access restricted to authorized personnel.
          </li>
          <li>Regular security assessments and updates.</li>
        </ul>
        <p>
          However, no method of transmission over the internet or electronic
          storage is completely secure, and we cannot guarantee absolute
          security. In case of a data breach, we will notify affected users and
          authorities as required by law.
        </p>

        <p className={styles.textheadings}>User Rights</p>
        <p>
          Under the DPDP Act, 2023, and other applicable laws, you have the
          following rights regarding your personal information:{" "}
        </p>
        <ul className={styles.listcontent}>
          <li>
            Right to Access: Request a copy of personal information and its
            processing.
          </li>
          <li>
            Right to Update or Correct: Update inaccurate/incomplete data via
            app profile.
          </li>
          <li>
            Right to Deletion: Request deletion of account and data, subject to
            legal constraints.
          </li>
          <li>
            Right to Opt-Out: Unsubscribe from promotional emails anytime.
          </li>
          <li>
            Right to Withdraw Consent: Withdraw previously given consent, which
            may affect app features.
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us at hello@magictable.in. We
          will respond to your request within a reasonable timeframe, typically
          30 days, as per legal requirements.
        </p>

        <p className={styles.textheadings}>Cookies and Tracking</p>
        <p>
          Our app may use cookies and other tracking technologies to enhance
          your experience and analyze usage. Cookies are small files stored on
          your device that help us:
        </p>
        <ul className={styles.listcontent}>
          <li>Remember your preferences and settings.</li>
          <li>Analyze app usage to improve experience.</li>
          <li>Enable in-app analytics and performance tracking.</li>
        </ul>
        <p>
          You can manage your cookie preferences through your device settings.
          For more details, refer to our Cookie Policy, which will be available
          on our website.
        </p>

        <p className={styles.textheadings}>International Data Transfers</p>
        <p>
          Your information may be transferred to and processed in countries
          other than India for the purposes outlined in this policy, such as
          cloud storage providers based in the USA or UK. We take steps to
          ensure that such transfers comply with the DPDP Act, 2023, including:
        </p>
        <ul className={styles.listcontent}>
          <li>
            Data may be transferred to countries like the USA or UK for storage
            or processing.
          </li>
          <li>
            We ensure compliance through standard contractual clauses or other
            safeguards.
          </li>
        </ul>
        <p>
          We will inform you if your data is transferred internationally and the
          safeguards in place, upon request.
        </p>

        <p className={styles.textheadings}>Data Retention</p>
        <p>
          We retain your personal information for as long as necessary to
          fulfill the purposes for which it was collected, or as required by
          law. For example:
        </p>
        <ul className={styles.listcontent}>
          <li>
            Account and booking data: Retained for 7 years for legal compliance.
          </li>
          <li>
            Profile data: Retained while your account is active, or until
            deleted.
          </li>
          <li>After retention periods, data is deleted or anonymized.</li>
        </ul>

        <p className={styles.textheadings}>Automated Decision-Making</p>
        <p>
          We use an AI-driven algorithm to match you with other users for dinner
          groups. This is based on your responses to our questionnaire and other
          profile information, such as interests and location. This automated
          decision-making helps ensure compatible and engaging dinner
          experiences. You have the right to opt-out of this matching process or
          request manual matching if available, by contacting us at
          hello@magictable.in. We will review such requests on a case-by-case
          basis, considering operational feasibility.
        </p>

        <p className={styles.textheadings}>Special Categories of Data</p>
        <p>
          We may collect information about your dietary restrictions, which
          could include health-related information (e.g., allergies,
          vegetarian/vegan preferences). We handle this data with extra care, as
          it may fall under special categories under the DPDP Act, 2023, and
          only use it to ensure that the restaurant can accommodate your needs.
          We do not share this data with third parties except with restaurant
          partners for the purpose of event facilitation, under strict
          confidentiality agreements.
        </p>

        <p className={styles.textheadings}>Updates to the Policy</p>
        <p>
          We may update this privacy policy from time to time to reflect changes
          in our practices, legal requirements, or operational needs. Any
          changes will be posted on our website at
          www.magictable.in/privacypolicy, and we will notify you of significant
          changes via email or in-app notifications. We encourage you to review
          this policy periodically.
        </p>

        <p className={styles.textheadings}>Contact Information</p>
        <p>
          If you have any questions or concerns about this privacy policy or our
          handling of your personal information, please contact us at:
        </p>
        <ul className={styles.listcontent}>
          <li>Email: hello@magictable.in</li>
          <li>
            Address: Magic Table, Spuratv Technologies PVT LTD, 43 South Raj Mohalla, Indore, MP 452002
          </li>
        </ul>
        <p>
          You can also reach out to our Data Protection Officer at
          dpo@magictable.in for privacy-related inquiries.
        </p>

        <p className={styles.textheadings}>Summary Table</p>
        <table className={styles.summaryTable}>
          <thead>
            <tr>
              <th>Aspects</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Data Collected</th>
              <td>
                Personal details, profile info, payment data, location, device
                info
              </td>
            </tr>
            <tr>
              <th scope="row">Purpose of Use</th>
              <td>
                Account management, matching, event facilitation, analytics,
                legal compliance
              </td>
            </tr>
            <tr>
              <th scope="row">Data Sharing</th>
              <td>
                Restaurant partners, payment gateways, service providers, legal
                authorities
              </td>
            </tr>
            <tr>
              <th scope="row">Security Measures</th>
              <td>Encryption, secure storage, regular assessments</td>
            </tr>
            <tr>
              <th scope="row">User Rights</th>
              <td>Access, update, delete, opt-out, withdraw consent</td>
            </tr>
            <tr>
              <th scope="row">International Transfers</th>
              <td>Possible, with safeguards under DPDP Act, 2023</td>
            </tr>
            <tr>
              <th scope="row">Retention Period</th>
              <td>As long as necessary, up to 7 years for legal compliance</td>
            </tr>
            <tr>
              <th scope="row">Automated Decisions</th>
              <td>AI matching, opt-out available upon request</td>
            </tr>
            <tr>
              <th scope="row">Special Data Handling</th>
              <td>Dietary restrictions (health-related) with extra care</td>
            </tr>
          </tbody>
        </table>

        <p>
          This policy ensures Magic Table operates transparently, protecting
          user data while fostering trust for your app launch in Bangalore and
          beyond.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
