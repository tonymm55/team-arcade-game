import { useRef, useEffect } from "react";
import cityForeground from "../../assets/Runner/animations/background/city-foreground.png";
import cityMiddle from "../../assets/Runner/animations/background/city-middle.png";
import cityBack from "../../assets/Runner/animations/background/city-back.png";

const RunnerParallaxBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 600;

    const backgroundImage1 = new Image();
    backgroundImage1.src = cityBack;
    const backgroundImage2 = new Image();
    backgroundImage2.src = cityMiddle;
    const backgroundImage3 = new Image();
    backgroundImage3.src = cityForeground;

    let bggamespeed = 4;

    class BGLayer {
      constructor(image, speedModifier, width) {
        this.image = image;
        this.speedModifier = speedModifier;
        this.height = 600;
        this.width = width;
        this.x = 0;
        this.y = 0;
        this.speed = bggamespeed * this.speedModifier;
        this.numImages = Math.ceil(canvas.width / this.width) + 1;
      }
      update() {
        this.speed = bggamespeed * this.speedModifier;
        if (this.x <= -this.width) {
          this.x += this.width;
        }
        this.x = Math.floor(this.x - this.speed);
        this.draw();
      }
      draw() {
        for (let i = 0; i < this.numImages; i++) {
          ctx.drawImage(
            this.image,
            this.x + i * this.width,
            this.y,
            this.width,
            this.height
          );
        }
      }
    }

    const layer1 = new BGLayer(backgroundImage1, 0.1, 246);
    const layer2 = new BGLayer(backgroundImage2, 0.3, 563);
    const layer3 = new BGLayer(backgroundImage3, 0.55, 1511);

    function bganimate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      layer1.update();
      layer2.update();
      layer3.update();
      requestAnimationFrame(bganimate);
    }

    bganimate();
  }, []);

  return <canvas ref={canvasRef} width={800} height={window.innerHeight} />;
};

export default RunnerParallaxBackground;
