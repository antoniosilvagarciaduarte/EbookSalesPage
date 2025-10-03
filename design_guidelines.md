# Design Guidelines: Credit Score eBook Landing Page

## Design Approach
**Reference-Based Strategy**: Drawing inspiration from high-converting digital product landing pages (Gumroad, ConvertKit, Teachable) with trust-building elements from financial services (Nubank, PagBank). This approach emphasizes credibility, clear value proposition, and conversion optimization for a Brazilian audience.

## Core Design Principles
1. **Trust & Authority**: Professional, serious tone establishing financial credibility
2. **Clear Value Hierarchy**: Two-tier pricing must be immediately understandable
3. **Conversion Focus**: Strategic CTA placement and mental trigger integration
4. **Localized Experience**: Authentic Brazilian Portuguese content and cultural relevance

---

## Color System

### Primary Colors (Dark Mode Base)
- **Trust Blue**: 213 71% 23% (Base: #0D3B66) - Headers, navigation, trust elements
- **Prosperity Green**: 182 52% 50% (Base: #3FC1C9) - CTAs, growth indicators, success states
- **Clean Background**: 0 0% 96% (Base: #F4F4F4) - Section backgrounds
- **Pure White**: 0 0% 100% - Card backgrounds, text contrast

### Accent & Supporting
- **Dark Blue Hover**: 213 71% 18% - CTA hover states, active elements
- **Success Green Light**: 182 52% 85% - Benefit highlights, checkmarks
- **Text Primary**: 0 0% 13% - Body copy
- **Text Secondary**: 0 0% 45% - Supporting text, disclaimers

---

## Typography Scale

### Font Families
- **Display/Headings**: Montserrat Bold (700) or Poppins Bold (700)
- **Body/UI**: Roboto (400, 500) or Open Sans (400, 600)

### Type Scale
- **Hero Headline**: text-5xl md:text-6xl lg:text-7xl, font-bold, leading-tight
- **Section Headers**: text-3xl md:text-4xl, font-bold, mb-4
- **Subheadlines**: text-xl md:text-2xl, font-medium, text-secondary
- **Body Text**: text-base md:text-lg, leading-relaxed
- **UI Elements**: text-sm md:text-base, font-medium
- **Captions/Fine Print**: text-xs md:text-sm, text-secondary

---

## Layout System

### Spacing Primitives
**Core Units**: Tailwind units of **4, 6, 8, 12, 16, 20** for consistent rhythm
- Component padding: p-6 md:p-8
- Section spacing: py-16 md:py-20 lg:py-24
- Card gaps: gap-6 md:gap-8
- Content margins: mb-4, mb-6, mb-8 for hierarchy

### Grid & Containers
- **Max Width**: max-w-7xl for full sections, max-w-4xl for content-focused areas
- **Columns**: Single column mobile, 2-column tablet (md:grid-cols-2), 3-column desktop (lg:grid-cols-3) for features/testimonials
- **Asymmetric Hero**: 60/40 split (content/visual) on desktop

---

## Component Library

### Navigation Header
- **Fixed position** with backdrop blur (backdrop-blur-lg bg-white/90)
- Logo left, nav links center, "Comprar Agora" CTA right (always visible)
- Smooth scroll behavior to sections
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- **Two-column layout** (lg:grid-cols-2): Left 60% content, Right 40% visual
- Headline + subheadline + dual CTAs ("Comprar Agora" green, "Baixar Amostra Grátis" outline)
- Urgency badge: "Oferta por Tempo Limitado" (red/orange accent, absolute positioned)
- Background: Subtle gradient overlay on financial growth chart image
- Height: min-h-[600px] md:min-h-[700px], not forced 100vh

### Purchase Boxes (Critical)
Two distinct pricing cards with equal visual weight:

**Single eBook Box**:
- Price: "R$19,99" (text-4xl font-bold)
- Title: "eBook: Transforme Seu Score"
- Green CTA button: "Comprar Agora" (full width, py-4)
- Card: White bg, shadow-xl, rounded-2xl, p-8

**Complete Package Box**:
- Price: "R$39,99" (text-4xl font-bold, green color highlight)
- Title: "Pacote Completo: Ebook + 6 Mini eBooks"
- Green CTA button: "Comprar Pacote Completo" (full width, py-4)
- Card: Same styling, positioned side-by-side on desktop (grid-cols-1 md:grid-cols-2 gap-6)
- Visual separator: 20px gap between boxes

### About Section
- **3-column benefit cards** (icons + title + description)
- Checkmark icons (✔) in green circles for each benefit
- Social proof badge: "Mais de 1.000 leitores transformaram sua pontuação" (prominent placement)
- eBook mockup images: Arrange main eBook + mini-eBooks in staggered grid

### Bonus Section
- **Grid of 6 mini-eBooks** (grid-cols-2 md:grid-cols-3)
- Each card: Mini cover image + title
- Value perception callout: "Valor Real R$297, Hoje por R$39,99" (strikethrough pricing)
- CTA: "Adicione ao Pacote e Turbine Seus Resultados"

### Testimonials
- **3-column grid** (stacks to single on mobile)
- Avatar image (circular, 64px) + name + quote
- Star rating visual (5 stars, green color)
- Card style: Light background, subtle shadow, rounded corners

### Guarantee Section
- **Centered content** with shield icon
- Bold headline: "Garantia de 7 Dias ou Seu Dinheiro de Volta"
- Supporting text: "Sem burocracia, sem perguntas"
- Background: Green tint (very light, 182 52% 95%)

### Footer
- **4-column grid** (stacks on mobile): Links, Contato, Social, Legal
- Quick nav links with smooth scroll
- Social icons (horizontal row)
- Disclaimer: "Os resultados podem variar" (small text, gray)

---

## Interactive Elements

### Buttons
**Primary CTA** (Comprar Agora/Comprar Pacote):
- Background: Green (#3FC1C9), text-white, py-3 px-8, rounded-lg
- Hover: Dark blue (#0D3B66), transform scale-105 transition
- Active: Slight scale-down (scale-98)

**Secondary CTA** (Baixar Amostra):
- Outline style: border-2 border-green, text-green
- Hover: bg-green, text-white
- Same padding/rounding as primary

### Hover States
- Cards: Lift on hover (shadow-2xl, -translate-y-1)
- Links: Underline animation, color shift to green
- Images: Subtle zoom (scale-105, 300ms transition)

---

## Images

### Hero Section
- **Large hero image**: Financial growth chart or person smiling with credit card
- Placement: Right side of hero (40% width), or background with overlay
- Treatment: Subtle overlay gradient (Trust Blue to transparent)

### Product Mockups
- **Main eBook cover**: High-quality 3D mockup, prominent in About section
- **6 Mini-eBook covers**: Smaller thumbnails in Bonus section grid
- **Arrangement**: Main eBook larger (600px height), mini-eBooks as supporting visuals

### Testimonial Avatars
- **Client photos**: Circular crops, 80px diameter
- Fallback: Gradient avatars with initials if no photos

### Icons & Graphics
- **Checkmarks**: Font Awesome or Heroicons, green circular backgrounds
- **Shield icon**: For guarantee section
- **Payment logos**: PayPal/Mercado Pago acceptance badges in footer

---

## Responsive Breakpoints
- **Mobile**: Single column, stacked cards, hamburger nav
- **Tablet (md: 768px)**: 2-column grids, expanded nav
- **Desktop (lg: 1024px)**: Full multi-column layouts, side-by-side pricing boxes
- **Large (xl: 1280px)**: Max content width, generous whitespace

---

## Conversion Optimization
1. **Above-fold CTA**: Hero section CTA visible without scrolling
2. **Sticky header CTA**: "Comprar Agora" always accessible
3. **Multiple conversion points**: CTAs in hero, after About, after Bonus, before footer
4. **Clear pricing hierarchy**: Both options visible simultaneously, easy comparison
5. **Trust signals**: Testimonials, guarantee, social proof strategically placed
6. **Urgency triggers**: "Oferta por Tempo Limitado" badge in hero
7. **Value perception**: Show R$297 value, offer at R$39,99 for complete package