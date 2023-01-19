import React, {useState} from 'react'
import { HeaderInfo } from './headerInfo/HeaderInfo'
import { HeaderMenu } from './headerMenu/HeaderMenu'

export const Header = () => {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<header className='mb-4 pt-2'>
			<HeaderInfo setIsVisible={setIsVisible} />
			<HeaderMenu isVisible={isVisible} />
		</header>
	)
}
