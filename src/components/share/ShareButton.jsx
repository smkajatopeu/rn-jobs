import React from 'react'
import { Image, Share, TouchableOpacity } from 'react-native'

import styles from '../common/header/screenheader.style'

const ShareHeaderBtn = ({ iconUrl, dimension, url }) => {
	const handleShare = async () => {
		try {
			const result = await Share.share({
				title: 'Share Job',
				message: `Интересная вакансия с платформы JobsFinder. 
				${url}
				`,
				url: url,
			})
			if (result.action === Share.sharedAction) {
				console.log('Link shared successfully')
			} else if (result.action === Share.dismissedAction) {
				console.log('Link sharing dismissed')
			}
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<TouchableOpacity style={styles.btnContainer} onPress={handleShare}>
			<Image
				source={iconUrl}
				resizeMode='cover'
				style={styles.btnImg(dimension)}
			/>
		</TouchableOpacity>
	)
}

export default ShareHeaderBtn
