:root {
  --ink: #132238;
  --muted: rgba(19, 34, 56, 0.68);
  --paper: #fffaf1;
  --white: #ffffff;
  --blue: #367cff;
  --purple: #7d5cff;
  --mint: #42d9b5;
  --yellow: #ffd45f;
  --coral: #ff7c65;
  --sky: #dff2ff;
  --lavender: #eee8ff;
  --green-soft: #e7fbef;
  --line: rgba(19, 34, 56, 0.1);
  --radius: 8px;
  --shadow: 0 24px 70px rgba(19, 34, 56, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--ink);
  background:
    radial-gradient(circle at 8% 10%, rgba(255, 212, 95, 0.34), transparent 22rem),
    radial-gradient(circle at 88% 6%, rgba(125, 92, 255, 0.16), transparent 24rem),
    radial-gradient(circle at 78% 78%, rgba(66, 217, 181, 0.22), transparent 28rem),
    var(--paper);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
span,
a,
strong,
li {
  overflow-wrap: break-word;
}

h1,
h2,
h3,
p {
  margin: 0;
}

.site-header {
  position: fixed;
  z-index: 80;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 76px;
  padding: 12px clamp(16px, 4vw, 62px);
  border-bottom: 1px solid rgba(19, 34, 56, 0.08);
  background: rgba(255, 250, 241, 0.82);
  backdrop-filter: blur(20px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: 245px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
  color: var(--white);
  border-radius: 16px;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  font-weight: 950;
  box-shadow: 0 16px 34px rgba(54, 124, 255, 0.22);
}

.brand strong,
.brand small {
  display: block;
  line-height: 1;
}

.brand strong {
  font-size: 1rem;
}

.brand small {
  margin-top: 5px;
  color: var(--muted);
  font-size: 0.68rem;
  text-transform: uppercase;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: clamp(11px, 1.75vw, 22px);
  color: rgba(19, 34, 56, 0.74);
  font-size: 0.88rem;
  font-weight: 850;
}

.desktop-nav a {
  padding: 10px 0;
  transition: color 180ms ease, transform 180ms ease;
}

.desktop-nav a:hover {
  color: var(--blue);
  transform: translateY(-2px);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-cta,
.primary-button,
.secondary-button,
.vertical-card a {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border: 0;
  border-radius: var(--radius);
  font-weight: 950;
  line-height: 1.1;
  text-align: center;
  cursor: pointer;
  isolation: isolate;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease;
}

.header-cta,
.primary-button,
.vertical-card a {
  color: var(--white);
  background: linear-gradient(135deg, var(--blue), var(--purple));
  box-shadow: 0 16px 34px rgba(54, 124, 255, 0.22);
}

.secondary-button {
  color: var(--ink);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.82);
}

.header-cta:hover,
.primary-button:hover,
.secondary-button:hover,
.vertical-card a:hover {
  transform: translateY(-3px);
  box-shadow: 0 24px 48px rgba(54, 124, 255, 0.2);
}

.header-cta:active,
.primary-button:active,
.secondary-button:active,
.vertical-card a:active,
.date-grid button:active,
.slot-grid button:active,
.finder-tabs button:active {
  transform: translateY(0) scale(0.98);
}

.tap-ripple {
  position: absolute;
  width: 16px;
  height: 16px;
  pointer-events: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.65);
  transform: translate(-50%, -50%) scale(1);
  animation: tapRipple 520ms ease-out forwards;
}

@keyframes tapRipple {
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(18);
  }
}

.menu-button {
  display: none;
  width: 46px;
  height: 46px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--white);
}

.menu-button span {
  display: block;
  width: 20px;
  height: 2px;
  margin: 5px auto;
  background: var(--ink);
}

.mobile-menu {
  position: fixed;
  z-index: 78;
  top: 76px;
  left: 0;
  right: 0;
  display: grid;
  gap: 8px;
  padding: 16px;
  border-bottom: 1px solid var(--line);
  background: rgba(255, 250, 241, 0.96);
  box-shadow: var(--shadow);
}

.mobile-menu[hidden] {
  display: none;
}

.mobile-menu a {
  padding: 13px 14px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--ink);
  background: var(--white);
  font-weight: 900;
}

.hero,
.section,
.site-footer {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(340px, 0.86fr);
  gap: clamp(28px, 5vw, 70px);
  align-items: center;
  min-height: 100vh;
  padding: 126px 0 66px;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--blue);
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

h1 {
  max-width: 940px;
  font-size: clamp(3.1rem, 7.4vw, 7rem);
  line-height: 0.93;
  letter-spacing: 0;
}

.no-break {
  white-space: nowrap;
}

h2 {
  color: inherit;
  font-size: clamp(2rem, 4.8vw, 4.45rem);
  line-height: 0.99;
}

h3 {
  font-size: clamp(1.18rem, 1.9vw, 1.62rem);
  line-height: 1.14;
}

.hero-lead {
  max-width: 740px;
  margin-top: 24px;
  color: var(--muted);
  font-size: clamp(1.05rem, 1.7vw, 1.28rem);
  line-height: 1.72;
}

.hero-actions,
.trust-strip,
.program-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero-actions {
  margin-top: 28px;
}

.trust-strip {
  margin-top: 24px;
}

.trust-strip span,
.program-meta span,
.parent-points span,
.business-grid span,
.booking-note span,
.internship-list span {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 8px 11px;
  color: var(--ink);
  border: 1px solid rgba(19, 34, 56, 0.09);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  font-size: 0.84rem;
  font-weight: 900;
}

