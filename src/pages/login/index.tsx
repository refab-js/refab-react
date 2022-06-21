import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { PasswordInput, TextInput, Group, Button, Box, createStyles, Anchor, Text } from '@mantine/core';
import { useState } from 'react';
import Navbar from '../../components/navbar';
import Layout from '../../components/layout';

interface LoginProps {

}

const useStyles = createStyles((theme) => ({

}));

const schema = z.object({
    email: z.string().email({ message: 'Your email format is wrong' }),
    password: z.string(),
});

const Login = (props: LoginProps) => {
    const [submitLoading, setSubmitLoading] = useState(false);

    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        schema: zodResolver(schema),
    });

    type FormValues = typeof form.values;

    const handleSubmit = async (values: FormValues) => {
        setSubmitLoading(true);
        try {
            setTimeout(() => {
                console.log(values)
                setSubmitLoading(false);
            }, 2000)
        } catch (error) {
            console.log(error)
            setSubmitLoading(false);
        }
    }

    return (<Layout>
        <Box sx={{ maxWidth: 340 }} mx="auto">
            <Group mt="lg" position={'center'}>
                <Text weight={'bold'} size='xl'>
                    Welcome back
                </Text>
            </Group>
            <Group mb="lg" position={'center'}>
                <Text color="dimmed">
                    Login to get access to your stuff
                </Text>
            </Group>

            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    required
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                />
                <PasswordInput
                    required
                    label="Password"
                    placeholder="Password"
                    mt="sm"
                    {...form.getInputProps('password')}
                />
                <Anchor href='/forget-password'>
                    <Text weight={'500'} size={'md'} pt={'xs'}>
                        Forget your password?
                    </Text>
                </Anchor>

                <Group mt="md">
                    <Button fullWidth={true} type="submit">Submit</Button>
                </Group>
                <Group position="center" mt="md">
                    <Text weight={'500'}>
                        New to Refab?
                    </Text>
                    <Anchor href='/register'>
                        <Text weight={'500'}>
                            Join Now
                        </Text>
                    </Anchor>
                </Group>
            </form>
        </Box>
    </Layout>
    )
}

export default Login