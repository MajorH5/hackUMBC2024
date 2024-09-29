export const Account = {
    emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

    minPasswordLength: 8,
    maxPasswordLength: 64,
    passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_+=~])[A-Za-z\d!@#$%^&*()\-_+=~]{8,64}$/,

    minUsernameLength: 3,
    maxUsernameLength: 16,
}