.hero-visual {
  position: relative;
  min-height: 540px;
}

.hero-visual > img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  border: 1px solid rgba(19, 34, 56, 0.1);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  animation: floatVisual 7s ease-in-out infinite;
}

@keyframes floatVisual {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.orbit-card,
.code-panel {
  position: absolute;
  border: 1px solid rgba(19, 34, 56, 0.1);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow);
}

.orbit-card {
  display: grid;
  gap: 6px;
  max-width: 210px;
  padding: 14px;
  animation: softBob 5s ease-in-out infinite;
}

.orbit-card strong {
  color: var(--blue);
}

.orbit-card span {
  color: var(--muted);
  font-size: 0.86rem;
  font-weight: 800;
}

.orbit-card-one {
  top: 24px;
  left: -24px;
}

.orbit-card-two {
  right: -16px;
  top: 132px;
  animation-delay: 700ms;
}

.orbit-card-three {
  left: 24px;
  bottom: 20px;
  animation-delay: 1200ms;
}

@keyframes softBob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.code-panel {
  right: -16px;
  bottom: 42px;
  width: min(360px, 86%);
  padding: 18px;
  background: rgba(19, 34, 56, 0.94);
}

.terminal-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background: var(--coral);
}

.terminal-dot:nth-child(2) {
  background: var(--yellow);
}

.terminal-dot:nth-child(3) {
  background: var(--mint);
}

pre {
  margin: 16px 0 0;
  white-space: pre-wrap;
}

code {
  color: var(--mint);
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 0.9rem;
}

.section {
  padding: clamp(64px, 9vw, 112px) 0;
}

.section-heading {
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(260px, 0.52fr);
  gap: clamp(22px, 5vw, 70px);
  align-items: end;
  margin-bottom: clamp(28px, 5vw, 56px);
}

.section-heading p:not(.eyebrow),
.finder-copy p,
.parent-panel p,
.booking-copy p:not(.eyebrow),
.flagship-copy p {
  color: var(--muted);
  line-height: 1.7;
}

.audience-switch {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  padding-top: 0;
}

.audience-switch a,
.solution-finder,
.vertical-card,
.student-path-grid article,
.parent-panel,
.workshop-grid article,
.proof-section article,
.session-roadmap article,
.booking-planner {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 20px 60px rgba(19, 34, 56, 0.08);
}

.audience-switch a {
  display: grid;
  gap: 6px;
  padding: 22px;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.audience-switch a:hover {
  transform: translateY(-7px);
  box-shadow: var(--shadow);
}

.audience-switch strong {
  color: var(--blue);
  font-size: 1.1rem;
}

.audience-switch span {
  color: var(--muted);
}

.finder-section,
.flagship-section,
.booking-section {
  display: grid;
  grid-template-columns: minmax(0, 0.68fr) minmax(340px, 0.95fr);
  gap: clamp(24px, 5vw, 64px);
  align-items: start;
}

.finder-copy,
.booking-copy {
  position: sticky;
  top: 100px;
}

.solution-finder {
  display: grid;
  gap: 18px;
  padding: clamp(20px, 3vw, 32px);
  background:
    radial-gradient(circle at 90% 10%, rgba(125, 92, 255, 0.14), transparent 30%),
    rgba(255, 255, 255, 0.86);
}

.finder-tabs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}

.finder-tabs button,
.date-grid button,
.slot-grid button {
  position: relative;
  overflow: hidden;
  min-height: 48px;
  padding: 10px;
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--white);
  font-weight: 900;
  cursor: pointer;
  transition: border-color 160ms ease, background 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.finder-tabs button:hover,
.finder-tabs button.is-active,
.date-grid button:hover,
.slot-grid button:hover,
.date-grid button.is-selected,
.slot-grid button.is-selected {
  color: var(--white);
  border-color: transparent;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  box-shadow: 0 18px 34px rgba(54, 124, 255, 0.18);
  transform: translateY(-2px);
}

.finder-fields,
.booking-fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.finder-fields label,
.booking-fields label {
  display: grid;
  gap: 8px;
  color: var(--ink);
  font-weight: 850;
}

.finder-fields input,
.finder-fields select,
.booking-fields input,
.booking-fields select {
  min-height: 48px;
  width: 100%;
  padding: 0 13px;
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--white);
}

.finder-result {
  padding: 20px;
  border-radius: var(--radius);
  background: linear-gradient(135deg, var(--sky), var(--green-soft));
}

.finder-result[hidden] {
  display: none;
}

.finder-result strong,
.finder-result span,
.finder-result p {
  display: block;
}

.finder-result strong {
  color: var(--blue);
  font-size: 1.22rem;
}

.finder-result span {
  margin-top: 8px;
  color: var(--ink);
  font-weight: 950;
}

.finder-result p {
  margin-top: 8px;
  color: var(--muted);
}

.verticals-section,
.business-section,
.workshops-section {
  width: 100%;
  max-width: none;
  padding-left: max(16px, calc((100% - 1180px) / 2));
  padding-right: max(16px, calc((100% - 1180px) / 2));
}

.verticals-section {
  background:
    radial-gradient(circle at 12% 16%, rgba(66, 217, 181, 0.24), transparent 30%),
    radial-gradient(circle at 88% 20%, rgba(255, 212, 95, 0.32), transparent 28%),
    #f9fbff;
}

.vertical-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.vertical-card {
  display: grid;
  gap: 14px;
  align-content: start;
  min-height: 100%;
  padding: clamp(20px, 2.6vw, 30px);
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}

.vertical-card:hover,
.student-path-grid article:hover,
.workshop-grid article:hover,
.proof-section article:hover,
.session-roadmap article:hover {
  transform: translateY(-7px);
  border-color: rgba(54, 124, 255, 0.22);
  box-shadow: var(--shadow);
}

.vertical-card span {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  color: var(--white);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--coral), var(--purple));
  font-weight: 950;
}

.vertical-card p,
.student-path-grid p,
.workshop-grid p,
.session-roadmap p {
  color: var(--muted);
}

.vertical-card a {
  justify-self: start;
  margin-top: auto;
}

.student-path-grid,
.workshop-grid,
.proof-section,
.faq-preview-grid,
.faq-support-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.student-path-grid article,
.workshop-grid article,
.proof-section article,
.faq-preview-grid article,
.faq-support-grid article {
  display: grid;
  gap: 12px;
  padding: 22px;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.student-path-grid strong,
.proof-section strong,
.faq-preview-grid strong,
.faq-support-grid strong {
  color: var(--blue);
}

.parents-section {
  width: 100%;
  max-width: none;
  padding-left: max(16px, calc((100% - 1180px) / 2));
  padding-right: max(16px, calc((100% - 1180px) / 2));
  background: linear-gradient(135deg, var(--lavender), #fff8e8 58%, var(--green-soft));
}

.parent-panel {
  display: grid;
  grid-template-columns: minmax(0, 0.74fr) minmax(280px, 0.62fr);
  gap: clamp(24px, 5vw, 60px);
  align-items: center;
  padding: clamp(24px, 4vw, 48px);
  background: rgba(255, 255, 255, 0.72);
}

.parent-points,
.business-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.business-section {
  background: var(--white);
}

.business-grid span {
  background: #f4f7ff;
}

.flagship-section {
  align-items: center;
}

.flagship-copy p {
  margin-top: 18px;
}

.program-meta {
  margin-top: 22px;
}

.session-roadmap {
  display: grid;
  gap: 12px;
}

.session-roadmap article {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 8px 14px;
  padding: 18px;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.session-roadmap article span {
  grid-row: span 2;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  color: var(--white);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--mint));
  font-weight: 950;
}

.workshops-section {
  background:
    radial-gradient(circle at 80% 12%, rgba(125, 92, 255, 0.14), transparent 28%),
    #f8fbff;
}

.workshop-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.proof-section {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding-top: 0;
}

.faq-preview-section {
  display: grid;
  grid-template-columns: minmax(0, 0.64fr) minmax(360px, 0.95fr);
  gap: clamp(24px, 5vw, 64px);
  align-items: center;
  padding: clamp(28px, 5vw, 54px);
  border-radius: 28px;
  background:
    radial-gradient(circle at 12% 16%, rgba(255, 212, 95, 0.28), transparent 28%),
    radial-gradient(circle at 90% 14%, rgba(66, 217, 181, 0.24), transparent 28%),
    linear-gradient(135deg, #ffffff, #f4fbff);
  box-shadow: 0 24px 80px rgba(19, 34, 56, 0.08);
}

.faq-preview-copy p:not(.eyebrow),
.faq-promise p:not(.eyebrow),
.faq-list-section .section-heading p,
.faq-cta-section p {
  color: var(--muted);
  line-height: 1.7;
}

.faq-preview-copy .primary-button {
  margin-top: 24px;
}

.faq-preview-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.faq-preview-grid article,
.faq-support-grid article {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 18px 56px rgba(19, 34, 56, 0.08);
}

.faq-preview-grid article:nth-child(1),
.faq-support-grid article:nth-child(1) {
  background: linear-gradient(145deg, #ffffff, #eaf1ff);
}

.faq-preview-grid article:nth-child(2),
.faq-support-grid article:nth-child(2) {
  background: linear-gradient(145deg, #ffffff, #fff2d4);
}

.faq-preview-grid article:nth-child(3),
.faq-support-grid article:nth-child(3) {
  background: linear-gradient(145deg, #ffffff, #e7fbef);
}

.faq-preview-grid article:nth-child(4),
.faq-support-grid article:nth-child(4) {
  background: linear-gradient(145deg, #ffffff, #f0ebff);
}

.faq-preview-grid article:hover,
.faq-support-grid article:hover {
  transform: translateY(-7px);
  box-shadow: var(--shadow);
}

.faq-preview-grid span {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  color: var(--white);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  font-size: 0.78rem;
  font-weight: 950;
}

.faq-preview-grid p,
.faq-support-grid span {
  color: var(--muted);
}

.booking-section {
  border-top: 1px solid rgba(19, 34, 56, 0.08);
}

.booking-copy p:not(.eyebrow) {
  margin-top: 18px;
}

.booking-note {
  display: grid;
  gap: 8px;
  margin-top: 24px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.78);
}

.booking-note strong {
  color: var(--blue);
}

.booking-planner {
  display: grid;
  gap: 18px;
  padding: clamp(20px, 3vw, 32px);
  background:
    radial-gradient(circle at 92% 8%, rgba(54, 124, 255, 0.11), transparent 26%),
    rgba(255, 255, 255, 0.86);
}

.booking-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: start;
}

.booking-step > span {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  color: var(--white);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  font-size: 0.82rem;
  font-weight: 950;
}

.booking-step p {
  color: var(--muted);
  font-size: 0.92rem;
}

.date-grid,
.slot-grid {
  display: grid;
  gap: 10px;
}

.date-grid {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.slot-grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.date-grid button {
  min-height: 74px;
}

.slot-grid button {
  min-height: 52px;
}

.date-grid strong,
.date-grid span {
  display: block;
  line-height: 1.1;
}

.date-grid strong {
  font-size: 1.35rem;
}

.date-grid span {
  margin-top: 6px;
  font-size: 0.76rem;
  font-weight: 900;
  text-transform: uppercase;
}

.booking-error {
  padding: 12px 14px;
  color: #7c2418;
  border: 1px solid rgba(255, 124, 101, 0.34);
  border-radius: var(--radius);
  background: rgba(255, 124, 101, 0.12);
}

.booking-error[hidden] {
  display: none;
}

.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 30px 0 42px;
  border-top: 1px solid var(--line);
  color: var(--muted);
}

.site-footer strong,
.site-footer span {
  display: block;
}

.site-footer strong {
  color: var(--ink);
  font-size: 1.1rem;
}

.site-footer a {
  color: var(--blue);
  font-weight: 950;
}

.page-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(320px, 0.52fr);
  gap: clamp(24px, 5vw, 58px);
  align-items: center;
  width: min(1220px, calc(100% - 32px));
  margin: 104px auto 0;
  padding: clamp(48px, 7vw, 86px) clamp(22px, 5vw, 60px);
  overflow: hidden;
  border: 1px solid rgba(19, 34, 56, 0.08);
  border-radius: 28px;
  background:
    radial-gradient(circle at 8% 12%, rgba(255, 212, 95, 0.38), transparent 24%),
    radial-gradient(circle at 88% 16%, rgba(125, 92, 255, 0.16), transparent 26%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(242, 248, 255, 0.8));
  box-shadow: 0 34px 110px rgba(19, 34, 56, 0.11);
}

.page-hero > div,
.page-hero-visual {
  position: relative;
  z-index: 1;
}

.student-page-hero {
  background:
    radial-gradient(circle at 10% 15%, rgba(54, 124, 255, 0.22), transparent 26%),
    radial-gradient(circle at 86% 18%, rgba(255, 212, 95, 0.34), transparent 26%),
    linear-gradient(135deg, #ffffff, #edf5ff);
}

.parent-page-hero {
  background:
    radial-gradient(circle at 12% 15%, rgba(255, 124, 101, 0.18), transparent 26%),
    radial-gradient(circle at 86% 18%, rgba(255, 212, 95, 0.34), transparent 26%),
    linear-gradient(135deg, #ffffff, #fff6df);
}

.business-page-hero {
  background:
    radial-gradient(circle at 12% 15%, rgba(66, 217, 181, 0.24), transparent 26%),
    radial-gradient(circle at 86% 18%, rgba(54, 124, 255, 0.16), transparent 26%),
    linear-gradient(135deg, #ffffff, #ecfff6);
}

.institution-page-hero {
  background:
    radial-gradient(circle at 12% 15%, rgba(125, 92, 255, 0.2), transparent 26%),
    radial-gradient(circle at 86% 18%, rgba(66, 217, 181, 0.2), transparent 26%),
    linear-gradient(135deg, #ffffff, #f0ebff);
}

.faq-page-hero {
  grid-template-columns: 1fr;
  background:
    radial-gradient(circle at 12% 15%, rgba(255, 212, 95, 0.4), transparent 26%),
    radial-gradient(circle at 86% 18%, rgba(54, 124, 255, 0.18), transparent 26%),
    radial-gradient(circle at 58% 80%, rgba(66, 217, 181, 0.22), transparent 24%),
    linear-gradient(135deg, #ffffff, #f8fbff);
}

.page-hero h1 {
  max-width: 1050px;
  font-size: clamp(2.8rem, 6.5vw, 6.2rem);
}

.page-hero .hero-lead {
  max-width: 780px;
}

.page-hero-visual {
  margin: 0;
  min-width: 0;
}

.page-hero-visual img {
  width: 100%;
  aspect-ratio: 1.05;
  object-fit: cover;
  border: 1px solid rgba(19, 34, 56, 0.1);
  border-radius: 24px;
  box-shadow: 0 24px 80px rgba(19, 34, 56, 0.16);
}

.page-hero-visual figcaption {
  display: grid;
  gap: 6px;
  width: min(92%, 340px);
  margin: -58px auto 0;
  padding: 16px;
  position: relative;
  z-index: 2;
  border: 1px solid rgba(19, 34, 56, 0.1);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 20px 56px rgba(19, 34, 56, 0.12);
}

.page-hero-visual + * {
  min-width: 0;
}

.page-hero-visual figcaption strong {
  color: var(--blue);
  line-height: 1.15;
}

.page-hero-visual figcaption span {
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 800;
  line-height: 1.45;
}

.guided-section {
  display: grid;
  grid-template-columns: minmax(0, 0.66fr) minmax(340px, 0.95fr);
  gap: clamp(24px, 5vw, 64px);
  align-items: start;
}

.guided-copy {
  position: sticky;
  top: 100px;
}

.guided-copy p:not(.eyebrow) {
  margin-top: 18px;
  color: var(--muted);
  line-height: 1.7;
}

.guided-form {
  display: grid;
  gap: 14px;
  padding: clamp(20px, 3vw, 32px);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background:
    radial-gradient(circle at 92% 8%, rgba(54, 124, 255, 0.1), transparent 26%),
    rgba(255, 255, 255, 0.88);
  box-shadow: 0 20px 60px rgba(19, 34, 56, 0.08);
}

.guided-form label {
  display: grid;
  gap: 8px;
  color: var(--ink);
  font-weight: 850;
}

.guided-form select,
.guided-form input {
  min-height: 48px;
  width: 100%;
  padding: 0 13px;
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--white);
}

.guided-result {
  padding: 20px;
  border-radius: var(--radius);
  background: linear-gradient(135deg, var(--sky), var(--green-soft));
}

.guided-result[hidden] {
  display: none;
}

.guided-result strong,
.guided-result span,
.guided-result p {
  display: block;
}

.guided-result strong {
  color: var(--blue);
  font-size: 1.22rem;
}

.guided-result span {
  margin-top: 8px;
  color: var(--ink);
  font-weight: 950;
}

.guided-result p {
  margin-top: 8px;
  color: var(--muted);
}

.faq-intro-section {
  display: grid;
  grid-template-columns: minmax(0, 0.68fr) minmax(340px, 0.9fr);
  gap: clamp(24px, 5vw, 64px);
  align-items: center;
}

.faq-promise {
  padding: clamp(24px, 4vw, 44px);
  border: 1px solid var(--line);
  border-radius: 28px;
  background:
    radial-gradient(circle at 90% 14%, rgba(255, 212, 95, 0.28), transparent 30%),
    rgba(255, 255, 255, 0.82);
  box-shadow: 0 24px 80px rgba(19, 34, 56, 0.08);
}

.faq-promise .primary-button {
  margin-top: 24px;
}

.workflow-section {
  padding: clamp(28px, 5vw, 54px);
  border-radius: 28px;
  background:
    radial-gradient(circle at 10% 16%, rgba(54, 124, 255, 0.12), transparent 26%),
    radial-gradient(circle at 92% 12%, rgba(255, 212, 95, 0.24), transparent 28%),
    linear-gradient(135deg, #ffffff, #f7fbff);
  box-shadow: 0 24px 80px rgba(19, 34, 56, 0.08);
}

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.workflow-grid article {
  position: relative;
  display: grid;
  gap: 12px;
  align-content: start;
  min-height: 100%;
  padding: 22px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 18px 56px rgba(19, 34, 56, 0.08);
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}

.workflow-grid article:hover {
  transform: translateY(-7px);
  border-color: rgba(54, 124, 255, 0.24);
  box-shadow: var(--shadow);
}

.workflow-grid article:nth-child(1) {
  background: linear-gradient(145deg, #ffffff, #eaf1ff);
}

.workflow-grid article:nth-child(2) {
  background: linear-gradient(145deg, #ffffff, #fff2d4);
}

.workflow-grid article:nth-child(3) {
  background: linear-gradient(145deg, #ffffff, #e7fbef);
}

.workflow-grid article:nth-child(4) {
  background: linear-gradient(145deg, #ffffff, #f0ebff);
}

.workflow-grid span {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  color: var(--white);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  font-size: 0.82rem;
  font-weight: 950;
}

.workflow-grid p {
  color: var(--muted);
}

.language-section {
  padding: clamp(28px, 5vw, 54px);
  border-radius: 28px;
  background:
    radial-gradient(circle at 14% 18%, rgba(255, 212, 95, 0.26), transparent 28%),
    radial-gradient(circle at 86% 12%, rgba(54, 124, 255, 0.13), transparent 28%),
    linear-gradient(135deg, #ffffff, #f6fbff);
  box-shadow: 0 24px 80px rgba(19, 34, 56, 0.08);
}

.language-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.language-grid article {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-content: start;
  min-height: 100%;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 18px 56px rgba(19, 34, 56, 0.08);
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}

.language-grid article:hover {
  transform: translateY(-7px);
  border-color: rgba(54, 124, 255, 0.24);
  box-shadow: var(--shadow);
}

.language-grid article:nth-child(1) {
  background: linear-gradient(145deg, #ffffff, #fff2d4);
}

.language-grid article:nth-child(2) {
  background: linear-gradient(145deg, #ffffff, #eaf1ff);
}

.language-grid article:nth-child(3) {
  background: linear-gradient(145deg, #ffffff, #e7fbef);
}

.language-grid strong,
.language-grid p {
  flex: 0 0 100%;
}

.language-grid strong {
  color: var(--blue);
  font-size: 1.18rem;
}

.language-grid span {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 7px 10px;
  border: 1px solid rgba(19, 34, 56, 0.09);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  color: var(--ink);
  font-size: 0.88rem;
  font-weight: 900;
}

.language-grid p {
  color: var(--muted);
  line-height: 1.65;
}

.faq-list {
  display: grid;
  gap: 22px;
}

.faq-category-nav {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: clamp(24px, 4vw, 42px);
}

.faq-category-nav a {
  display: grid;
  gap: 6px;
  min-height: 112px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.84);
  box-shadow: 0 16px 46px rgba(19, 34, 56, 0.07);
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}

.faq-category-nav a:hover {
  transform: translateY(-6px);
  border-color: rgba(54, 124, 255, 0.24);
  box-shadow: var(--shadow);
}

.faq-category-nav a:nth-child(1) {
  background: linear-gradient(145deg, #ffffff, #eaf1ff);
}

.faq-category-nav a:nth-child(2) {
  background: linear-gradient(145deg, #ffffff, #fff2d4);
}

.faq-category-nav a:nth-child(3) {
  background: linear-gradient(145deg, #ffffff, #e7fbef);
}

.faq-category-nav a:nth-child(4) {
  background: linear-gradient(145deg, #ffffff, #f0ebff);
}

.faq-category-nav a:nth-child(5) {
  background: linear-gradient(145deg, #ffffff, #ffece7);
}

.faq-category-nav a:nth-child(6) {
  background: linear-gradient(145deg, #ffffff, #e7f7ff);
}

.faq-category-nav strong,
.faq-category-nav span {
  display: block;
}

.faq-category-nav strong {
  color: var(--ink);
  font-size: 1.04rem;
}

.faq-category-nav span {
  color: var(--muted);
  font-size: 0.92rem;
  font-weight: 800;
}

.faq-category {
  display: grid;
  gap: 12px;
  scroll-margin-top: 96px;
  padding: clamp(18px, 3vw, 26px);
  border: 1px solid rgba(19, 34, 56, 0.08);
  border-radius: 24px;
  background:
    radial-gradient(circle at 92% 8%, rgba(54, 124, 255, 0.07), transparent 22%),
    rgba(255, 255, 255, 0.62);
}

.faq-category-heading {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  margin-bottom: 6px;
}

.faq-category-heading > span {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  color: var(--white);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  font-size: 0.82rem;
  font-weight: 950;
}

.faq-category-heading h3 {
  font-size: clamp(1.35rem, 2.3vw, 2rem);
}

.faq-category-heading p {
  margin-top: 4px;
  color: var(--muted);
  line-height: 1.5;
}

.faq-list details {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 14px 42px rgba(19, 34, 56, 0.06);
  overflow: hidden;
}

.faq-list details[open] {
  border-color: rgba(54, 124, 255, 0.24);
  background:
    radial-gradient(circle at 92% 0%, rgba(66, 217, 181, 0.16), transparent 22%),
    #ffffff;
}

.faq-list summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 64px;
  padding: 18px 22px;
  color: var(--ink);
  font-size: 1.04rem;
  font-weight: 950;
  cursor: pointer;
  list-style: none;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list summary::after {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  content: "+";
  color: var(--white);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  font-weight: 950;
}

.faq-list details[open] summary::after {
  content: "-";
}

.faq-list details p {
  padding: 0 22px 20px;
  color: var(--muted);
  line-height: 1.75;
}

.faq-cta-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: clamp(28px, 5vw, 54px);
  border-radius: 28px;
  background:
    radial-gradient(circle at 16% 16%, rgba(255, 212, 95, 0.32), transparent 26%),
    radial-gradient(circle at 88% 18%, rgba(125, 92, 255, 0.16), transparent 28%),
    linear-gradient(135deg, #ffffff, #fffaf1);
  box-shadow: 0 24px 80px rgba(19, 34, 56, 0.08);
}

.faq-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.calm-note {
  background:
    radial-gradient(circle at 88% 10%, rgba(66, 217, 181, 0.18), transparent 28%),
    rgba(255, 255, 255, 0.82);
}

@media (max-width: 1080px) {
  .desktop-nav,
  .header-cta {
    display: none;
  }

  .menu-button {
    display: block;
  }

  .hero,
  .page-hero,
  .section-heading,
  .finder-section,
  .flagship-section,
  .booking-section,
  .guided-section,
  .parent-panel,
  .faq-preview-section,
  .faq-intro-section {
    grid-template-columns: 1fr;
  }

  .finder-copy,
  .booking-copy,
  .guided-copy {
    position: static;
  }

  .audience-switch,
  .vertical-grid,
  .student-path-grid,
  .workshop-grid,
  .proof-section,
  .workflow-grid,
  .language-grid,
  .faq-category-nav,
  .faq-support-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .date-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .slot-grid,
  .finder-tabs,
  .finder-fields,
  .booking-fields {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .site-header {
    min-height: 70px;
    padding: 10px 14px;
  }

  .mobile-menu {
    top: 70px;
  }

  .brand {
    min-width: 0;
  }

  .brand-mark {
    width: 42px;
    height: 42px;
    border-radius: 12px;
  }

  .brand strong {
    font-size: 0.9rem;
  }

  .brand small {
    max-width: 150px;
    font-size: 0.58rem;
  }

  .hero {
    min-height: auto;
    padding-top: 112px;
  }

  h1 {
    font-size: clamp(2.85rem, 14vw, 4.45rem);
  }

  .hero h1 {
    font-size: clamp(2.65rem, 12.8vw, 3.85rem);
    line-height: 1.04;
  }

  h2 {
    font-size: clamp(2rem, 10vw, 3.2rem);
  }

  .hero-visual,
  .hero-visual > img {
    min-height: 0;
    height: auto;
  }

  .page-hero-visual figcaption {
    width: 100%;
    margin-top: 12px;
  }

  .hero-visual > img {
    aspect-ratio: 1.05;
  }

  .orbit-card,
  .code-panel {
    position: relative;
    inset: auto;
    width: 100%;
    max-width: none;
    margin-top: 12px;
  }

  .audience-switch,
  .vertical-grid,
  .student-path-grid,
  .workshop-grid,
  .proof-section,
  .workflow-grid,
  .language-grid,
  .faq-category-nav,
  .faq-preview-grid,
  .faq-support-grid,
  .finder-tabs,
  .finder-fields,
  .date-grid,
  .slot-grid,
  .booking-fields {
    grid-template-columns: 1fr;
  }

  .site-footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .faq-cta-section {
    align-items: flex-start;
    flex-direction: column;
    border-radius: 18px;
  }
}

@media (max-width: 390px) {
  .hero,
  .section,
  .site-footer {
    width: min(100% - 24px, 1180px);
  }

  h1 {
    font-size: 2.58rem;
  }

  .hero h1 {
    font-size: 2.42rem;
  }
}

/* Color energy upgrade */
.site-header {
  background:
    linear-gradient(90deg, rgba(255, 250, 241, 0.92), rgba(244, 248, 255, 0.9)),
    rgba(255, 255, 255, 0.82);
}

.brand-mark {
  background: conic-gradient(from 140deg, var(--blue), var(--purple), var(--coral), var(--yellow), var(--mint), var(--blue));
}

.hero {
  position: relative;
  width: min(1220px, calc(100% - 32px));
  margin-top: 104px;
  min-height: calc(100vh - 104px);
  padding: clamp(28px, 5vw, 60px);
  border: 1px solid rgba(19, 34, 56, 0.08);
  border-radius: 28px;
  background:
    radial-gradient(circle at 8% 12%, rgba(255, 212, 95, 0.42), transparent 24%),
    radial-gradient(circle at 86% 10%, rgba(125, 92, 255, 0.18), transparent 26%),
    radial-gradient(circle at 72% 82%, rgba(66, 217, 181, 0.28), transparent 26%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.86), rgba(242, 248, 255, 0.78));
  box-shadow: 0 34px 110px rgba(19, 34, 56, 0.12);
}

.hero::before,
.hero::after {
  position: absolute;
  content: "";
  pointer-events: none;
  border-radius: 999px;
  filter: blur(0.2px);
  animation: driftBadge 9s ease-in-out infinite;
}

.hero::before {
  top: 22px;
  right: 34%;
  width: 82px;
  height: 82px;
  background:
    linear-gradient(135deg, var(--yellow), var(--coral));
  opacity: 0.72;
}

.hero::after {
  left: 44%;
  bottom: 28px;
  width: 120px;
  height: 46px;
  background:
    linear-gradient(135deg, var(--mint), var(--sky));
  opacity: 0.7;
}

@keyframes driftBadge {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(12px, -12px, 0) rotate(8deg);
  }
}

.hero-copy,
.hero-visual {
  position: relative;
  z-index: 1;
}

.hero-copy {
  min-width: 0;
}

.hero .eyebrow {
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(54, 124, 255, 0.12), rgba(66, 217, 181, 0.16));
}

h1 {
  background: linear-gradient(120deg, #132238 0%, #2859d8 42%, #7d5cff 72%, #ff7c65 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero h1 {
  max-width: 760px;
  overflow: visible;
  font-size: clamp(3rem, 5.9vw, 5.95rem);
  line-height: 1.02;
}

.trust-strip span:nth-child(1),
.business-grid span:nth-child(4n + 1),
.parent-points span:nth-child(4n + 1) {
  background: #eaf1ff;
  color: #17469f;
}

.trust-strip span:nth-child(2),
.business-grid span:nth-child(4n + 2),
.parent-points span:nth-child(4n + 2) {
  background: #fff2d4;
  color: #87570d;
}

.trust-strip span:nth-child(3),
.business-grid span:nth-child(4n + 3),
.parent-points span:nth-child(4n + 3) {
  background: #e7fbef;
  color: #12624e;
}

.trust-strip span:nth-child(4),
.trust-strip span:nth-child(5),
.business-grid span:nth-child(4n),
.parent-points span:nth-child(4n) {
  background: #f0ebff;
  color: #4830a8;
}

.audience-switch a:nth-child(1) {
  background: linear-gradient(135deg, #eaf1ff, #ffffff);
}

.audience-switch a:nth-child(2) {
  background: linear-gradient(135deg, #fff2d4, #ffffff);
}

.audience-switch a:nth-child(3) {
  background: linear-gradient(135deg, #e7fbef, #ffffff);
}

.vertical-card,
.student-path-grid article,
.workshop-grid article,
.proof-section article,
.session-roadmap article {
  position: relative;
  overflow: hidden;
}

.vertical-card::after,
.student-path-grid article::after,
.workshop-grid article::after,
.proof-section article::after,
.session-roadmap article::after {
  position: absolute;
  right: -28px;
  top: -28px;
  width: 96px;
  height: 96px;
  content: "";
  border-radius: 50%;
  opacity: 0.22;
  background: var(--blue);
  transition: transform 220ms ease, opacity 220ms ease;
}

.vertical-card:hover::after,
.student-path-grid article:hover::after,
.workshop-grid article:hover::after,
.proof-section article:hover::after,
.session-roadmap article:hover::after {
  opacity: 0.38;
  transform: scale(1.25);
}

.vertical-card:nth-child(1) {
  background: linear-gradient(145deg, #ffffff, #eaf1ff);
}

.vertical-card:nth-child(2) {
  background: linear-gradient(145deg, #ffffff, #fff2d4);
}

.vertical-card:nth-child(3) {
  background: linear-gradient(145deg, #ffffff, #e7fbef);
}

.vertical-card:nth-child(4) {
  background: linear-gradient(145deg, #ffffff, #f0ebff);
}

.vertical-card:nth-child(5) {
  background: linear-gradient(145deg, #ffffff, #ffece7);
}

.vertical-card:nth-child(6) {
  background: linear-gradient(145deg, #ffffff, #e7f7ff);
}

.vertical-card:nth-child(1)::after,
.student-path-grid article:nth-child(1)::after {
  background: var(--blue);
}

.vertical-card:nth-child(2)::after,
.student-path-grid article:nth-child(2)::after {
  background: var(--yellow);
}

.vertical-card:nth-child(3)::after,
.student-path-grid article:nth-child(3)::after {
  background: var(--mint);
}

.vertical-card:nth-child(4)::after,
.student-path-grid article:nth-child(4)::after {
  background: var(--purple);
}

.vertical-card:nth-child(5)::after {
  background: var(--coral);
}

.vertical-card:nth-child(6)::after {
  background: var(--sky);
}

.student-path-grid article:nth-child(1) {
  background: linear-gradient(145deg, #ffffff, #eaf1ff);
}

.student-path-grid article:nth-child(2) {
  background: linear-gradient(145deg, #ffffff, #fff7e5);
}

.student-path-grid article:nth-child(3) {
  background: linear-gradient(145deg, #ffffff, #e7fbef);
}

.student-path-grid article:nth-child(4) {
  background: linear-gradient(145deg, #ffffff, #f0ebff);
}

.student-path-grid strong {
  display: inline-flex;
  justify-self: start;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(54, 124, 255, 0.1);
}

.finder-section {
  padding: clamp(24px, 4vw, 44px);
  border: 1px solid rgba(19, 34, 56, 0.08);
  border-radius: 24px;
  background:
    radial-gradient(circle at 14% 16%, rgba(66, 217, 181, 0.22), transparent 28%),
    radial-gradient(circle at 92% 12%, rgba(255, 212, 95, 0.3), transparent 26%),
    rgba(255, 255, 255, 0.68);
  box-shadow: 0 22px 80px rgba(19, 34, 56, 0.08);
}

.solution-finder {
  border-width: 2px;
}

.finder-tabs button:nth-child(1).is-active,
.finder-tabs button:nth-child(1):hover {
  background: linear-gradient(135deg, var(--blue), var(--purple));
}

.finder-tabs button:nth-child(2).is-active,
.finder-tabs button:nth-child(2):hover {
  background: linear-gradient(135deg, var(--coral), var(--yellow));
}

.finder-tabs button:nth-child(3).is-active,
.finder-tabs button:nth-child(3):hover {
  background: linear-gradient(135deg, var(--mint), var(--blue));
}

.finder-tabs button:nth-child(4).is-active,
.finder-tabs button:nth-child(4):hover {
  background: linear-gradient(135deg, var(--purple), var(--coral));
}

.business-section {
  background:
    radial-gradient(circle at 8% 10%, rgba(255, 212, 95, 0.28), transparent 26%),
    radial-gradient(circle at 82% 20%, rgba(66, 217, 181, 0.2), transparent 30%),
    #ffffff;
}

.flagship-section {
  padding: clamp(28px, 5vw, 54px);
  border-radius: 28px;
  background:
    radial-gradient(circle at 88% 20%, rgba(125, 92, 255, 0.16), transparent 28%),
    linear-gradient(135deg, #ffffff, #f4f8ff);
  box-shadow: 0 24px 80px rgba(19, 34, 56, 0.08);
}

.booking-section {
  padding: clamp(28px, 5vw, 54px);
  border-radius: 28px;
  background:
    radial-gradient(circle at 10% 18%, rgba(255, 212, 95, 0.24), transparent 28%),
    radial-gradient(circle at 92% 12%, rgba(54, 124, 255, 0.13), transparent 28%),
    linear-gradient(135deg, #ffffff, #fffaf1);
  box-shadow: 0 24px 80px rgba(19, 34, 56, 0.08);
}

.date-grid button:nth-child(4n + 1) {
  background: #eaf1ff;
}

.date-grid button:nth-child(4n + 2) {
  background: #fff2d4;
}

.date-grid button:nth-child(4n + 3) {
  background: #e7fbef;
}

.date-grid button:nth-child(4n) {
  background: #f0ebff;
}

.slot-grid button {
  background: #ffffff;
}

.date-grid button.is-selected,
.slot-grid button.is-selected {
  background: linear-gradient(135deg, var(--blue), var(--purple));
}

.orbit-card-one {
  background: linear-gradient(135deg, #ffffff, #eaf1ff);
}

.orbit-card-two {
  background: linear-gradient(135deg, #ffffff, #fff2d4);
}

.orbit-card-three {
  background: linear-gradient(135deg, #ffffff, #e7fbef);
}

@media (max-width: 700px) {
  .hero {
    margin-top: 86px;
    border-radius: 18px;
  }

  .page-hero {
    margin-top: 86px;
    border-radius: 18px;
  }

  .finder-section,
  .flagship-section,
  .booking-section,
  .workflow-section,
  .language-section,
  .faq-preview-section,
  .faq-promise,
  .faq-cta-section {
    border-radius: 18px;
    padding: 22px 16px;
  }

  .faq-list summary {
    padding: 16px;
    font-size: 0.98rem;
  }

  .faq-list details p {
    padding: 0 16px 16px;
  }
}
