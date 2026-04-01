import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function FloatingWhatsApp() {
  const [isExpanded, setIsExpanded] = useState(false);

  const whatsappNumber = "919066330362";
  const defaultMessage = encodeURIComponent(
    "Hi! I'm interested in your painting services. Can you please share more details?"
  );

  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${defaultMessage}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Message Bubble (shows on hover/tap on desktop) */}
        {isExpanded && (
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-[280px] animate-in slide-in-from-bottom-2 hidden sm:block">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">PP</span>
              </div>
              <div>
                <div className="font-semibold text-sm mb-1">Premium Paints</div>
                <div className="text-xs text-muted-foreground">
                  Typically replies within minutes
                </div>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-lg p-3 mb-3">
              <p className="text-sm">
                Hi there! 👋 Need a free quote for your painting project?
              </p>
            </div>
            <Button
              onClick={handleClick}
              className="w-full bg-green-600 hover:bg-green-700"
              size="sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Start Chat
            </Button>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className="group relative w-14 h-14 sm:w-16 sm:h-16 bg-green-600 hover:bg-green-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-75"></span>
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            1
          </span>
        </button>

        {/* Mobile Tooltip */}
        <div className="sm:hidden absolute -left-32 bottom-0 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us!
        </div>
      </div>

      {/* Mobile: Quick Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-lg sm:hidden">
        <div className="grid grid-cols-2 gap-0">
          <a
            href="tel:+919066330362"
            className="flex items-center justify-center gap-2 py-4 active:bg-secondary transition-colors"
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xl">📞</span>
            </div>
            <div className="text-left">
              <div className="text-xs text-muted-foreground">Call Now</div>
              <div className="text-sm font-semibold">9066330262</div>
            </div>
          </a>
          <button
            onClick={handleClick}
            className="flex items-center justify-center gap-2 py-4 border-l border-border active:bg-green-50 transition-colors"
          >
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="text-xs text-muted-foreground">WhatsApp</div>
              <div className="text-sm font-semibold text-green-600">Chat Now</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
