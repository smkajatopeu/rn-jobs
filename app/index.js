import { Stack, useRouter } from 'expo-router'
import { useState } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'

import { Nearbyjobs, ScreenHeaderBtn, Welcome } from '../src/components'
import { COLORS, SIZES, icons } from '../src/constants'

import styles from '../src/components/home/welcome/welcome.style'

const Home = () => {
	const router = useRouter()
	const [searchTerm, setSearchTerm] = useState('')
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn iconUrl={icons.jf} dimension='60%' />
					),
					headerRight: () => <Text style={styles.userName}>JobsFinder</Text>,
					headerTitle: '',
				}}
			/>

			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						flex: 1,
						padding: SIZES.medium,
					}}
				>
					<Welcome
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						handleClick={() => {
							if (searchTerm) {
								router.push(`/search/${searchTerm}`)
							}
						}}
					/>
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home
