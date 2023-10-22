import { Title, rem, MantineProvider } from '@mantine/core';
import { useTheme } from "../../GloabalThemeProvider";
import UserNavBar from "../General/UserNavBar";

function UserFAQPage() {
    const { isDarkMode } = useTheme();
    
    const titleStyle = {
        marginTop: rem(-75),
        textAlign: 'center',
    }

    const textStyle = {
        marginBottom: '20px',
    }

    const lineStyle = {
        width: '80%',             // Adjust the width as needed, e.g., '50%' of the container width
        margin: '0 auto',         // Center the horizontal line horizontally
        border: '1px solid #ccc', // Add a border to the line
      };

      const listStyle = {
        listStyle: 'none', // Remove default bullets
      };

      const containerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // 100% of the viewport height
      };

  return (
    <MantineProvider theme={{ colorScheme: isDarkMode ? 'dark' : 'light' }} withGlobalStyles withNormalizeCSS>
    <div>
        <UserNavBar />
        <h2 style={titleStyle}>FAQ Page</h2>
        <hr style={lineStyle}/>

        <ul style={listStyle}>
            <li style={textStyle}>
            <strong>What is [Your Company/Product/Service] and what do you offer?</strong>
            <p>[Your Company/Product/Service] is [a brief description of your business]. We offer [a brief description of your main offerings].</p>
            </li>
            <li style={textStyle}>
            <strong>How do I get started with [Your Product/Service]?</strong>
            <p>To get started with [Your Product/Service], [provide step-by-step instructions or a link to a setup guide].</p>
            </li>
            <li style={textStyle}>
            <strong>What payment methods do you accept?</strong>
            <p>We accept the following payment methods: [List of accepted payment methods].</p>
            </li>
            <li style={textStyle}>
            <strong>How can I contact your customer support team?</strong>
            <p>You can reach our customer support team by [provide contact options, such as email, phone, or a contact form].</p>
            </li>
            <li style={textStyle}>
            <strong>What is your return/refund policy?</strong>
            <p>Our return/refund policy can be found [provide a link to your policy page].</p>
            </li>
            <li style={textStyle}>
            <strong>Do you offer international shipping?</strong>
            <p>Yes, we offer international shipping to [list of countries or regions you serve]. Shipping rates and delivery times may vary.</p>
            </li>
            <li style={textStyle}>
            <strong>How can I track my order?</strong>
            <p>To track your order, please [provide instructions on how to access the order tracking feature or a link to the tracking page].</p>
            </li>
            <li style={textStyle}>
            <strong>What is your privacy policy?</strong>
            <p>Our privacy policy can be found [provide a link to your privacy policy page].</p>
            </li>
            <li style={textStyle}>
            <strong>Are there any discounts or promotions available?</strong>
            <p>We periodically offer discounts and promotions. To stay updated, sign up for our newsletter or visit our [promotions page/link].</p>
            </li>
            <li style={textStyle}>
            <strong>How do I reset my password?</strong>
            <p>To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions sent to your email to create a new password.</p>
            </li>
            <li style={textStyle}>
            <strong>Can I cancel my subscription?</strong>
            <p>Yes, you can cancel your subscription at any time by [provide cancellation instructions or a link to the cancellation page].</p>
            </li>
            <li style={textStyle}>
            <strong>What should I do if I encounter a technical issue with [Your Product/Service]?</strong>
            <p>If you encounter technical issues, please [provide instructions on how to contact technical support].</p>
            </li>
        </ul>

    </ div>
    </MantineProvider>
  );
}

export default UserFAQPage;