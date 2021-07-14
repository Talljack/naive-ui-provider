import mockJson from './mock.json'
export const request = () => {
	return new Promise((resolve, reject) => {
		resolve(mockJson)
	})
}

export const getMockInfo = async () => {
	const result = await request() as {success: boolean, result: {}}
	if (result.success) {
		window.$message.success('Successfully request')
	} else {
		window.$message.error('Failed request')
	}
}
