import { useState, useEffect, useCallback, useRef } from 'react'
import { projects } from '../data/content'
import GlowCard from './GlowCard'
import Icon from './Icon'
import './Projects.css'

function getRelativeOffset(index, activeIndex, total) {
  let offset = index - activeIndex

  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total

  return offset
}

function getSlidePosition(offset) {
  if (offset === 0) return 'active'
  if (offset === -1) return 'prev'
  if (offset === 1) return 'next'
  if (offset < -1) return 'far-prev'
  if (offset > 1) return 'far-next'
  return 'hidden'
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const [preview, setPreview] = useState(null)
  const total = projects.length

  const goToProject = (index, nextDirection = 'next') => {
    setDirection(nextDirection)
    setActiveIndex((index + total) % total)
  }

  const goPrev = () => goToProject(activeIndex - 1, 'prev')
  const goNext = () => goToProject(activeIndex + 1, 'next')

  const closePreview = useCallback(() => setPreview(null), [])

  useEffect(() => {
    if (!preview) return
    const onKey = (e) => {
      if (e.key === 'Escape') closePreview()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [preview, closePreview])

  const handleSlideClick = (event, index, offset) => {
    if (index === activeIndex) {
      const p = projects[index]
      if (p && p.video) {
        event.preventDefault()
        setPreview(p)
      } else if (p && p.href) {
        window.open(p.href, '_blank', 'noreferrer')
      }
      return
    }

    event.preventDefault()
    goToProject(index, offset < 0 ? 'prev' : 'next')
  }

  const handleSlideKeyDown = (event, index, offset) => {
    if (index === activeIndex) return
    if (event.key !== 'Enter' && event.key !== ' ') return

    event.preventDefault()
    goToProject(index, offset < 0 ? 'prev' : 'next')
  }

  const handleCarouselKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goPrev()
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goNext()
    }
  }

  // Touch swipe for mobile
  const swipeRef = useRef({ startX: 0, startY: 0 })

  const handleTouchStart = (e) => {
    swipeRef.current.startX = e.touches[0].clientX
    swipeRef.current.startY = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - swipeRef.current.startX
    const dy = e.changedTouches[0].clientY - swipeRef.current.startY
    // Require 50px minimum horizontal swipe, more horizontal than vertical
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx > 0) goPrev()
      else goNext()
    }
  }

  return (
    <section id="projects" className="section projects" data-motion-section>
      <div className="container">
        <div className="section-display projects__display" aria-hidden="true">
          SELECTED WORK
        </div>
        <header className="projects__head motion-head">
          <div>
            <span className="eyebrow motion-copy">精选项目</span>
            <h2 className="section-title motion-copy">作品即名片</h2>
          </div>
          <p className="section-sub motion-copy">
            从动漫二创到商业广告与剧情短片 —— 这些项目记录了我在创意、AI 视觉与现场统筹上的实践与成果。
          </p>
        </header>

        <div
          className="projects__carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="精选作品轮播"
          tabIndex={0}
          onKeyDown={handleCarouselKeyDown}
        >
          <div className="projects__stage" data-direction={direction}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((p, i) => {
              const offset = getRelativeOffset(i, activeIndex, total)
              const position = getSlidePosition(offset)
              const isActive = position === 'active'
              const isSide = position === 'prev' || position === 'next'
              const isHidden = position === 'far-prev' || position === 'far-next' || position === 'hidden'
              const slideLabel = isActive ? '当前作品' : '切换到作品'
              const CardTag = 'article'

              return (
                <div
                  key={p.id}
                  className="projects__slide"
                  data-pos={position}
                  data-active={isActive ? 'true' : 'false'}
                  role={isSide ? 'button' : undefined}
                  tabIndex={isSide ? 0 : undefined}
                  aria-label={isHidden ? undefined : `${slideLabel}：${p.title}`}
                  aria-hidden={isHidden ? 'true' : undefined}
                  onClick={(event) => handleSlideClick(event, i, offset)}
                  onKeyDown={(event) => handleSlideKeyDown(event, i, offset)}
                >
                  <GlowCard
                    as={CardTag}
                    className={`project motion-card ${isActive && p.href ? 'project--link' : ''}`}
                    style={{ '--delay': `${i * 70}ms` }}
                    glowColor="140, 192, 221"
                    glowRadius={220}
                  >
                    <div className="project__media motion-media motion-parallax" style={{ background: p.accent }}>
                      <img
                        src={p.cover || `/work-${p.id}.jpg`}
                        alt={p.title}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                      <span className="project__metric">{p.metric}</span>
                      {p.href ? <span className="project__platform-badge" data-platform={p.platform || 'bilibili'}>{p.platform || 'Bilibili'}</span> : null}
                      {p.video ? (
                        <span className="project__platform-badge project__platform-badge--play">
                          <span className="project__play-icon" aria-hidden="true">▶</span> 微电影
                        </span>
                      ) : null}
                      <span className="project__index">0{i + 1}</span>
                    </div>

                    <div className="project__body">
                      <div className="project__role">{p.role}</div>
                      <h3 className="project__title">{p.title}</h3>
                      <p className="project__desc">{p.desc}</p>
                      <div className="project__foot">
                        <div className="project__tags">
                          {p.tags.map((t) => (
                            <GlowCard
                              key={t}
                              as="span"
                              className="project__tag"
                              glowColor="140, 192, 221"
                              glowRadius={120}
                            >
                              {t}
                            </GlowCard>
                          ))}
                        </div>
                        <div className="project__meta-group">
                          {p.href ? (
                            <span className="project__view-link">
                              前往观看 <Icon name="arrow" size={14} />
                            </span>
                          ) : null}
                          {p.video ? (
                            <span className="project__view-link project__view-link--play">
                              观看正片 <span aria-hidden="true">▶</span>
                            </span>
                          ) : null}
                          <GlowCard
                            as="span"
                            className="project__period project__period-card"
                            glowColor="140, 192, 221"
                            glowRadius={120}
                          >
                            {p.period}
                          </GlowCard>
                        </div>
                      </div>
                    </div>

                    <span className="project__cta" aria-hidden="true">
                      <Icon name="arrow" size={18} />
                    </span>
                  </GlowCard>
                </div>
              )
            })}
          </div>

          <div className="projects__dots" aria-label="选择作品">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={`projects__dot ${i === activeIndex ? 'is-active' : ''}`}
                aria-label={`切换到作品：${p.title}`}
                aria-current={i === activeIndex ? 'true' : undefined}
                onClick={() => goToProject(i, i < activeIndex ? 'prev' : 'next')}
              />
            ))}
          </div>
        </div>
      </div>

      {preview ? (
        <div
          className="project-preview"
          role="dialog"
          aria-modal="true"
          aria-label={`预览：${preview.title}`}
          onClick={closePreview}
        >
          <button
            type="button"
            className="project-preview__close"
            aria-label="关闭预览"
            onClick={closePreview}
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="project-preview__inner" onClick={(e) => e.stopPropagation()}>
            <video
              className="project-preview__video"
              src={preview.video}
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
            <div className="project-preview__meta">
              <h3 className="project-preview__title">{preview.title}</h3>
              <p className="project-preview__role">{preview.role}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
