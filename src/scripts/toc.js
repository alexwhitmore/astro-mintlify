// TODO: Improve this.. too many funky edge cases

document.addEventListener('DOMContentLoaded', () => {
  const tocLinks = document.querySelectorAll('.toc-link')
  const headings = document.querySelectorAll('h2[id], h3[id], h4[id]')
  let activeLink = null

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        const correspondingLink = document.querySelector(
          `.toc-link[data-id="${id}"]`
        )

        if (entry.isIntersecting) {
          setActiveLink(correspondingLink)
        }
      })
    },
    {
      rootMargin: '-100px 0px -66% 0px',
      threshold: 0.1,
    }
  )

  function setActiveLink(link) {
    if (activeLink) activeLink.classList.remove('active')
    if (link) {
      link.classList.add('active')
      activeLink = link
    }
  }

  headings.forEach((heading) => observer.observe(heading))
  setActiveLink(tocLinks[0])

  let isScrolling = false
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 150
        let currentSection = null

        headings.forEach((heading) => {
          if (heading.offsetTop <= scrollPosition) {
            currentSection = heading
          }
        })

        if (currentSection) {
          const id = currentSection.getAttribute('id')
          const correspondingLink = document.querySelector(
            `.toc-link[data-id="${id}"]`
          )
          setActiveLink(correspondingLink)
        }

        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 50
        ) {
          setActiveLink(tocLinks[tocLinks.length - 1])
        }

        isScrolling = false
      })
    }
    isScrolling = true
  })

  tocLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('data-id')
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'instant' })
        setActiveLink(link)
      }
    })
  })
})
