import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { StatusBar } from 'expo-status-bar'
import { login } from '@/lib/appwrite'

const SignIn = () => {
    const handleLogin = async () => {
        const result = await login()
        if (result) {
            console.log('Login Success')
        } else {
            Alert.alert('Error', 'Login Failed')
        }
    }
    return (
        <SafeAreaView className=' h-full bg-background' >
            <ScrollView contentContainerStyle={{ height: '100%' }} >
                <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain' />
                <View className='px-10'>
                    <Text className='text-base text-center uppercase font-rubik text-black-200'>
                        welcome to refe
                    </Text>
                    <Text className='text-2xl text-center  mt-2 font-rubik-bold text-black-300'>
                        Let's Get you Closer to {"\n"}
                        <Text className='text-primary-300'>Your Ideal Home</Text>
                    </Text>
                    <Text className='text-lg font-rubik text-black-200 text-center mt-12'>
                        Login in Refe with Google
                    </Text>
                    <TouchableOpacity
                        onPress={handleLogin}
                        className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4"
                    >
                        <View className="flex flex-row items-center justify-center">
                            <Image
                                source={icons.google}
                                className="w-5 h-5"
                                resizeMode="contain"
                            />
                            <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                                Continue with Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn