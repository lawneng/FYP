import AniFaceLogo from './AniFace-logos_black.png';
import backgroundImage from './smiling.png';
import { TextInput } from '@mantine/core';

function UserLandingPage() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      };
      
      const logoStyle = {
        width: '350px', // Adjust the size of your logo
        marginBottom: '20px', // Spacing below the logo
      };
      
      const formContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      };
      
      const inputStyle = {
        width: '300px', // Adjust the width of the input fields
        padding: '10px',
        marginBottom: '10px', // Spacing between inputs
        fontSize: '16px',
      };
      
      const buttonStyle = {
        width: '320px', // Adjust the width of the button
        padding: '10px',
        backgroundColor: '#007bff', // Adjust the button's background color
        color: '#fff', // Adjust the button's text color
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
      };
    return (
        <div style={{containerStyle}} >
          <img src={AniFaceLogo} alt="Your Logo" style={logoStyle} />
          <div style={formContainerStyle}>
            <TextInput style={inputStyle}
            placeholder="Username"
            />
            <TextInput style={inputStyle}
            placeholder="Password"
            />
            <a href="/UserHome">
                <button style={buttonStyle}>Log In</button>
            </a>
          </div>
        </div>
            );
}

export default UserLandingPage;