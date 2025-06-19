# 🎇 Dynamic Triangle Light Show - p5.js Animation

This project is a generative art animation built with [p5.js](https://p5js.org/), designed to create a mesmerizing light show of colorful lines and geometric shapes. The sketch animates an evolving pattern of lines within a symmetrical triangle composition, giving it a futuristic, pulsing aesthetic.

![preview](preview.png) <!-- Optional: Add a preview image of your animation -->

## 🚀 Features

- **Dynamic line animation** that changes in density over time
- **Symmetrical triangle overlay** for visual framing
- **Auto-refresh every 200ms** to create a looping light show
- **Color-cycling strokes** for a continuous, flowing gradient effect

## 🎨 How It Works

- The `setup()` function triggers a repeating call to `startLightShow()` every 200 milliseconds.
- In `startLightShow()`, the canvas is redrawn and cleared with a black background.
- The `drawLines()` function draws a grid of lines from the top to the bottom of the canvas using changing RGB values.
- Three translucent black triangles overlay the canvas, converging at the center to form a sharp, symmetric pattern.
- The `amountTracker` variable increases and decreases between 1 and 50 to control the number of lines, giving a breathing, wave-like animation.

## 🧠 Concepts Used

- **p5.js canvas and drawing functions**
- **Looping and color interpolation**
- **Geometry and symmetry**
- **Interval-based animation**

## 🛠️ Usage

1. **Clone or Download** this repository.
2. Open `index.html` (make sure it includes a reference to your p5.js file).
3. Watch the animated light show run automatically in your browser.

```bash
git clone https://github.com/your-username/triangle-light-show.git
cd triangle-light-show
open index.html  # or serve with a local web server
```
