# 🎨 DESERTIA BRAND GUIDELINES

## Brand Essence

**Desertia** represents the intersection of ancient desert beauty and modern technology. We're not just a travel platform—we're a gateway to transformative desert experiences.

### Brand Personality

- **Elegant** yet approachable
- **Adventurous** yet safe
- **Mysterious** yet transparent
- **Premium** yet accessible
- **Tech-forward** yet human

## Visual Identity

### Logo Usage

#### Clear Space
Maintain a minimum clear space equal to the height of the sun element around all sides of the logo.

#### Minimum Size
- Digital: 120px width
- Print: 30mm width

#### Don'ts
- ❌ Don't rotate the logo
- ❌ Don't change colors arbitrarily
- ❌ Don't add effects or shadows
- ❌ Don't place on busy backgrounds
- ❌ Don't separate icon from text (unless using icon-only variant)

### Color System

#### Primary Palette
```
Sand Beige:     #F2E6C9  RGB(242, 230, 201)  CMYK(0, 5, 17, 5)
Desert Gold:    #D8B36A  RGB(216, 179, 106)  CMYK(0, 17, 51, 15)
Warm Terracotta:#C17C54  RGB(193, 124, 84)   CMYK(0, 36, 56, 24)
Dark Brown:     #4A3B2A  RGB(74, 59, 42)     CMYK(0, 20, 43, 71)
```

#### Accent Palette
```
Night Sky:      #0B1D2A  RGB(11, 29, 42)     CMYK(74, 31, 0, 84)
Soft Sky:       #6FA8DC  RGB(111, 168, 220)  CMYK(50, 24, 0, 14)
```

#### Usage Guidelines
- **Sand Beige**: Backgrounds, soft elements
- **Desert Gold**: Primary CTAs, highlights, premium elements
- **Warm Terracotta**: Secondary actions, accents
- **Dark Brown**: Text, headers, strong elements
- **Night Sky**: Dark mode backgrounds, depth
- **Soft Sky**: Links, interactive elements, water features

### Typography

#### Primary Typeface: Sora
```
Headings:   Sora Bold (700)
           Sora SemiBold (600)

Body:      Sora Regular (400)
           Sora Medium (500)

Special:   Sora Light (300) for large display
```

#### Type Scale
```
Display:    64px / 4rem     (Hero headlines)
H1:         48px / 3rem     (Page titles)
H2:         36px / 2.25rem  (Section headers)
H3:         24px / 1.5rem   (Card titles)
H4:         20px / 1.25rem  (Subsections)
Body:       16px / 1rem     (Paragraphs)
Small:      14px / 0.875rem (Captions, labels)
Tiny:       12px / 0.75rem  (Fine print)
```

#### Letter Spacing
```
Brand Name: 0.08em (very wide)
Headings:   0.02em (slightly wide)
Body:       0em (normal)
Uppercase:  0.1em (extra wide)
```

### Iconography

- **Style**: Outlined, rounded corners
- **Weight**: 2px stroke
- **Library**: Lucide React
- **Color**: Inherit from context
- **Size**: 16px, 20px, 24px, 32px

### Photography Style

#### Desert Imagery
- High contrast, dramatic lighting
- Golden hour preferred
- Cinematic composition
- No filters—natural colors
- Show scale with human element (occasionally)

#### Subject Matter
- Vast landscapes
- Close-up textures (sand, rocks)
- Starry night skies
- Local culture (respectfully)
- Activities in action

### Gradients

#### Brand Gradient
```css
background: linear-gradient(135deg, #D8B36A 0%, #C17C54 50%, #D8B36A 100%);
```

#### Sky Gradient
```css
background: linear-gradient(180deg, #6FA8DC 0%, #F2E6C9 100%);
```

#### Night Gradient
```css
background: linear-gradient(180deg, #0B1D2A 0%, #1A2F3D 100%);
```

## UI Components

### Buttons

