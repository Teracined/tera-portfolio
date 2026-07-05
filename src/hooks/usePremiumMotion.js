import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DESKTOP_BREAKPOINT = 900

export function usePremiumMotion() {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT

    if (reduceMotion || coarsePointer || !isDesktop) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'))
      return undefined
    }

    const ctx = gsap.context(() => {
      const hero = document.querySelector('.hero')

      if (hero) {
        gsap.set('.hero__badge, .hero__lead, .hero__actions', {
          opacity: 0,
          y: 48,
        })
        gsap.set('.hero__fact, .hero__explore', {
          opacity: 0,
          y: 72,
        })
        gsap.set('.hero__title-line', {
          opacity: 0,
          yPercent: 118,
          scaleX: 0.82,
          scaleY: 1.16,
          transformOrigin: 'center bottom',
        })
        gsap.set('.hero__video', {
          scale: 1.12,
          filter: 'blur(10px)',
        })
        gsap.set('.hero__veil', {
          opacity: 1.08,
        })
        gsap.set('.hero__fact-label, .hero__fact-value, .hero__fact-sub', {
          opacity: 0,
          y: 24,
        })

        const heroTl = gsap.timeline({
          defaults: { ease: 'power4.out' },
          delay: 0.15,
        })

        heroTl
          .to('.hero__video', {
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.9,
          })
          .to(
            '.hero__veil',
            {
              opacity: 1,
              duration: 1.5,
            },
            0
          )
          .to(
            '.hero__badge',
            {
              opacity: 1,
              y: 0,
              duration: 1.05,
            },
            0.18
          )
          .to(
            '.hero__title-line',
            {
              opacity: 1,
              yPercent: 0,
              scaleX: 1,
              scaleY: 1,
              duration: 1.45,
              stagger: 0.08,
            },
            0.28
          )
          .to(
            '.hero__lead',
            {
              opacity: 1,
              y: 0,
              duration: 1,
            },
            0.68
          )
          .to(
            '.hero__actions',
            {
              opacity: 1,
              y: 0,
              duration: 1,
            },
            0.92
          )
          .to(
            '.hero__fact',
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.08,
            },
            1.05
          )
          .to(
            '.hero__fact-label, .hero__fact-value, .hero__fact-sub, .hero__explore',
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.03,
            },
            1.18
          )
      }

      gsap.utils.toArray('[data-motion-section]').forEach((section) => {
        if (section.id === 'hero') return

        const isProjects = section.id === 'projects'
        const display = section.querySelector('.section-display')
        const head = section.querySelector('.motion-head')
        const headItems = head ? Array.from(head.children) : []
        const cards = gsap.utils.toArray(section.querySelectorAll('.motion-card'))
        const copies = gsap.utils.toArray(section.querySelectorAll('.motion-copy'))
        const media = gsap.utils.toArray(section.querySelectorAll('.motion-media'))

        if (display) {
          gsap.set(display, {
            opacity: 0,
            yPercent: isProjects ? 44 : 34,
            scale: isProjects ? 0.82 : 0.88,
            filter: 'blur(12px)',
          })
        }

        if (headItems.length) {
          gsap.set(headItems, {
            opacity: 0,
            y: 72,
          })
        }

        if (copies.length) {
          gsap.set(copies, {
            opacity: 0,
            y: 56,
          })
        }

        if (cards.length) {
          gsap.set(cards, {
            opacity: 0,
            y: isProjects ? 110 : 86,
          })
        }

        if (media.length) {
          gsap.set(media, {
            clipPath: isProjects
              ? 'inset(0 0 100% 0 round 32px)'
              : 'inset(0 0 100% 0 round 28px)',
          })
          media.forEach((block, index) => {
            const img = block.querySelector('img')
            if (img) {
              gsap.set(img, {
                scale: isProjects && index === 0 ? 1.22 : 1.16,
                yPercent: isProjects ? -4 : 0,
              })
            }
          })
        }

        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            once: true,
          },
        })

        if (display) {
          tl.to(
            display,
            {
              opacity: isProjects ? 0.16 : 0.12,
              yPercent: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: isProjects ? 1.5 : 1.25,
            },
            0
          )
        }

        if (headItems.length) {
          tl.to(
            headItems,
            {
              opacity: 1,
              y: 0,
              duration: isProjects ? 1.2 : 1.05,
              stagger: 0.08,
            },
            isProjects ? 0.14 : 0.06
          )
        }

        if (copies.length) {
          tl.to(
            copies,
            {
              opacity: 1,
              y: 0,
              duration: 0.95,
              stagger: 0.08,
            },
            isProjects ? 0.28 : 0.18
          )
        }

        if (media.length) {
          tl.to(
            media,
            {
              clipPath: 'inset(0 0 0% 0 round 28px)',
              duration: isProjects ? 1.35 : 1.2,
              stagger: isProjects ? 0.16 : 0.12,
            },
            isProjects ? 0.3 : 0.22
          )
        }

        if (cards.length) {
          tl.to(
            cards,
            {
              opacity: 1,
              y: 0,
              duration: isProjects ? 1.18 : 1.05,
              stagger: isProjects ? 0.16 : 0.12,
            },
            isProjects ? 0.34 : 0.28
          )
        }

        gsap.utils.toArray(section.querySelectorAll('.motion-parallax img')).forEach((img) => {
          const container = img.closest('.motion-parallax') || img
          gsap.fromTo(
            img,
            {
              yPercent: -8,
              scale: 1.14,
            },
            {
              yPercent: 8,
              scale: 1.04,
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.8,
              },
            }
          )
        })
      })
    })

    return () => ctx.revert()
  }, [])
}
