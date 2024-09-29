import React from "react";
import { View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

export default function PrivacyPolicyScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: 'Terms of Service' })
    }, [navigation]);

    return (
        <ScrollView className='w-full h-full'>
            <Text className="font-bold text-lg">Retriever Marketplace Privacy Policy</Text>
            <Text>Effective Date: September 29, 2024</Text>

            <Text className="mt-4">
                Welcome to the Retriever Marketplace. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our app (the “Service”). Please read this Privacy Policy carefully. By using the Service, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not use the Service.
            </Text>

            <Text className="font-bold mt-4">1. Information We Collect</Text>
            <Text>
                We may collect the following types of information when you use the Retriever Marketplace:
            </Text>
            <Text className="ml-4">
                • <Text className="font-bold">Personal Information:</Text> Name, email address, and other contact details that you provide during account registration.
            </Text>
            <Text className="ml-4">
                • <Text className="font-bold">Transaction Information:</Text> Details about the items you buy or sell through the Service.
            </Text>
            <Text className="ml-4">
                • <Text className="font-bold">Usage Data:</Text> Information about your interactions with the Service, including device information, IP address, and browsing data.
            </Text>

            <Text className="font-bold mt-4">2. How We Use Your Information</Text>
            <Text>We may use your information for the following purposes:</Text>
            <Text className="ml-4">
                • To provide and maintain the Service.
            </Text>
            <Text className="ml-4">
                • To personalize your experience on the platform.
            </Text>
            <Text className="ml-4">
                • To process transactions and facilitate communication between buyers and sellers.
            </Text>
            <Text className="ml-4">
                • To communicate updates, security alerts, and administrative messages.
            </Text>
            <Text className="ml-4">
                • To enforce our Terms of Service and prevent fraudulent activities.
            </Text>

            <Text className="font-bold mt-4">3. Sharing of Information</Text>
            <Text>
                We do not sell or share your personal information with third parties except as described below:
            </Text>
            <Text className="ml-4">
                • With service providers that assist us in operating the Service (e.g., hosting, payment processing).
            </Text>
            <Text className="ml-4">
                • To comply with legal obligations, such as responding to lawful requests from law enforcement.
            </Text>
            <Text className="ml-4">
                • To protect our rights and the safety of our users.
            </Text>

            <Text className="font-bold mt-4">4. Cookies and Tracking Technologies</Text>
            <Text>
                The Service may use cookies and similar tracking technologies to enhance user experience. These tools help us understand usage patterns and improve our platform. You can manage your cookie preferences through your browser settings.
            </Text>

            <Text className="font-bold mt-4">5. Data Security</Text>
            <Text>
                We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no security system is completely foolproof, and we cannot guarantee absolute security.
            </Text>

            <Text className="font-bold mt-4">6. Your Choices</Text>
            <Text>You have the following rights regarding your personal information:</Text>
            <Text className="ml-4">
                • <Text className="font-bold">Access:</Text> You can request access to the personal information we hold about you.
            </Text>
            <Text className="ml-4">
                • <Text className="font-bold">Correction:</Text> You can request that we update or correct any inaccuracies in your personal information.
            </Text>
            <Text className="ml-4">
                • <Text className="font-bold">Deletion:</Text> You can request the deletion of your personal information, subject to certain legal limitations.
            </Text>

            <Text className="font-bold mt-4">7. Children’s Privacy</Text>
            <Text>
                The Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete that information.
            </Text>

            <Text className="font-bold mt-4">8. Third-Party Links</Text>
            <Text>
                The Service may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before interacting with them.
            </Text>

            <Text className="font-bold mt-4">9. Changes to This Privacy Policy</Text>
            <Text>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on the Service and updating the “Effective Date” at the top of the page.
            </Text>

            <Text className="font-bold mt-4">10. Contact Us</Text>
            <Text>If you have any questions or concerns about this Privacy Policy, please contact us at:</Text>
            <Text className="ml-4">Retriever Marketplace Team</Text>
            <Text className="ml-4">haina2@umbc.edu</Text>
            <Text className="ml-4">jlin2809@umd.edu</Text>
        </ScrollView>
    );
}