#### Primary
- Background: Desert Gold gradient
- Text: White
- Border radius: 9999px (full rounded)
- Padding: 12px 32px
- Hover: Scale 1.05

#### Secondary
- Background: Transparent
- Border: 2px Desert Gold
- Text: Desert Gold
- Hover: Fill with Desert Gold

#### Tertiary
- Background: None
- Text: Desert Gold
- Underline on hover

### Cards

#### Standard
- Background: White/Card color
- Border: 1px border color
- Border radius: 16px
- Shadow: Soft, elevated
- Hover: Lift -4px, increase shadow

#### Premium
- Background: Glassmorphism
- Border: Gold with opacity
- Backdrop filter: Blur
- Hover: Glow effect

### Forms

#### Input Fields
- Border radius: 12px
- Background: Input background color
- Border: 1px border color
- Focus: 2px Desert Gold ring
- Padding: 12px 16px

#### Select Dropdowns
- Match input styling
- Custom arrow icon
- Dropdown: Card style with shadow

## Animation Principles

### Timing
- **Fast**: 150ms (micro-interactions)
- **Normal**: 300ms (standard transitions)
- **Slow**: 600ms (page transitions)
- **Cinematic**: 1000ms+ (hero animations)

### Easing
- **Standard**: cubic-bezier(0.4, 0, 0.2, 1)
- **Bounce**: spring physics
- **Smooth**: ease-in-out

### Motion
- Prefer subtle, purposeful animations
- Use parallax for depth
- Floating/breathing effects for ambiance
- Scale hover effects for cards
- Fade + slide for page transitions

## Voice & Tone

### Brand Voice
- **Knowledgeable** without being pretentious
- **Inspiring** without being cheesy
- **Professional** without being cold
- **Adventurous** without being reckless

### Writing Style
- Use active voice
- Short, clear sentences
- Avoid jargon
- Be specific, not generic
- Show, don't just tell

### Example Phrases
✅ "Experience the White Desert's surreal moonscape"
❌ "Visit a nice place in the desert"

✅ "Sleep under a blanket of stars"
❌ "Overnight camping available"

✅ "Our AI creates your perfect desert journey"
❌ "We use algorithms to plan trips"

## Spacing System

```
4px:   0.25rem  (xs)
8px:   0.5rem   (sm)
12px:  0.75rem  (md)
16px:  1rem     (lg)
24px:  1.5rem   (xl)
32px:  2rem     (2xl)
48px:  3rem     (3xl)
64px:  4rem     (4xl)
```

## Accessibility

### Color Contrast
- Text on light backgrounds: AAA (7:1)
- Text on dark backgrounds: AAA (7:1)
- Interactive elements: Minimum AA (4.5:1)

### Focus States
- Visible focus ring on all interactive elements
- 2px Desert Gold outline
- Never remove focus styles

### Motion
- Respect prefers-reduced-motion
- Provide static alternatives
- Don't rely solely on animation to convey info

## Dark Mode

### Adaptations
- Background: Night Sky (#0B1D2A)
- Cards: Lighter Navy (#1A2F3D)
- Text: Sand Beige (#F2E6C9)
- Accents: Keep Desert Gold
- Reduce brightness of photos slightly

## Social Media

### Profile Images
- Use icon-only logo variant
- Centered on brand gradient background
- Add subtle glow effect

### Post Templates
- Landscape ratio: 16:9
- Square ratio: 1:1
- Story ratio: 9:16
- Always include logo watermark
- Maintain brand colors

## Application Examples

### Website
- Clean, spacious layouts
- Cinematic hero sections
- Premium card designs
- Smooth scroll effects
- Immersive imagery

### Mobile App
- Bottom navigation
- Gesture-friendly
- Thumb-zone aware
- Quick actions prominent
- Native feel with brand personality

### Marketing Materials
- High-quality desert photography
- Minimalist layouts
- Strategic use of gradients
- Clear hierarchy
- Inspiring copy

---

**These guidelines ensure consistency across all Desertia touchpoints** ✨
