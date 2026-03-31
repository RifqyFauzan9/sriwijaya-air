const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.nav-link')

const options = { threshold: 0.6 }

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute('id')

            navLinks.forEach((link) => {
                link.classList.add("text-gray-400")

                if (link.getAttribute("href") === `#${activeId}`) {
                    link.classList.add("text-[#313161]")
                    link.classList.remove("text-gray-400")
                }
            })
        }
    })
}

const observer = new IntersectionObserver(callback, options)
sections.forEach(section => observer.observe(section))