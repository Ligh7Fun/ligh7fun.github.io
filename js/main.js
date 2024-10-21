document.addEventListener('DOMContentLoaded', function () {
	const techStack = [
		'HTML',
		'CSS',
		'JavaScript',
		'VueJS',
		'Bootstrap',
		'Tailwind',
		'React',
		'React Native',
	]
	const techStackElement = document.getElementById('tech-stack')
	let currentTechIndex = 0
	let isTyping = true

	function updateTech() {
		const currentTech = techStack[currentTechIndex]
		if (isTyping) {
			if (techStackElement.textContent.length < currentTech.length) {
				techStackElement.textContent = currentTech.slice(
					0,
					techStackElement.textContent.length + 1
				)
				setTimeout(updateTech, 100) // Скорость печати (100 мс)
			} else {
				isTyping = false
				setTimeout(updateTech, 1000) // Пауза перед удалением (1000 мс)
			}
		} else {
			if (techStackElement.textContent.length > 0) {
				techStackElement.textContent = techStackElement.textContent.slice(0, -1)
				setTimeout(updateTech, 50) // Скорость удаления (50 мс)
			} else {
				currentTechIndex = (currentTechIndex + 1) % techStack.length
				isTyping = true
				setTimeout(updateTech, 500) // Пауза перед следующей технологией (500 мс)
			}
		}
	}

	updateTech()
})
