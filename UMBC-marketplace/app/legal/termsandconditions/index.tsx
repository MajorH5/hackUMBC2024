import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

export default function () {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: 'Terms of Service' })
    }, [navigation]);

    return (
        <ScrollView className='w-full h-full'>
            <Text className="font-bold text-lg">Retriever Marketplace Terms of Service</Text>
            <Text>Effective Date: September 29, 2024</Text>

            <Text className="mt-4">
                Welcome to the Retriever Marketplace, an online platform designed exclusively for the University of Maryland, Baltimore County (UMBC) community to buy, sell, and trade items.
            </Text>

            <Text className="mt-2">
                Please read these Terms of Service ("Terms") carefully before accessing or using our Retriever Marketplace app (the “Service”). By downloading, accessing, or using the Service, you agree to comply with and be bound by the following Terms. If you do not agree to these Terms, please do not use the Service.
            </Text>

            <Text className="font-bold mt-4">1. Acceptance of Terms</Text>
            <Text>
                By registering for and/or using the Service, you represent and warrant that you:
            </Text>
            <Text className="ml-4">
                • Are at least 18 years of age or have parental/guardian consent if under 18.
            </Text>
            <Text className="ml-4">
                • Are a current or former UMBC student, faculty, or staff member with a valid UMBC email address.
            </Text>
            <Text className="ml-4">
                • Agree to comply with these Terms and our Privacy Policy.
            </Text>

            <Text className="font-bold mt-4">2. Modifications to Terms</Text>
            <Text>
                We reserve the right to update or change these Terms at any time without prior notice. Any changes will be effective immediately upon posting. Your continued use of the Service after any such changes constitutes acceptance of the new Terms.
            </Text>

            <Text className="font-bold mt-4">3. Eligibility</Text>
            <Text>
                To use the Service, you must:
            </Text>
            <Text className="ml-4">
                • Be a member of the UMBC community.
            </Text>
            <Text className="ml-4">
                • Have a valid UMBC email address to register and create an account.
            </Text>
            <Text className="ml-4">
                • Ensure the accuracy of the information you provide during registration.
            </Text>

            <Text className="font-bold mt-4">4. Account Registration and Security</Text>
            <Text>
                When creating an account:
            </Text>
            <Text className="ml-4">
                • You must provide accurate, up-to-date information.
            </Text>
            <Text className="ml-4">
                • You are responsible for maintaining the confidentiality of your account credentials (username, password).
            </Text>
            <Text className="ml-4">
                • You agree to notify us immediately of any unauthorized use of your account.
            </Text>
            <Text className="ml-4">
                • We are not liable for any loss or damage arising from unauthorized access to your account.
            </Text>

            <Text className="font-bold mt-4">5. User Conduct</Text>
            <Text>
                You agree not to use the Service to:
            </Text>
            <Text className="ml-4">
                • Post or sell illegal, prohibited, or dangerous items (e.g., weapons, drugs, counterfeit goods).
            </Text>
            <Text className="ml-4">
                • Engage in fraudulent activities.
            </Text>
            <Text className="ml-4">
                • Post offensive, discriminatory, or inappropriate content.
            </Text>
            <Text className="ml-4">
                • Harass or threaten other users.
            </Text>
            <Text className="ml-4">
                • Engage in activities that violate any applicable laws or regulations.
            </Text>
            <Text className="mt-2">
                We reserve the right to suspend or terminate your account if you violate these guidelines.
            </Text>

            <Text className="font-bold mt-4">6. Prohibited Items</Text>
            <Text>
                The following items are strictly prohibited from being sold on the Retriever Marketplace:
            </Text>
            <Text className="ml-4">
                • Firearms, ammunition, or explosives.
            </Text>
            <Text className="ml-4">
                • Drugs, controlled substances, or paraphernalia.
            </Text>
            <Text className="ml-4">
                • Stolen goods or property.
            </Text>
            <Text className="ml-4">
                • Hazardous materials (e.g., chemicals, flammable substances).
            </Text>
            <Text className="ml-4">
                • Counterfeit or pirated items.
            </Text>
            <Text className="ml-4">
                • Offensive, discriminatory, or explicit content.
            </Text>

            <Text className="font-bold mt-4">7. Transactions and Payments</Text>
            <Text>
                The Retriever Marketplace does not handle or process transactions between buyers and sellers. Users are responsible for coordinating payment and exchange methods independently of the platform. We recommend meeting in safe, public locations to complete transactions.
            </Text>
            <Text className="mt-2">
                The Retriever Marketplace is not responsible for:
            </Text>
            <Text className="ml-4">
                • The quality, condition, or accuracy of listed items.
            </Text>
            <Text className="ml-4">
                • Disputes arising between buyers and sellers.
            </Text>
            <Text className="ml-4">
                • Any losses or damages resulting from a transaction.
            </Text>

            <Text className="font-bold mt-4">8. User Content</Text>
            <Text>
                By posting items or content on the Service, you grant Retriever Marketplace a non-exclusive, royalty-free, worldwide license to use, distribute, modify, and display such content in connection with the operation of the Service.
            </Text>
            <Text>
                You retain all rights to your content, but you represent and warrant that:
            </Text>
            <Text className="ml-4">
                • The content does not infringe on the intellectual property rights of others.
            </Text>
            <Text className="ml-4">
                • The content is accurate and lawful.
            </Text>
            <Text>
                We reserve the right to remove any content that violates these Terms or is deemed inappropriate.
            </Text>

            <Text className="font-bold mt-4">9. Third-Party Services</Text>
            <Text>
                The Retriever Marketplace may include links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party websites or services.
            </Text>

            <Text className="font-bold mt-4">10. Termination of Use</Text>
            <Text>
                We reserve the right to suspend or terminate your account at our sole discretion if:
            </Text>
            <Text className="ml-4">
                • You violate these Terms.
            </Text>
            <Text className="ml-4">
                • You engage in fraudulent or illegal activity.
            </Text>
            <Text className="ml-4">
                • You misuse the Service or fail to comply with applicable policies.
            </Text>
            <Text>
                Upon termination, you will no longer have access to your account, and we may delete any associated data.
            </Text>

            <Text className="font-bold mt-4">11. Disclaimers and Limitation of Liability</Text>
            <Text>
                To the fullest extent permitted by law, the Retriever Marketplace:
            </Text>
            <Text className="ml-4">
                • Is provided "as is" without warranties of any kind, either express or implied.
            </Text>
            <Text className="ml-4">
                • Does not guarantee the availability, reliability, or accuracy of the Service.
            </Text>
            <Text className="ml-4">
                • Will not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of the Service.
            </Text>

            <Text className="font-bold mt-4">12. Indemnification</Text>
            <Text>
                You agree to indemnify and hold harmless UMBC, the Retriever Marketplace, and its affiliates from any claims, damages, liabilities, or expenses arising from your use of the Service or violation of these Terms.
            </Text>

            <Text className="font-bold mt-4">13. Privacy</Text>
            <Text>
                Your use of the Service is also governed by our Privacy Policy, which explains how we collect, use, and share your information.
            </Text>

            <Text className="font-bold mt-4">14. Governing Law</Text>
            <Text>
                These Terms are governed by the laws of the State of Maryland, without regard to its conflict of laws principles. Any legal disputes arising from the use of the Service shall be resolved in the courts of Maryland.
            </Text>

            <Text className="font-bold mt-4">15. Changes to the Service</Text>
            <Text>
                We may modify, suspend, or discontinue the Service at any time without prior notice. We are not liable for any changes that affect your access to the Service.
            </Text>

            <Text className="font-bold mt-4">16. Contact Information</Text>
            <Text>
                If you have any questions or concerns regarding these Terms, please contact us at:
            </Text>
            <Text className="ml-4">Retriever Marketplace Team</Text>
            <Text className="ml-4">haina2@umbc.edu</Text>
            <Text className="ml-4">jlin2809@umd.edu</Text>
        </ScrollView>
    )
}