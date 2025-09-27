import React, { useEffect, useRef } from 'react';
import { DotLottie } from '@lottiefiles/dotlottie-web';

interface LottieAnimationProps {
  src: string;
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Lottie 动画组件
 * 用于在 React 组件中显示 Lottie 动画
 */
const LottieAnimation: React.FC<LottieAnimationProps> = ({
  src,
  className,
  width = 300,
  height = 300,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotLottieRef = useRef<DotLottie | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // 清理之前的动画实例
      if (dotLottieRef.current) {
        dotLottieRef.current.destroy();
      }

      // 创建新的 DotLottie 实例
      dotLottieRef.current = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: canvasRef.current,
        src: src,
      });
    }

    // 清理函数
    return () => {
      if (dotLottieRef.current) {
        dotLottieRef.current.destroy();
        dotLottieRef.current = null;
      }
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      width={width}
      height={height}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

export default LottieAnimation;