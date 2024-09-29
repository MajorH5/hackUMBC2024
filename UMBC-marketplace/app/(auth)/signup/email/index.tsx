import { TextInput, Text, View, StyleSheet, Image, Alert } from "react-native"
import { UMBCButton } from "@/components/button/UMBCButton";
import { Router, useNavigation } from "expo-router";
import Checkbox from 'expo-checkbox'
import { useEffect, useState } from "react";
import { TextInputProps } from "react-native";
import GlobalTheme from "@/themes/globalTheme";
import { Account } from "@/constants/Account";

const InputField = (
    {
        placeholder,
        autocomplete,
        secureTextEntry,
        onChangeText

    }: {
        placeholder: string,
        autocomplete: TextInputProps['autoComplete'],
        secureTextEntry?: boolean,
        onChangeText?: TextInputProps['onChangeText']
    }) => (
    <TextInput
        className='text-lg pb-2'
        placeholderTextColor='#999999'
        placeholder={placeholder}
        style={styles.textInput}
        autoCorrect={false}
        autoCapitalize="none"
        autoComplete={autocomplete}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        returnKeyType="next"
    ></TextInput>
);

export default function EmailScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false, title: 'hello' });
    }, [navigation]);

    const pawRootTop = 10;
    const pawRootLeft = 40;

    const pawPositions = [
        { top: -20, left: 120 },
        { top: 40, left: 40 },
        { top: 100, left: -40 },
        { top: 100, left: 120 },
        { top: 160, left: 40 },
        { top: 220, left: -40 },
    ];

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [acceptedTOC, setAcceptedTOC] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const validateFields = () => {
        // Basic validation
        if (!username || !email || !password || !confirmPassword) {
            setErrorMessage("All fields are required.");
            return false;
        }
        if (!Account.emailRegex.test(email)) {
            setErrorMessage("Please enter a valid email address.");
            return false
        }
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return false;
        }
        if (password.length < Account.minPasswordLength) {
            setErrorMessage("Password is too short.");
            return false;
        }
        if (password.length > Account.maxPasswordLength) {
            setErrorMessage("Password is too long.");
            return false;
        }
        if (!Account.passwordRegex.test(password)) {
            setErrorMessage("Password must include letters, numbers, and at least 1 special character(s): !@#$%^&*()-_+=~");
            return false;
        }
        if (!acceptedTOC) {
            setErrorMessage("You must accept the Terms of Service.");
            return false;
        }
        setErrorMessage("");
        return true;
    };

    const onCreateAccoount = () => {
        if (isLoggingIn) {
            return;
        }
        
        if (validateFields()) {
            setIsLoggingIn(true);

            fetch('http://ec2-52-202-20-95.compute-1.amazonaws.com/api/v1/users/2')
                .then((result) => result.json())
                .then((json) => {
                    setErrorMessage(JSON.stringify(json));
                })
                .catch((error) => setErrorMessage('An unknown error has occured while attempting to register.' + error.toString()))
                .finally(() => setIsLoggingIn(false));
        }
    }

    return (
        <View className='w-full h-full pl-10 pr-10'>
            <View className='w-full'>
                <Text className='text-xl mt-5'>Username</Text>
                <InputField placeholder="truegrit002105" autocomplete="username" onChangeText={setUsername} />

                <Text className='text-xl mt-5'>Email Address</Text>
                <InputField placeholder="meyerhoff@scholars.umbc.edu" autocomplete="email" onChangeText={setEmail} />

                <Text className='text-xl mt-5'>Password</Text>
                <InputField secureTextEntry={true} placeholder="**********" autocomplete="password" onChangeText={setPassword} />
                <View style={styles.tooltip}>
                    <Text>Password must meet the following criteria:</Text>
                    <Text className={password.length >= Account.minPasswordLength ? 'text-emerald-600' : 'text-orange-600'}>- At least {Account.minPasswordLength} characters long</Text>
                    <Text className={password.length < Account.maxPasswordLength && password.length > 0 ? 'text-emerald-600' : 'text-orange-600'}>- No more than {Account.maxPasswordLength} characters</Text>
                    <Text className={Account.passwordRegex.test(password) ? 'text-emerald-600' : 'text-orange-600'}>- Must include letters, numbers, and at least 1 special character(s): !@#$%^&*()-_+=~</Text>
                </View>

                <Text className='text-xl mt-5'>Confirm Password</Text>
                <InputField secureTextEntry={true} placeholder="**********" autocomplete="password" onChangeText={setConfirmPassword} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Checkbox color={acceptedTOC ? GlobalTheme.colors.primary : undefined} value={acceptedTOC} onValueChange={() => setAcceptedTOC(!acceptedTOC)} className='m-4' />
                    <Text style={{ maxWidth: 280 }} className="mt-3">
                        <Text>By selecting "Create Account" you agree to our </Text>
                        <Text className='font-bold'>Terms of Service</Text>
                        <Text> and </Text>
                        <Text className='font-bold'>Privacy Policy</Text>
                    </Text>
                </View>


                <Text className={`mt-2 text-orange-600`}>{errorMessage}</Text>
                <UMBCButton buttonStyle={{ marginTop: 30 }} onPress={onCreateAccoount}>Create Account</UMBCButton>
            </View>
            <View style={{ maxHeight: 200 }} className='relative h-full w-full'>
                {pawPositions.map((position, index) =>
                    <Image
                        key={index}
                        style={{ maxWidth: 128, maxHeight: 128, left: pawRootLeft + position.left, top: pawRootTop + position.top, zIndex: -1 }}
                        className='absolute top-full rotate-45'
                        source={require("@/assets/images/paw.png")}>
                    </Image>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderBottomColor: '#aaaaaa',
        borderBottomWidth: 1,
        maxWidth: 350,
        minHeight: 45
    },
    tooltip: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginTop: 5,
        borderRadius: 5,
        borderColor: '#d3d3d3',
        borderWidth: 1,
    },
});