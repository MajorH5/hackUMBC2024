import AnimatedAppLoader from "@/components/misc/AnimatedAppLoader";
import RegisterScreen from "./welcome";

export default function IndexPage() {
    return (
        <AnimatedAppLoader image={require("@/assets/images/splash.png")}>
            <RegisterScreen></RegisterScreen>
        </AnimatedAppLoader>
    );
}