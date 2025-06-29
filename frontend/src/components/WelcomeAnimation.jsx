import { useState, useEffect } from "react";
import {
  ShipWheelIcon,
  GlobeIcon,
  MessageCircleIcon,
  VideoIcon,
} from "lucide-react";

const WelcomeAnimation = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    {
      icon: <GlobeIcon className="w-16 h-16 text-primary" />,
      title: "Connect Globally",
      description: "Find language partners from around the world",
    },
    {
      icon: <MessageCircleIcon className="w-16 h-16 text-secondary" />,
      title: "Chat & Learn",
      description: "Practice conversations in real-time",
    },
    {
      icon: <VideoIcon className="w-16 h-16 text-accent" />,
      title: "Video Calls",
      description: "Face-to-face language exchange",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          onComplete();
        }, 1000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentStep, steps.length, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-base-100 z-50 flex items-center justify-center">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShipWheelIcon className="w-12 h-12 text-primary animate-spin" />
            <span className="text-4xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Vibin
            </span>
          </div>
          <p className="text-lg opacity-70">
            Your Language Learning Journey Starts Here
          </p>
        </div>

        {/* Animated Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                index === currentStep
                  ? "opacity-100 transform translate-y-0 scale-100"
                  : index < currentStep
                  ? "opacity-50 transform translate-y-0 scale-95"
                  : "opacity-0 transform translate-y-4 scale-90"
              }`}
            >
              <div className="flex items-center justify-center gap-4">
                <div
                  className={`transition-all duration-500 ${
                    index === currentStep ? "animate-bounce" : ""
                  }`}
                >
                  {step.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="opacity-70">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? "bg-primary scale-125"
                  : index < currentStep
                  ? "bg-primary/50"
                  : "bg-base-300"
              }`}
            />
          ))}
        </div>

        {/* Loading Bar */}
        <div className="w-64 mx-auto bg-base-300 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeAnimation;
