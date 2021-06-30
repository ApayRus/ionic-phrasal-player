import { useEffect, useState, useRef, MutableRefObject, RefObject } from 'react'
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem'

const FilesystemTest: React.FC = props => {
	const [isLoaded, setIsLoaded] = useState(false)
	const contentRef = useRef<{ data: string }>({ data: '' })

	useEffect(() => {
		const writeSecretFile = async () => {
			await Filesystem.writeFile({
				path: 'secrets/text.txt',
				data: 'This is a test',
				directory: Directory.Data,
				encoding: Encoding.UTF8
			})
		}
		const readSecretFile = async () => {
			contentRef!.current = await Filesystem.readFile({
				path: 'secrets/text.txt',
				directory: Directory.Data,
				encoding: Encoding.UTF8
			})
			console.log(contentRef!.current)
			setIsLoaded(true)
		}
		writeSecretFile()
		readSecretFile()
	}, [])
	// const {data} : string | undefined = contentRef!.current || {}
	return isLoaded ? (
		<div>{contentRef.current?.data}</div>
	) : (
		<div>loading...</div>
	)
}

export default FilesystemTest
