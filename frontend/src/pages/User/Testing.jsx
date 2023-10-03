import { useState } from 'react';
import { Image, FileButton, Button, Group, Text, Space, Stack, MantineProvider } from '@mantine/core';

function Testing() {
    const [file, setFile] = useState(null | File);
    const [cartoonizedSrc, setCartoonizedSrc] = useState(null);
    //const [resetRef] = useState(null);

    const clearFile = () => {
        setFile(null);
        setCartoonizedSrc(null);
    };

    const cartoonizeImage = () => {
        if (file) {
            setCartoonizedSrc("https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
        }
    }

    // const handleImageUpload = (event) => {
    //     if (event && event.target) {
    //         const selectedFile = event.target.files[0];
    //         setFile(URL.createObjectURL(selectedFile));
    //         console.log(file);
    //     }
    // }

    return (
        <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
                    <div>
            <Stack align="center">
                <Group>
                    {file ? (
                        <Image width={400} height={320} src={URL.createObjectURL(file)} alt="Original image" withPlaceholder />
                    ) : (
                        <Image width={400} height={320} src={null} alt="Original image" withPlaceholder />
                    )}
                    {cartoonizedSrc ? (
                        <Image width={400} height={320} src={cartoonizedSrc} alt="Modified image" withPlaceholder />
                    ) : (
                        <Image width={400} height={320} src={null} alt="Modified image" withPlaceholder />
                    )}
                </Group>
                <Space h="xl" />

                <Group position="center">
                    {/* <Image width={400} height={320} src={file} alt="Original image" withPlaceholder /> */}

                    <div>
                        {file ? (
                            <Button onClick={cartoonizeImage}>
                                Cartoonize
                            </Button>
                        ) : (
                            <FileButton onChange={setFile} accept="image/png,image/jpeg">
                                {(props) => <Button {...props} >Upload image</Button>}
                            </FileButton>
                        )}
                    </div>

                    
                   
                    <Button disabled={!file} color="red" onClick={clearFile}>
                        Reset
                    </Button>
                </Group>
            </Stack>

            {file && (
                <Text size="sm" align="center" mt="sm">
                    Picked file: {file.name}
                </Text>
            )}
        </div>
        </MantineProvider>
    );
}

export default Testing;